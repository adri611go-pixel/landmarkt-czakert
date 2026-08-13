import Link from "next/link";

export const metadata = {
  title: "Impressum | Landmarkt Czakert",
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" aria-label="Zurück zur Startseite">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
        </Link>
        <Link href="/">← Zurück zur Startseite</Link>
      </header>
      <article>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <address>
            Landmarkt Czakert
            <br />
            Kastanienhof
            <br />
            56412 Niedererbach
            <br />
            Deutschland
          </address>
          <p className="legal-warning" role="note">
            Noch erforderlich: vollständiger Vor- und Nachname der
            verantwortlichen Inhaberin beziehungsweise des verantwortlichen
            Inhabers.
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+491719328099">+49 171 9328099</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:landmarkt.czakert@gmail.com">
              landmarkt.czakert@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Unsere Website enthält Links zu externen Angeboten. Auf deren
            Inhalte haben wir keinen Einfluss. Für die Inhalte der verlinkten
            Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </article>
    </main>
  );
}
