import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | Landmarkt Czakert",
};

export default function Datenschutz() {
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
        <Link className="order-pill" href="/#bestellen">Abholung anfragen <span aria-hidden="true">↓</span></Link>
      </header>

      <section className="legal-hero" aria-labelledby="datenschutz-title">
        <img src="/hero-impressum.png" alt="Dinkelvollkornprodukte von Landmarkt Czakert" />
        <div className="legal-hero-shade" />
        <div>
          <p className="eyebrow">Rechtliche Angaben</p>
          <h1 id="datenschutz-title">Datenschutz</h1>
        </div>
      </section>

      <article>
        <p className="eyebrow">Datenschutzerklärung</p>

        <section>
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen
            oder uns eine Anfrage senden. Personenbezogene Daten sind alle
            Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2>2. Verantwortlicher</h2>
          <address>
            Landmarkt Czakert · Inhaber Manfred Czakert
            <br />
            Kastanienhof · 56412 Niedererbach · Deutschland
            <br />
            Telefon: <a href="tel:+4964854672">06485 / 4672</a>
            <br />
            E-Mail: <a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a>
          </address>
        </section>

        <section>
          <h2>3. Hosting und Server-Protokolle</h2>
          <p>
            Beim Aufruf dieser Website verarbeitet der eingesetzte
            Hostinganbieter technisch erforderliche Verbindungsdaten. Dazu
            können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene Seite, Browsertyp und Betriebssystem gehören. Die
            Verarbeitung erfolgt zur sicheren und fehlerfreien Bereitstellung
            der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2>4. Lokaler Speicher und Einwilligung</h2>
          <p>
            Diese Website speichert Ihre Auswahl zu externen Inhalten im
            lokalen Speicher Ihres Browsers (Local Storage) unter dem Eintrag
            „landmarkt-cookie-consent“. Diese technisch notwendige Speicherung
            verhindert, dass die Abfrage bei jedem Seitenaufruf erneut
            erscheint. Analyse-, Werbe- oder Tracking-Cookies setzen wir nicht
            selbst ein.
          </p>
          <p>
            Sie können die gespeicherte Auswahl jederzeit über die Einstellungen
            Ihres Browsers löschen. Danach wird die Einwilligungsabfrage erneut
            angezeigt.
          </p>
        </section>

        <section>
          <h2>5. Google Maps und externe Inhalte</h2>
          <p>
            Die eingebettete Google-Karte wird erst geladen, wenn Sie externen
            Inhalten ausdrücklich zustimmen. Beim Laden können Daten,
            insbesondere Ihre IP-Adresse, an Google übertragen werden. Die
            Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6
            Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Verantwortlicher Anbieter
            in Europa ist Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irland.
          </p>
          <p>
            Links zu Google Maps, Google-Rezensionen und Instagram öffnen erst
            nach Ihrem Klick die jeweilige externe Website. Für die dortige
            Datenverarbeitung ist der jeweilige Anbieter verantwortlich.
          </p>
        </section>

        <section>
          <h2>6. Anfragen per Formular, E-Mail und WhatsApp</h2>
          <p>
            Das Anfrageformular erstellt aus Ihren Angaben eine vorausgefüllte
            Nachricht. Diese wird erst versendet, wenn Sie sie in Ihrem
            E-Mail-Programm oder in WhatsApp selbst absenden. Wir verarbeiten
            Ihre Angaben zur Bearbeitung Ihrer Anfrage und zur Durchführung
            vorvertraglicher Maßnahmen auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO. Ohne anschließenden Vertragsschluss löschen wir die Daten,
            sobald der Zweck entfällt und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
          <p>
            Bei der Nutzung von WhatsApp gelten zusätzlich die
            Datenschutzbestimmungen des Anbieters WhatsApp Ireland Limited.
            Alternativ können Sie uns per E-Mail oder Telefon kontaktieren.
          </p>
        </section>

        <section>
          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
            und Datenübertragbarkeit. Eine erteilte Einwilligung können Sie
            jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem können
            Sie der Verarbeitung aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, widersprechen.
          </p>
          <p>
            Ihnen steht zudem ein Beschwerderecht bei einer zuständigen
            Datenschutzaufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2>8. Verschlüsselte Verbindung</h2>
          <p>
            Diese Website nutzt eine verschlüsselte HTTPS-Verbindung, sofern
            sie über den vorgesehenen Hostingdienst aufgerufen wird. Dadurch
            können übermittelte Daten nicht ohne Weiteres von Dritten mitgelesen
            werden.
          </p>
        </section>
      </article>

      <footer>
        <div className="footer-brand"><img src="/logo-landmarkt.png" alt="Landmarkt Czakert" /><p>Dinkelvollkornprodukte aus dem Westerwald.</p></div>
        <div><strong>Kontakt</strong><a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a><a href="tel:+4964854672">06485 / 4672</a><span>Kastanienhof · 56412 Niedererbach</span></div>
        <div><strong>Schnellzugriff</strong><Link href="/#geschichte">Geschichte</Link><Link href="/#produkte">Produkte</Link><Link href="/#partner">Partner</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
        <div className="footer-social"><strong>Social</strong><a href="https://www.instagram.com/landmarkt.czakert/" target="_blank" rel="noreferrer">Instagram</a><a className="footer-review-link" href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer"><span>Google Rezension</span><span className="review-stars" aria-label="Fünf Sterne">★★★★★</span></a><Link className="back-to-top" href="/datenschutz#datenschutz-title">Nach oben ↑</Link></div>
        <nav className="footer-legal" aria-label="Rechtliche Informationen"><Link href="/impressum">Impressum</Link><span aria-hidden="true">·</span><Link href="/datenschutz">Datenschutz</Link></nav>
      </footer>
    </main>
  );
}
