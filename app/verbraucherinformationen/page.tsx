import Link from "next/link";

export const metadata = {
  title: "Verbraucherinformationen | Landmarkt Czakert",
};

export default function Verbraucherinformationen() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" aria-label="Zurück zur Startseite">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
        </Link>
        <Link href="/#bestellen">← Zurück zur Abholanfrage</Link>
      </header>
      <article>
        <p className="eyebrow">Informationen zur Abholanfrage</p>
        <h1>Verbraucher&shy;informationen</h1>

        <section>
          <h2>Vertragspartner</h2>
          <address>
            Landmarkt Czakert · Inhaber Manfred Czakert
            <br />
            Kastanienhof · 56412 Niedererbach · Deutschland
            <br />
            E-Mail:{" "}
            <a href="mailto:landmarktczakert@gmail.com">
              landmarktczakert@gmail.com
            </a>
          </address>
        </section>

        <section>
          <h2>Produkte und Preise</h2>
          <p>
            Die wesentlichen Eigenschaften, Packungsgrößen und Einzelpreise
            werden bei jedem Produkt im Anfrageformular angezeigt. Alle
            angezeigten Preise sind Endpreise. Der Gesamtbetrag wird aus den
            ausgewählten Mengen als voraussichtlicher Warenwert berechnet.
          </p>
        </section>

        <section>
          <h2>Anfrage und Vertragsschluss</h2>
          <p>
            Sie wählen Produkte und Kontaktweg aus. Beim Betätigen des
            Anfragebuttons öffnet sich eine vorausgefüllte E-Mail- oder
            WhatsApp-Nachricht. Auch nach dem Absenden handelt es sich nur um
            eine unverbindliche Abholanfrage. Unsere Antwort bestätigt
            Verfügbarkeit und einen möglichen Abholtermin, stellt aber noch
            keine Annahme eines Kaufvertrags dar. Der Kaufvertrag kommt erst bei
            persönlicher Übergabe und Bezahlung am Kastanienhof zustande.
          </p>
        </section>

        <section id="versand-zahlung">
          <h2>Zahlung und Abholung</h2>
          <p>
            Die Produkte werden ausschließlich nach Terminvereinbarung am
            Kastanienhof abgeholt. Beim Kauf vor Ort können Sie bar oder per
            PayPal bezahlen. Eine Vorauszahlung über die Website findet nicht
            statt.
          </p>
          <p>
            Ein möglicher Abholtermin wird Ihnen auf Ihre unverbindliche Anfrage
            hin persönlich mitgeteilt.
          </p>
        </section>

        <section id="datenschutz">
          <h2>Datenschutz bei Ihrer Anfrage</h2>
          <p>
            Ihre Angaben werden ausschließlich verwendet, um Ihre Anfrage zu
            bearbeiten und mit Ihnen Kontakt aufzunehmen. Beim Versand über
            E-Mail oder WhatsApp gelten zusätzlich die Datenschutzbestimmungen
            des jeweils von Ihnen gewählten Dienstes. Über diese Website findet
            keine direkte Zahlung statt.
          </p>
        </section>

        <section>
          <h2>Gesetzliche Mängelhaftung</h2>
          <p>
            Für die angebotenen Waren gilt das gesetzliche
            Mängelhaftungsrecht.
          </p>
        </section>

        <section>
          <h2>Unverbindliche Abholanfrage</h2>
          <p>
            Ihre Nachricht stellt noch keine verbindliche Bestellung dar. Wir
            bestätigen Ihnen Verfügbarkeit und einen möglichen Abholtermin
            persönlich. Der Kaufvertrag kommt erst bei der Abholung vor Ort
            zustande. Die Zahlung (Bar oder Paypal) erfolgt vor Ort bei
            Abholung.
          </p>
        </section>
      </article>
    </main>
  );
}
