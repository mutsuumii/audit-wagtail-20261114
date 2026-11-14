# DOM XSS via innerHTML
# CWE-79 | Severity: HIGH
# File: client/src/controllers/TagController.test.js line 47

**Risk:** Setting innerHTML with user data allows script injection in other users' browsers.

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
