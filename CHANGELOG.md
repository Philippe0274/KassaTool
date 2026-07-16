# Changelog

## 1.2.5
- Retro-kassa compacter gemaakt voor tablets: artikeltegels, winkelkarregels en rechterbediening nemen minder ruimte in.
- Rechterpaneel krijgt meer bruikbare breedte zodat betaalwijze, scenario en opslaan niet meer overlappen.
- Betaalbuttons, scenario-knoppen, numeriek klavier en opslaanknop visueel verkleind zonder functionaliteit te wijzigen.

## 1.2.4
- Retro-kassa ondersteunt nu dezelfde betaalscenario's als de klassieke transactie-invoer.
- Toegevoegd: betaald bedrag, Exact, Wisselgeld en Gift-verschil in het rechterpaneel.
- Retro-transacties vullen voortaan het bestaande scenario- en klantbedragveld correct in.
- Gift zonder aankoop blijft beschikbaar via de bestaande Gift-betaalknop.

## 1.2.3
- Retro-kassa: artikelknoppen compacter en visueel aantrekkelijker gemaakt voor tabletgebruik.
- Productknoppen tonen nu een compacte badge, kleurvlak, artikelnaam en prijslabel.
- Verwijderen van artikelen verplaatst naar een klein verwijdericoon per winkelkarregel.
- Rechter bedieningspaneel opgeschoond: Cash, Kaart, Gift en Transactie opslaan blijven behouden.

## 1.2.2
- Retro-kassa geoptimaliseerd voor tabletlandscape met drie zones: artikelen links, winkelkar midden en bediening rechts.
- Numeriek klavier werkt nu als echte aantalingave: meerdere tikken vormen samen een getal, bijvoorbeeld 5 + 5 = 55.
- Rechter bediening toont het geselecteerde artikel en het actieve aantal.
- Touchbediening voor artikel- en aantalknoppen verder versterkt.

## 1.2.1
- Tabletbediening uitgebreid met een apart retro-kassascherm voor nieuwe transacties.
- Nieuwe kassaweergave heeft grote artikelknoppen, een visuele winkelkar, grote aantalknoppen, betaalkeuze en een groot totaaldisplay.
- De retro-kassa gebruikt dezelfde bestaande transactiestructuur en exportlogica als de klassieke invoer.
- Klassieke transactie-invoer blijft behouden als fallback voor complexe scenario's.
- Manifest start_url gecorrigeerd naar index.html voor installatie op tablets.

## 1.2.0
- Stap 4B: definitief exportcontract voor uitwisseling tussen Kassa Tool en Hoofdapp.
- Export schemaVersion 1.0.0 met UUID-identifiers, masterData, transaction revisions en integrity-blok.
- Migratie: bestaande Date.now()-identifiers worden idempotent omgezet naar UUID's.
- Versieverhoging: nieuwe exportarchitectuur en PWA-update voor het definitieve contract.

## 1.1.2
- Stap 3: prijslijst is permanente masterdata van de Kassa Tool.
- Veiligheid: automatische backup en herstel van de prijslijst via localStorage.
- Bugfix: reset verwijdert de prijslijst niet meer.
- Versieverhoging: nieuwe prijslijst-architectuur moet via PWA-update worden opgehaald.

## 1.1.1
- Stap 2B: veilige transactiewijziging met behoud van het bestaande transactie-ID.
- Bugfix: originele transactie blijft behouden tot een wijziging succesvol wordt opgeslagen.

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
