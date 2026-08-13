# Landmarkt Czakert

Website des Familienbetriebs Landmarkt Czakert aus Niedererbach im Westerwald.
Gebaut mit Next.js und vorbereitet für die automatische Veröffentlichung über
GitHub und Vercel.

## Lokal starten

Voraussetzung: Node.js 20 oder neuer. `pnpm` ist nicht erforderlich.

```bash
npm install
npm run dev -- --port 3006
```

Die Website läuft anschließend unter `http://localhost:3006`.

Alternativ kann nach einem erfolgreichen Build die Datei
`start-local.command` per Doppelklick geöffnet werden. Das Terminalfenster
muss während der Vorschau geöffnet bleiben.

## Produktions-Build prüfen

```bash
npm run build
npm run start
```

## Über GitHub und Vercel veröffentlichen

1. Dieses Projekt in ein GitHub-Repository hochladen.
2. Bei [Vercel](https://vercel.com/new) mit GitHub anmelden.
3. Das GitHub-Repository importieren.
4. Vercel erkennt Next.js automatisch. Es sind keine Umgebungsvariablen nötig.
5. Mit **Deploy** veröffentlichen.

Weitere Änderungen am `main`-Branch werden danach automatisch neu
veröffentlicht.
