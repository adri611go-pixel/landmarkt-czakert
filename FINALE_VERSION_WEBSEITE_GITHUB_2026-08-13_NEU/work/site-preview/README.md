# Landmarkt Czakert

Website des Familienbetriebs Landmarkt Czakert aus Niedererbach im Westerwald.
Gebaut mit Next.js und vorbereitet für die automatische Veröffentlichung über
GitHub und Vercel.

## Lokal starten

Voraussetzungen: Node.js 20 oder neuer und pnpm.

```bash
pnpm install
pnpm dev
```

Die Website läuft anschließend unter `http://localhost:3000`.

## Produktions-Build prüfen

```bash
pnpm build
pnpm start
```

## Über GitHub und Vercel veröffentlichen

1. Dieses Projekt in ein GitHub-Repository hochladen.
2. Bei [Vercel](https://vercel.com/new) mit GitHub anmelden.
3. Das GitHub-Repository importieren.
4. Vercel erkennt Next.js automatisch. Es sind keine Umgebungsvariablen nötig.
5. Mit **Deploy** veröffentlichen.

Weitere Änderungen am `main`-Branch werden danach automatisch neu
veröffentlicht.
