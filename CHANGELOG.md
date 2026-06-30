# Changelog

## 1.1.0
- Stap 2A: historische artikelgegevens in kassatransacties worden losgekoppeld van de actuele prijslijst.
- Versieverhoging: nieuwe functionele release voor historisch correcte transacties.

## 1.0.4
- Bugfix: service worker cachet bij installatie alleen bestaande productie-bestanden.
- Bugfix: vervangt de niet-bestaande index_kassa tool.html fallback door index.html voor GitHub Pages.

## 1.0.3
- Bugfix: service worker gebruikt nu altijd een expliciete GET-cachekey voor documentcaching.
- Bugfix: voorkomt dat POST-requests via cache.put() in de Cache API terechtkomen.

## 1.0.2
- Bugfix: service worker cache.put() ondersteunt alleen GET-requests.
- Verbetering PWA-updateprocedure.