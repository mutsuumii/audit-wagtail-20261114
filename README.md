# Security audit: wagtail/wagtail

Date: 2026-11-14 | Auditor: [mutsuumii](https://github.com/mutsuumii)

## Summary

Found 17 issue(s): 17 high.

## Findings

### 1. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/tests/test_audit_log.py` line 32

Credentials hardcoded in source. Anyone with repo access can extract them.

```
password="password",
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 2. [HIGH] DOM XSS via innerHTML

**CWE-79** | `client/src/controllers/TagController.test.js` line 47

Setting innerHTML with user data allows script injection in other users' browsers.

```
document.body.innerHTML = `
```

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
---

### 3. [HIGH] DOM XSS via innerHTML

**CWE-79** | `client/src/controllers/TagController.test.js` line 97

Setting innerHTML with user data allows script injection in other users' browsers.

```
document.body.innerHTML = `
```

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
---

### 4. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/snippets/tests/test_api_v3/test_revisions.py` line 47

Credentials hardcoded in source. Anyone with repo access can extract them.

```
user = self.create_user(username=username, password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 5. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/snippets/tests/test_api_v3/test_revisions.py` line 55

Credentials hardcoded in source. Anyone with repo access can extract them.

```
self.login(username=username, password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 6. [HIGH] DOM XSS via innerHTML

**CWE-79** | `client/src/includes/chooserModal.test.js` line 10

Setting innerHTML with user data allows script injection in other users' browsers.

```
document.body.innerHTML = `
```

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
---

### 7. [HIGH] DOM XSS via innerHTML

**CWE-79** | `client/src/includes/metadataPreview.ts` line 87

Setting innerHTML with user data allows script injection in other users' browsers.

```
container.innerHTML = '';
```

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
---

### 8. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 793

Credentials hardcoded in source. Anyone with repo access can extract them.

```
username="moriarty", email="moriarty@example.com", password="password"
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 9. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 797

Credentials hardcoded in source. Anyone with repo access can extract them.

```
self.login(username="moriarty", password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 10. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2278

Credentials hardcoded in source. Anyone with repo access can extract them.

```
username="moriarty", email="moriarty@example.com", password="password"
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 11. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2282

Credentials hardcoded in source. Anyone with repo access can extract them.

```
self.login(username="moriarty", password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 12. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2439

Credentials hardcoded in source. Anyone with repo access can extract them.

```
username="changeonly", email="changeonly@example.com", password="password"
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 13. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2456

Credentials hardcoded in source. Anyone with repo access can extract them.

```
self.login(username="changeonly", password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 14. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2469

Credentials hardcoded in source. Anyone with repo access can extract them.

```
username="addonly", email="addonly@example.com", password="password"
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 15. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2486

Credentials hardcoded in source. Anyone with repo access can extract them.

```
self.login(username="addonly", password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 16. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2509

Credentials hardcoded in source. Anyone with repo access can extract them.

```
username="changeonly", email="changeonly@example.com", password="password"
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---

### 17. [HIGH] Hardcoded credentials

**CWE-798** | `wagtail/documents/tests/test_admin_views.py` line 2526

Credentials hardcoded in source. Anyone with repo access can extract them.

```
self.login(username="changeonly", password="password")
```

**Fix:** Use os.environ.get('SECRET') or a secrets manager. Never commit credentials.
---
