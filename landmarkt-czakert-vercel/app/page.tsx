const Arrow = () => <span aria-hidden="true">↘</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Landmarkt Czakert – Startseite">
          <img src="/landmarkt-czakert-logo.png" alt="Landmarkt Czakert" />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#hof">Unser Hof</a>
          <a href="#produkte">Produkte</a>
          <a href="#anbau">Unser Anbau</a>
        </nav>
        <a className="header-cta" href="#direkt">
          Direkt vom Hof <Arrow />
        </a>
      </header>

      <section className="hero" id="start">
        <div className="hero-kicker">
          <span>Familienbetrieb</span>
          <span>Die Erde ist unser Kapital</span>
        </div>
        <h1>
          Gutes wächst
          <br />
          <em>nicht von allein.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            Getreide aus naturnahem Anbau. Mit Zeit, Erfahrung und ohne den
            Einsatz von Spritzmitteln oder sonstigen Pestiziden.
          </p>
          <a className="round-link" href="#produkte" aria-label="Zu unseren Produkten">
            <Arrow />
          </a>
        </div>
        <div className="field-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>Dinkel aus eigenem Anbau</span><b>✦</b>
          <span>Vom Feld auf den Teller</span><b>✦</b>
          <span>Direkt vermarktet</span><b>✦</b>
          <span>Dinkel aus eigenem Anbau</span><b>✦</b>
        </div>
      </div>

      <section className="intro" id="hof">
        <div className="section-label">
          <span>01</span>
          <span>Unsere Geschichte</span>
        </div>
        <div className="intro-copy">
          <h2>
            Seit Jahrzehnten
            <br />
            <em>mit dem Boden verbunden.</em>
          </h2>
          <div className="intro-columns">
            <p className="lead">
              Wir sind ein Familienbetrieb aus 56412 Niedererbach – mitten im
              Westerwald.
            </p>
            <p>
              Auf unseren Feldern bauen wir verschiedene Getreidesorten an.
              Dabei vertrauen wir auf Erfahrung, einen achtsamen Umgang mit der
              Natur und auf das, was ein guter Boden aus eigener Kraft leisten
              kann.
            </p>
          </div>
        </div>
        <div className="year-stamp">
          <span>Seit</span>
          <strong>2023</strong>
          <span>eigene Dinkelprodukte</span>
        </div>
      </section>

      <section className="products" id="produkte">
        <div className="section-label light">
          <span>02</span>
          <span>Unsere Produkte</span>
        </div>
        <div className="products-heading">
          <h2>Unser Dinkel.<br /><em>Ehrlich verarbeitet.</em></h2>
          <p>
            Angebaut in Niedererbach, schonend verarbeitet und direkt
            vermarktet. Zwei Produkte, bei denen man weiß, wo sie herkommen.
          </p>
        </div>
        <div className="product-grid">
          <article className="product-card flour">
            <div className="product-visual">
              <div className="bag">
                <span className="bag-top">Landmarkt Czakert</span>
                <strong>Dinkel<br />Vollkorn<br />Mehl</strong>
                <span>aus eigenem Anbau</span>
              </div>
              <span className="product-number">01</span>
            </div>
            <div className="product-info">
              <div>
                <span>Kräftig · Vollwertig · Vielseitig</span>
                <h3>Dinkelvollkornmehl</h3>
              </div>
              <p>
                Das ganze Korn, fein vermahlen. Für Brot, Brötchen, Kuchen und
                alles, was selbst gebacken einfach besser schmeckt.
              </p>
            </div>
          </article>

          <article className="product-card pasta">
            <div className="product-visual">
              <div className="pasta-box">
                <span>Landmarkt</span>
                <strong>Dinkel<br />Vollkorn<br />Pasta</strong>
                <div className="noodle-window" aria-hidden="true">
                  <i /><i /><i /><i /><i /><i /><i />
                </div>
              </div>
              <span className="product-number">02</span>
            </div>
            <div className="product-info">
              <div>
                <span>Nussig · Bissfest · Bodenständig</span>
                <h3>Dinkelvollkornpasta</h3>
              </div>
              <p>
                Löckchen und gewellte Bandnudeln, ohne Ei und schonend
                getrocknet. Aus unserem eigenen Dinkel für unkomplizierten,
                ehrlichen Genuss.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="values" id="anbau">
        <div className="section-label">
          <span>03</span>
          <span>Woran wir glauben</span>
        </div>
        <div className="values-grid">
          <h2>
            Weniger Eingriff.
            <br />
            <em>Mehr Vertrauen.</em>
          </h2>
          <p className="values-intro">
            Naturnaher Anbau ist für uns kein Trend, sondern eine Entscheidung
            für gesunde Felder, gutes Getreide und eine Landwirtschaft mit
            Zukunft.
          </p>
        </div>
        <div className="principles">
          <article>
            <span>01</span>
            <h3>Ohne Spritzmittel</h3>
            <p>
              Wir verzichten auf Spritzmittel, sonstige Pestizide und
              Kunstdünger auf unseren Feldern.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Aus eigener Hand</h3>
            <p>
              Von der Aussaat bis zur Ernte begleiten wir unser Getreide selbst
              und kennen seinen Weg.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Direkt & regional</h3>
            <p>
              Unsere Dinkelprodukte kommen ohne Umwege zu den Menschen in
              unserer Region.
            </p>
          </article>
        </div>
      </section>

      <section className="direct" id="direkt">
        <div className="direct-copy">
          <span className="eyebrow">Direktvermarktung in Niedererbach</span>
          <h2>
            Vom Westerwald
            <br />
            <em>auf deinen Teller.</em>
          </h2>
          <p>
            Unsere Produkte verkaufen wir direkt. So bleiben die Wege kurz –
            und der Kontakt persönlich.
          </p>
          <a href="mailto:landmarktczakert@gmail.com" className="button">
            Verfügbarkeit anfragen <Arrow />
          </a>
        </div>
        <div className="location-mark" aria-hidden="true">
          <div className="seal">
            <span>Landmarkt</span>
            <strong>56412</strong>
            <span>Niedererbach</span>
          </div>
        </div>
      </section>

      <footer id="kontakt">
        <div className="footer-top">
          <img src="/landmarkt-czakert-logo.png" alt="" />
          <p>
            Dinkelvollkornmehl und Dinkelvollkornpasta aus eigenem Anbau.
            Direkt erhältlich bei uns in Niedererbach.
          </p>
        </div>
        <div className="footer-bottom">
          <span>Landmarkt Czakert</span>
          <span>56412 Niedererbach · Westerwald</span>
          <a
            href="https://www.instagram.com/landmarktczakert/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram @landmarktczakert
          </a>
          <a href="#start">Nach oben ↑</a>
        </div>
      </footer>
    </main>
  );
}
