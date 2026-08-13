import Link from "next/link";

export const metadata = { title: "Kontakt | Landmarkt Czakert" };

export default function Kontakt() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link className="brand" href="/#start" aria-label="Landmarkt Czakert – zur Startseite"><img src="/logo-landmarkt.png" alt="Landmarkt Czakert" /></Link>
        <nav aria-label="Hauptnavigation">
          <Link href="/#geschichte">Geschichte</Link><Link href="/#produkte">Produkte</Link><Link href="/#partner">Partner</Link><Link href="/kontakt">Kontakt</Link>
          <a href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer">Rezensionen</a>
        </nav>
        <Link className="order-pill" href="/#bestellen">Abholung anfragen <span aria-hidden="true">↓</span></Link>
      </header>
      <section className="legal-hero" aria-labelledby="kontakt-title">
        <img src="/hero-impressum.png" alt="Dinkelvollkornprodukte von Landmarkt Czakert" />
        <div className="legal-hero-shade" /><div><p className="eyebrow">Wir sind für Sie da</p><h1 id="kontakt-title">Kontakt</h1></div>
      </section>
      <article>
        <section><h2>Landmarkt Czakert</h2><address>Inhaber: Manfred Czakert<br />Kastanienhof<br />56412 Niedererbach<br />Deutschland</address></section>
        <section><h2>So erreichen Sie uns</h2><p>Telefon: <a href="tel:+4964854672">06485 / 4672</a><br />WhatsApp: <a href="https://wa.me/491632200700">0163 2200700</a><br />E-Mail: <a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a></p></section>
        <section><h2>Anfahrt</h2><p>Die Abholung erfolgt am Kastanienhof in 56412 Niedererbach nach persönlicher Terminvereinbarung.</p><a className="legal-action" href="https://www.google.com/maps/search/?api=1&query=Kastanienhof+56412+Niedererbach" target="_blank" rel="noreferrer">Route mit Google Maps öffnen ↗</a></section>
      </article>
      <footer>
        <div className="footer-brand"><img src="/logo-landmarkt.png" alt="Landmarkt Czakert" /><p>Dinkelvollkornprodukte aus dem Westerwald.</p></div>
        <div><strong>Kontakt</strong><a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a><a href="tel:+4964854672">06485 / 4672</a><span>Kastanienhof · 56412 Niedererbach</span></div>
        <div><strong>Schnellzugriff</strong><Link href="/#geschichte">Geschichte</Link><Link href="/#produkte">Produkte</Link><Link href="/#partner">Partner</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
        <div className="footer-social"><strong>Social</strong><a href="https://www.instagram.com/landmarkt.czakert/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert" target="_blank" rel="noreferrer">Google Rezension</a><Link className="back-to-top" href="/kontakt#kontakt-title">Nach oben ↑</Link></div>
        <nav className="footer-legal" aria-label="Rechtliche Informationen"><Link href="/impressum">Impressum</Link><span>·</span><Link href="/datenschutz">Datenschutz</Link></nav>
      </footer>
    </main>
  );
}
