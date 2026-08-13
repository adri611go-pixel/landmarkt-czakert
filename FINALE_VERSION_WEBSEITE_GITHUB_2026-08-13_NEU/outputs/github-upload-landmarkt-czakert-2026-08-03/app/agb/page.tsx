import Link from "next/link";

export const metadata = { title: "AGB | Landmarkt Czakert" };

export default function Agb() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link className="brand" href="/#start" aria-label="Landmarkt Czakert – zur Startseite"><img src="/logo-landmarkt.png" alt="Landmarkt Czakert" /></Link>
        <nav aria-label="Hauptnavigation"><Link href="/#geschichte">Geschichte</Link><Link href="/#produkte">Produkte</Link><Link href="/#partner">Partner</Link><Link href="/kontakt">Kontakt</Link><a href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer">Rezensionen</a></nav>
        <Link className="order-pill" href="/#bestellen">Abholung anfragen <span aria-hidden="true">↓</span></Link>
      </header>
      <section className="legal-hero" aria-labelledby="agb-title"><img src="/hero-impressum.png" alt="Dinkelvollkornprodukte von Landmarkt Czakert" /><div className="legal-hero-shade" /><div><p className="eyebrow">Rechtliche Angaben</p><h1 id="agb-title">AGB</h1></div></section>
      <article>
        <p className="eyebrow">Allgemeine Geschäftsbedingungen der Firma Landmarkt Czakert</p>
        <section><h2>§ 1 Geltung und Begriffsdefinitionen</h2><p>Diese Allgemeinen Geschäftsbedingungen gelten für Verträge zwischen Landmarkt Czakert und Verbraucherinnen und Verbrauchern in der zum Zeitpunkt des Vertragsschlusses gültigen Fassung. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).</p></section>
        <section><h2>§ 2 Vertragspartner und Vertragsschluss</h2><p>Vertragspartner ist Landmarkt Czakert, Inhaber Manfred Czakert, Kastanienhof, 56412 Niedererbach. Die Darstellung der Produkte ist kein rechtlich bindendes Angebot. Eine über die Website versandte E-Mail- oder WhatsApp-Nachricht ist zunächst eine unverbindliche Anfrage.</p><p>Bei Selbstabholung kommt der Kaufvertrag erst bei Übergabe und Bezahlung vor Ort zustande. Beim Postversand erhalten Sie nach Prüfung der Verfügbarkeit ein Angebot einschließlich Versandkosten; der Vertrag kommt erst mit Ihrer ausdrücklichen Annahme dieses Angebots zustande.</p></section>
        <section><h2>§ 3 Preise, Versandkosten und Zahlung</h2><p>Alle angegebenen Preise sind Endpreise einschließlich der gesetzlichen Umsatzsteuer. Bei Postversand kommen die vor Abgabe des Angebots ausgewiesenen Versandkosten hinzu. Die Zahlung erfolgt nach Vereinbarung bar oder per PayPal.</p></section>
        <section><h2>§ 4 Lieferung und Abholung</h2><p>Die Abholung erfolgt nach persönlicher Terminvereinbarung am Kastanienhof. Bei vereinbartem Postversand werden Lieferzeit und Versandart im individuellen Angebot mitgeteilt. Beim Verbrauchsgüterkauf geht die Gefahr des zufälligen Untergangs oder der Verschlechterung erst mit Übergabe der Ware an die Käuferin oder den Käufer über.</p></section>
        <section><h2>§ 5 Eigentumsvorbehalt</h2><p>Die Ware bleibt bis zur vollständigen Bezahlung Eigentum von Landmarkt Czakert.</p></section>
        <section><h2>§ 6 Widerrufsrecht</h2><p>Soweit bei einem Vertrag im Fernabsatz ein gesetzliches Widerrufsrecht besteht, gelten die gesetzlichen Bestimmungen. Informationen zum Widerruf werden Verbraucherinnen und Verbrauchern vor Abschluss eines entsprechenden Versandvertrags in Textform zur Verfügung gestellt.</p></section>
        <section><h2>§ 7 Gewährleistung</h2><p>Es gelten die gesetzlichen Gewährleistungs- und Mängelhaftungsregelungen.</p></section>
        <section><h2>§ 8 Vertragssprache</h2><p>Als Vertragssprache steht Deutsch zur Verfügung.</p></section>
        <section><h2>§ 9 Cookies, lokale Speicherung und externe Inhalte</h2><p>Beim ersten Besuch der Website wird eine Auswahl zur Nutzung technisch notwendiger Speicherfunktionen und externer Inhalte angezeigt. Die getroffene Auswahl wird ausschließlich lokal im Browser gespeichert, damit sie bei einem weiteren Aufruf berücksichtigt werden kann.</p><p>Die eingebettete Karte von Google Maps wird erst nach ausdrücklicher Zustimmung geladen. Beim Laden können Daten, insbesondere die IP-Adresse und technische Browserinformationen, an Google übertragen sowie Cookies oder vergleichbare Speichertechniken durch Google eingesetzt werden. Ohne Zustimmung bleibt die Karte deaktiviert; externe Links können weiterhin bewusst aufgerufen werden.</p></section>
        <p className="legal-hint">Stand: August 2026. Diese Fassung bildet den auf der Website angebotenen unverbindlichen Anfrageprozess ab.</p>
      </article>
      <footer>
        <div className="footer-brand"><img src="/logo-landmarkt.png" alt="Landmarkt Czakert" /><p>Dinkelvollkornprodukte aus dem Westerwald.</p></div>
        <div><strong>Kontakt</strong><a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a><a href="tel:+4964854672">06485 / 4672</a><span>Kastanienhof · 56412 Niedererbach</span></div>
        <div><strong>Schnellzugriff</strong><Link href="/#geschichte">Geschichte</Link><Link href="/#produkte">Produkte</Link><Link href="/#partner">Partner</Link><Link href="/agb">AGB</Link><Link href="/impressum">Impressum</Link><Link href="/verbraucherinformationen">Verbraucherinformationen</Link></div>
        <div className="footer-social"><strong>Social</strong><a href="https://www.instagram.com/landmarkt.czakert/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer">Google Rezension</a><Link className="back-to-top" href="/agb#agb-title">Nach oben ↑</Link></div>
        <nav className="footer-legal" aria-label="Rechtliche Informationen"><Link href="/impressum">Impressum</Link><span>·</span><Link href="/agb">AGB</Link><span>·</span><Link href="/verbraucherinformationen#datenschutz">Datenschutz</Link></nav>
      </footer>
    </main>
  );
}
