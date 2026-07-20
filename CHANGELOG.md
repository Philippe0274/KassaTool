# Changelog

## 1.4.5
- Hersteld: de knop "AFSLUITEN KASSA" opent nog steeds eerst de kaspreview, maar toont nu ook een duidelijke actie "Kassa definitief afsluiten".
- De afsluitpreview gebruikt opnieuw de bestaande afsluitlogica, waardoor de exportknoppen pas na echte afsluiting zichtbaar worden.
- Geen wijziging aan transacties, prijslijst, Google Drive-prijslijstimport of het officiële exportcontract.

## 1.4.4
- Google Drive eventmap-ondersteuning toegevoegd met veilige root-fallback.
- Prijslijst laden probeert eerst `EventToolSync / eventmap / 01-prijslijst` en valt terug op de bestaande root-file `kassa-tool-official-start-pricelist.json`.
- Kassa-export blijft naar root schrijven en bewaart daarnaast een archiefkopie in `EventToolSync / eventmap / 02-kassa-exports`.
- Offline tabletwerking, transactielogica, kassasluiting en exportcontract `be.zomerfeest.kassa-export` versie `1.0.0` blijven ongewijzigd.

## 1.4.3
- Kassapunt/tabletnaam en gebruiker/verantwoordelijke toegevoegd aan de Event-tab.
- Kassapunt en gebruiker worden zichtbaar getoond in de header naast de versie en vóór de KASSA-knop.
- Kassa-export bevat nu een apart `operator`-blok en blijft `device.friendlyName` meesturen.
- Export waarschuwt wanneer kassapunt of gebruiker ontbreekt, maar blokkeert niet.
- Reset wist kassapunt en gebruiker niet, zodat tabletidentificatie bewaard blijft.
- Geen wijziging aan transacties, prijslijst, tickets, kasstand, Google Drive-prijslijstimport of het officiële schemaName/schemaVersion.

## 1.4.2
- ManiFiesta-tab verbreed naar een algemene `Tickets`-tab.
- ManiFiesta-registratie blijft alleen beschikbaar voor evenementen vóór 1 september.
- Externe ticketregistraties toegevoegd voor boekvoorstellingen en andere externe events.
- Externe tickets bewaren eventnaam, eventdatum, registratietijd, aantal, opmerking, eventId en deviceId.
- Kassa-export bevat nu backward compatible `data.externalTicketRegistrations` en integriteitsmetadata voor externe ticketaantallen.
- Externe tickets hebben geen invloed op kassaldo, omzet, betaalmethodes, prijslijst, cash/kaart of transactielogica.
- Geen wijziging aan retro-kassa, financiële transacties, Google Drive-prijslijstimport of het officiële schemaName/schemaVersion.

## 1.4.1
- Niet-financiële ManiFiesta-ticketregistratie toegevoegd voor evenementen vóór 1 september.
- Nieuwe ManiFiesta-tab wordt automatisch verborgen wanneer het evenement op of na 1 september valt.
- ManiFiesta-registraties bewaren losse regels met tijd, aantal, opmerking, eventId en deviceId.
- Kassa-export bevat nu backward compatible `data.manifestaTicketRegistrations` en integriteitsmetadata voor aantallen.
- ManiFiesta-tickets hebben geen invloed op kassaldo, omzet, betaalmethodes, prijslijst, cash/kaart of transactielogica.
- Geen wijziging aan retro-kassa, financiële transacties, Google Drive-prijslijstimport of het officiële schemaName/schemaVersion.

## 1.4.0
- Kassa-lifecycle toegevoegd: open, afgesloten en heropend.
- Exportknoppen zijn pas zichtbaar en bruikbaar nadat de kassa afgesloten is.
- Toegevoegd: kassa afsluiten, kassa heropenen en export naar Google Drive vanuit het kassastatusscherm.
- Als de kassa te vroeg afgesloten werd, kan ze bewust heropend worden waarna transacties opnieuw ingevoerd kunnen worden.
- Kassa-exportbestanden krijgen een unieke naam: `kassa-export-{eventId}-{deviceId}-{timestamp}.json`.
- Exportpayload bevat backward compatible `cashSession`-metadata voor latere Hoofdapp-import en audit.
- Geen wijziging aan transactiestructuur, retro-kassa, prijslijstimport, betaalscenario's of het officiële schemaName/schemaVersion.

## 1.3.3
- Bugfix: `Status gewijzigd` verdwijnt nu correct wanneer een artikel teruggezet wordt naar zijn oorspronkelijke actief/inactief-status.
- Voor oudere lokaal geladen prijslijsten zonder officiële beginstatus wordt vanaf de eerste statuswijziging een lokale baseline bewaard.
- Versiebadge verhoogd naar `v1.3.3`.
- Geen wijziging aan transactielogica, Google Drive-import, retro-kassa, exportcontract of opslagstructuur.

## 1.3.2
- Versie zichtbaar gemaakt in de Kassa Tool-header zodat de juiste PWA-versie meteen controleerbaar is.
- Prijslijsttabel uitgebreid met artikelnummer, categorie en aparte kolom voor wijzigingen.
- Wijzigingslabels worden nu dynamisch bepaald tegenover de officiële beginprijslijst.
- `Status gewijzigd` verdwijnt opnieuw wanneer een artikel terug op zijn oorspronkelijke actief/inactief-status wordt gezet.
- Geen wijziging aan transactielogica, Google Drive-import, retro-kassa, exportcontract of opslagstructuur.

## 1.3.1
- Sync-statuslaag voor tabletgebruik toegevoegd: Prijslijst toont nu actief/inactief, event-lock en offline-klaarstatus.
- Retro-kassa waarschuwt wanneer er nog geen officiële Hoofdapp-prijslijst lokaal geladen is, zonder verkoop te blokkeren.
- Tabletwijzigingen aan de prijslijst worden lokaal gemarkeerd: nieuwe artikelen, prijswijzigingen, naamwijzigingen en actief/inactief-wijzigingen.
- Geïmporteerde Hoofdapp-artikelen bewaren nu beginnaam, beginprijs en beginstatus als referentie voor de latere eindprijslijst.
- Kassa-export bevat extra backward compatible metadata voor tabletwijzigingen en officiële artikelkoppeling.
- Geen transacties-upload, Google Drive upload van eindprijslijst, Hoofdapp-import, ledger of financiële verwerking toegevoegd.

## 1.3.0
- Google Drive Sync fase 2B toegevoegd: de Kassa Tool kan de officiële beginprijslijst ophalen uit `EventToolSync`.
- Nieuw sync-paneel in het tabblad Prijslijst met verbinden, sync-test en `Prijslijst ophalen`.
- De Kassa Tool leest `kassa-tool-official-start-pricelist.json`, controleert schemaName/schemaVersion/eventId/categorieën/artikelen/prijzen en bewaart pas daarna de prijslijst lokaal.
- Na een geldige import wordt de prijslijst offline beschikbaar op de tablet en neemt de Kassa Tool het eventId uit de Hoofdapp over.
- Veiligheidsregel: laden uit Drive wordt geblokkeerd zodra er al transacties op de tablet staan.
- Geen transacties-upload, eindprijslijst-sync, Hoofdapp-import, ledger of financiële verwerking toegevoegd.

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
