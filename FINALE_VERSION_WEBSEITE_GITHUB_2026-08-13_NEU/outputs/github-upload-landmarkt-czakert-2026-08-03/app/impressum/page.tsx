import Link from "next/link";

export const metadata = {
  title: "Impressum | Landmarkt Czakert",
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link className="brand" href="/#start" aria-label="Landmarkt Czakert – zur Startseite">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
        </Link>
        <nav aria-label="Hauptnavigation">
          <Link href="/#geschichte">Geschichte</Link>
          <Link href="/#produkte">Produkte</Link>
          <Link href="/#partner">Partner</Link>
          <Link href="/kontakt">Kontakt</Link>
          <a href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer">Rezensionen</a>
        </nav>
        <Link className="order-pill" href="/#bestellen">
          Abholung anfragen <span aria-hidden="true">↓</span>
        </Link>
      </header>
      <section className="legal-hero" aria-labelledby="impressum-title">
        <img src="/hero-impressum.png" alt="Dinkelvollkornprodukte von Landmarkt Czakert" />
        <div className="legal-hero-shade" />
        <div>
          <p className="eyebrow">Rechtliche Angaben</p>
          <h1 id="impressum-title">Impressum</h1>
        </div>
      </section>
      <article>
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <address>
            Landmarkt Czakert
            <br />
            Inhaber: Manfred Czakert
            <br />
            Kastanienhof
            <br />
            56412 Niedererbach
            <br />
            Deutschland
          </address>
        </section>

        <section>
          <h2>Weitere Unternehmensangaben</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            <br />
            DE294339356
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4964854672">06485 / 4672</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:landmarktczakert@gmail.com">
              landmarktczakert@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2>Verbraucherinformationen</h2>
          <p>
            Informationen zur unverbindlichen Abholanfrage, zu Preisen,
            Abholung und Mängelhaftung finden Sie in unseren{" "}
            <Link href="/verbraucherinformationen">
              Verbraucherinformationen
            </Link>.
          </p>
        </section>

        <section>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </article>
      <footer>
        <div className="footer-brand">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
          <p>Dinkelvollkornprodukte aus dem Westerwald.</p>
        </div>
        <div>
          <strong>Kontakt</strong>
          <a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a>
          <a href="tel:+4964854672">06485 / 4672</a>
          <span>Kastanienhof · 56412 Niedererbach</span>
        </div>
        <div>
          <strong>Schnellzugriff</strong>
          <Link href="/#geschichte">Geschichte</Link>
          <Link href="/#produkte">Produkte</Link>
          <Link href="/#partner">Partner</Link>
          <Link href="/agb">AGB</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/verbraucherinformationen">Verbraucherinformationen</Link>
        </div>
        <div className="footer-social">
          <strong>Social</strong>
          <a href="https://www.instagram.com/landmarkt.czakert/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="footer-review-link" href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer">
            <span>Google Rezension</span>
            <span className="review-stars" aria-label="Fünf Sterne">★★★★★</span>
          </a>
          <Link className="back-to-top" href="/impressum#impressum-title">Nach oben ↑</Link>
        </div>
        <nav className="footer-legal" aria-label="Rechtliche Informationen">
          <Link href="/impressum">Impressum</Link>
          <span aria-hidden="true">·</span>
          <Link href="/agb">AGB</Link>
          <span aria-hidden="true">·</span>
          <Link href="/verbraucherinformationen#datenschutz">Datenschutz</Link>
        </nav>
      </footer>
    </main>
  );
}
