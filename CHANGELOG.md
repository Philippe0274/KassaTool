# Changelog

## 1.0.3
- Bugfix: service worker gebruikt nu altijd een expliciete GET-cachekey voor documentcaching.
- Bugfix: voorkomt dat POST-requests via cache.put() in de Cache API terechtkomen.

## 1.0.2
- Bugfix: service worker cache.put() ondersteunt alleen GET-requests.
- Verbetering PWA-updateprocedure.