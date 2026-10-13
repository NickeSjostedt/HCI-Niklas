# HiFi Kompass

En fristående statisk kopia av samtalssidan och Mindmap mode från ValkompanjonenMoa, med partiväljaren och partichatten från ValstuganPrototype.

Startsidan visar den politiska kartan. Använd flikarna ovanför kartan för att växla mellan din egen karta och de åtta riksdagspartiernas kartvyer. Alla vyer använder samma politikområden; partiernas ståndpunkter är inte verifierade eller inlagda i prototypen.

## Starta lokalt

Kör från den här mappen:

```powershell
py -m http.server 8003
```

Öppna sedan http://127.0.0.1:8003/ i webbläsaren. Projektet kräver ingen byggprocess. Google Fonts laddas från nätet; systemets sans-serif- och serif-fallbacks används annars.