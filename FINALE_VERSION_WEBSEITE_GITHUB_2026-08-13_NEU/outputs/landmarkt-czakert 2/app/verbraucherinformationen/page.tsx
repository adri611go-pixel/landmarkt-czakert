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
        <Link href="/#bestellen">← Zurück zur Bestellung</Link>
      </header>
      <article>
        <p className="eyebrow">Informationen vor der Bestellung</p>
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
            werden bei jedem Produkt im Bestellformular angezeigt. Alle
            angezeigten Preise sind Endpreise. Der Gesamtbetrag wird aus den
            ausgewählten Mengen berechnet. Bei Postversand werden die vor dem
            Absenden ausgewiesenen Versandkosten hinzugerechnet.
          </p>
        </section>

        <section>
          <h2>Bestellablauf und Vertragsschluss</h2>
          <p>
            Sie wählen Produkte, Lieferart und Kontaktweg aus. Beim Betätigen
            des Bestellbuttons öffnet sich eine vorausgefüllte E-Mail- oder
            WhatsApp-Nachricht. Erst wenn Sie diese Nachricht selbst absenden,
            übermitteln Sie Ihre verbindliche Bestellung. Der Vertrag kommt
            mit unserer anschließenden Annahme beziehungsweise
            Auftragsbestätigung zustande.
          </p>
        </section>

        <section>
          <h2>Zahlung und Lieferung</h2>
          <p>
            Bei Selbstabholung können Sie bar, mit Karte oder per PayPal
            bezahlen. Bei Postversand erfolgt die Zahlung vor dem Versand per
            PayPal. Selbstabholung erfolgt am Kastanienhof nach
            Terminvereinbarung. Postversand erfolgt innerhalb Deutschlands;
            die konkreten Versandkosten werden anhand des Produktgewichts im
            Bestellformular angezeigt.
          </p>
          <p>
            Der konkrete Abholtermin beziehungsweise die Lieferzeit wird Ihnen
            vor Vertragsschluss mit unserer Auftragsbestätigung mitgeteilt.
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
          <h2>Widerrufsrecht</h2>
          <p>
            Verbraucherinnen und Verbraucher haben bei Fernabsatzverträgen
            grundsätzlich ein vierzehntägiges Widerrufsrecht. Einzelheiten und
            das Muster-Widerrufsformular finden Sie in unserer{" "}
            <Link href="/widerruf">Widerrufsbelehrung</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
