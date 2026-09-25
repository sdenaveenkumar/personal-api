/**
 * Input Sanitizer & Validation Utilities
 * Defends against Cross-Site Scripting (XSS), Control Character Injections,
 * ReDoS, and malformed inputs.
 */

/**
 * Strips HTML tags, script brackets, and non-printable control characters,
 * enforcing maximum string bounds.
 */
export function sanitizeText(input, maxLength = 1000) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates email format using an efficient, ReDoS-safe RFC-compliant regex.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}
