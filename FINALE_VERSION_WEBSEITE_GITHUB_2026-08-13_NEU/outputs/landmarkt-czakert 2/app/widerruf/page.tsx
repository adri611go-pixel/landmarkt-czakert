import Link from "next/link";

export const metadata = {
  title: "Widerrufsbelehrung | Landmarkt Czakert",
};

const withdrawalMail =
  "mailto:landmarktczakert@gmail.com?subject=Widerruf%20meiner%20Bestellung&body=Hiermit%20widerrufe%20ich%20den%20von%20mir%20abgeschlossenen%20Vertrag.%0A%0AName%3A%0AAnschrift%3A%0ABestelldatum%3A%0ABestellte%20Produkte%3A%0AE-Mail%20f%C3%BCr%20die%20Eingangsbest%C3%A4tigung%3A%0A%0ADatum%3A";

export default function Widerruf() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" aria-label="Zurück zur Startseite">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
        </Link>
        <Link href="/">← Zurück zur Startseite</Link>
      </header>
      <article>
        <p className="eyebrow">Verbraucherschutz</p>
        <h1>Widerrufs&shy;belehrung</h1>

        <section>
          <h2>Widerrufsrecht</h2>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
            der nicht der Beförderer ist, die Waren in Besitz genommen haben
            beziehungsweise hat.
          </p>
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns – Landmarkt
            Czakert, Inhaber Manfred Czakert, Kastanienhof, 56412
            Niedererbach, E-Mail:{" "}
            <a href="mailto:landmarktczakert@gmail.com">
              landmarktczakert@gmail.com
            </a>{" "}
            – mittels einer eindeutigen Erklärung über Ihren Entschluss
            informieren. Zur Wahrung der Frist reicht es aus, dass Sie die
            Mitteilung vor Ablauf der Widerrufsfrist absenden.
          </p>
        </section>

        <section>
          <h2>Folgen des Widerrufs</h2>
          <p>
            Wenn Sie diesen Vertrag widerrufen, erstatten wir alle von Ihnen
            erhaltenen Zahlungen einschließlich der Kosten der günstigsten
            angebotenen Standardlieferung unverzüglich und spätestens binnen
            vierzehn Tagen ab Eingang Ihres Widerrufs. Für die Rückzahlung
            verwenden wir dasselbe Zahlungsmittel, das Sie bei der
            ursprünglichen Transaktion eingesetzt haben, sofern nichts anderes
            vereinbart wurde.
          </p>
          <p>
            Wir können die Rückzahlung verweigern, bis wir die Waren
            zurückerhalten haben oder Sie den Nachweis erbracht haben, dass Sie
            die Waren zurückgesandt haben. Sie müssen die Waren unverzüglich
            und spätestens binnen vierzehn Tagen ab Abgabe des Widerrufs an uns
            zurücksenden oder übergeben. Sie tragen die unmittelbaren Kosten
            der Rücksendung der Waren.
          </p>
        </section>

        <section>
          <h2>Ausschluss beziehungsweise vorzeitiges Erlöschen</h2>
          <p>
            Das Widerrufsrecht besteht insbesondere nicht bei Waren, die
            schnell verderben können oder deren Verfallsdatum schnell
            überschritten würde. Bei versiegelten Waren, die aus Gründen des
            Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet
            sind, kann es nach Entfernung der Versiegelung vorzeitig
            erlöschen.
          </p>
        </section>

        <section>
          <h2>Muster-Widerrufsformular</h2>
          <p>
            Wenn Sie den Vertrag widerrufen wollen, können Sie folgende Angaben
            verwenden: Name und Anschrift, Bestelldatum, bestellte Produkte,
            Datum und eine eindeutige Erklärung, dass Sie den Vertrag
            widerrufen.
          </p>
          <a className="legal-action" href={withdrawalMail}>
            Widerruf bestätigen und E-Mail öffnen →
          </a>
          <p className="legal-hint">
            Die Widerrufserklärung wird erst übermittelt, wenn Sie die
            vorausgefüllte E-Mail in Ihrem E-Mail-Programm absenden. Wir
            bestätigen den Eingang anschließend per E-Mail.
          </p>
        </section>
      </article>
    </main>
  );
}
