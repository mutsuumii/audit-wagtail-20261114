# DOM XSS via innerHTML
# CWE-79 | Severity: HIGH
# File: client/src/includes/chooserModal.test.js line 10

**Risk:** Setting innerHTML with user data allows script injection in other users' browsers.

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
