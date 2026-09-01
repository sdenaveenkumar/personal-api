import { profileData } from '../data/loader.js';

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
  const { name, email, subject, message } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Validation Error',
      field: 'name',
      message: 'Sender name is required.'
    });
  }

  if (!email || !email.trim() || !email.includes('@')) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Validation Error',
      field: 'email',
      message: 'A valid email address is required.'
    });
  }

  if (!message || !message.trim() || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Validation Error',
      field: 'message',
      message: 'Message must be at least 5 characters long.'
    });
  }

  const messageRecord = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: (subject || 'General Inquiry').trim(),
    message: message.trim(),
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
    message: `Thank you, ${name}! Your message has been received by Naveen Kumar's Personal API service.`,
    data: {
      messageId: messageRecord.id,
      receivedAt: messageRecord.receivedAt,
      expectedResponseTime: profileData.contact.responseTime
    }
  });
};
