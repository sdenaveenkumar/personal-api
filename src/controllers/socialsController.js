import { profileData } from '../data/loader.js';
import { sanitizeText, isValidEmail } from '../utils/sanitizer.js';

const receivedMessages = [];

export const getSocials = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    count: profileData.socials.length,
    data: profileData.socials
  });
};

export const getContact = (req, res) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    data: profileData.contact
  });
};

export const submitContact = (req, res) => {
  const { name, email, subject, message, _gotcha, website } = req.body || {};

  // Honeypot bot trap: If hidden fields are filled, reject automated submission
  if (_gotcha || website) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: {
        code: 'BOT_DETECTED',
        message: 'Automated submission rejected.'
      }
    });
  }

  const cleanName = sanitizeText(name, 100);
  const cleanEmail = (email || '').trim().toLowerCase().slice(0, 150);
  const cleanSubject = sanitizeText(subject || 'General Inquiry', 200);
  const cleanMessage = sanitizeText(message, 3000);

  if (!cleanName) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Validation Error',
      field: 'name',
      message: 'Sender name is required (max 100 characters).'
    });
  }

  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Validation Error',
      field: 'email',
      message: 'A valid email address is required.'
    });
  }

  if (!cleanMessage || cleanMessage.length < 5) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Validation Error',
      field: 'message',
      message: 'Message must be between 5 and 3000 characters.'
    });
  }

  const messageRecord = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage,
    receivedAt: new Date().toISOString(),
    status: 'received'
  };

  receivedMessages.push(messageRecord);

  // Keep in-memory store bounded
  if (receivedMessages.length > 100) {
    receivedMessages.shift();
  }

  res.status(201).json({
    success: true,
    status: 201,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    message: `Thank you, ${cleanName}! Your message has been received by Naveen Kumar's Personal API service.`,
    data: {
      messageId: messageRecord.id,
      name: cleanName,
      subject: cleanSubject,
      message: cleanMessage,
      receivedAt: messageRecord.receivedAt,
      expectedResponseTime: profileData.contact.responseTime
    }
  });
};
