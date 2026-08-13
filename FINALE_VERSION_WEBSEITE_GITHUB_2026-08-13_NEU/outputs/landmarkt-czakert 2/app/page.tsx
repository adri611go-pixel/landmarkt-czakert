"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const products = [
  {
    id: "mehl",
    name: "Dinkelvollkornmehl",
    detail: "1 kg · sehr fein gemahlen",
    price: 2.1,
    weight: 1,
    image: "/mehl-hq.jpg",
    note: "Das ganze Korn, fein vermahlen – kräftig, vollwertig und vielseitig.",
    showcase: true,
  },
  {
    id: "loeckchen-500",
    name: "Dinkelvollkornpasta",
    detail: "Löckchen · 500 g",
    price: 3.1,
    weight: 0.5,
    image: "/pasta-loeckchen-hq.jpg",
    note: "Nussig im Geschmack und besonders schonend getrocknet.",
    showcase: true,
  },
  {
    id: "loeckchen-250",
    name: "Dinkelvollkornpasta",
    detail: "Löckchen · 250 g",
    price: 2.5,
    weight: 0.25,
    image: "/pasta-loeckchen-hq.jpg",
    note: "Nussig im Geschmack und besonders schonend getrocknet.",
    showcase: false,
  },
  {
    id: "band-500",
    name: "Dinkelvollkornpasta",
    detail: "Band gewellt · 500 g",
    price: 3.1,
    weight: 0.5,
    image: "/pasta-band-hq.jpg",
    note: "Bissfest, aromatisch und ideal für unkomplizierte Lieblingsgerichte.",
    showcase: true,
  },
  {
    id: "band-250",
    name: "Dinkelvollkornpasta",
    detail: "Band gewellt · 250 g",
    price: 2.5,
    weight: 0.25,
    image: "/pasta-band-hq.jpg",
    note: "Bissfest, aromatisch und ideal für unkomplizierte Lieblingsgerichte.",
    showcase: false,
  },
] as const;

const stockists = [
  {
    name: "Schreibwaren Dutell",
    place: "Görgeshausen",
    url: "https://schreibwaren-dutell.de/",
    logo: "/partner-dutell.png",
    brand: "dutell",
    description:
      "Familiengeführtes Geschäft für Schreibwaren, Schule und Büro mit persönlicher Beratung.",
  },
  {
    name: "Unser Lädchen",
    place: "Girod",
    url: "https://www.instagram.com/explore/search/keyword/?q=Unser%20L%C3%A4dchen%20Girod",
    logo: "/partner-unser-laedchen-transparent.png",
    description:
      "Der persönliche Dorfladen für Lebensmittel und den täglichen Bedarf mitten in Girod.",
  },
  {
    name: "Rossbergerhof",
    place: "Montabaur",
    url: "https://www.rossbergerhof.de/",
    logo: "/partner-rossbergerhof.png",
    brand: "rossbergerhof",
    description:
      "Ökologische Landwirtschaft mit Hofladen und besonderen Übernachtungsmöglichkeiten in Montabaur.",
  },
  {
    name: "REWE Daci",
    place: "Nentershausen",
    url: "https://www.rewe.de/marktseite/nentershausen/1478839/rewe-markt-koblenzer-strasse-12/",
    mark: "REWE",
    brand: "rewe",
    description:
      "Nahversorgung in Nentershausen mit aktuellen Angeboten und praktischem Abholservice.",
  },
  {
    name: "Unikum",
    place: "Altenkirchen",
    url: "https://unikum-regionalladen.de/",
    logo: "/partner-unikum.png",
    brand: "unikum",
    description:
      "Regionale Lebensmittel, Handwerk und Kunst von zahlreichen Erzeugerinnen und Erzeugern.",
  },
  {
    name: "Regionalladen Betzdorf",
    place: "Betzdorf",
    url: "https://betzdorf.share-your-store.de/",
    logo: "/partner-betzdorf.png",
    brand: "betzdorf",
    comingSoon: true,
    description:
      "Unsere Dinkelprodukte sind bald auch im vielfältigen Regionalladen Betzdorf erhältlich.",
  },
  {
    name: "MUNDITIA TASTY LIFE",
    place: "Hundsangen",
    url: "https://www.munditia-tastylife.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=2944037230149618757",
    logo: "/partner-munditia-transparent.png",
    brand: "munditia",
    description:
      "Feinkost aus Eigenproduktion und eigenem Garten – ergänzt durch Wein und besondere Genussideen.",
  },
  {
    name: "Landmetzgerei Born",
    place: "Flammersfeld",
    url: "https://landmetzgerei-born.de/",
    logo: "/partner-born.png",
    brand: "born",
    description:
      "Traditionsmetzgerei aus dem Westerwald mit regional hergestellten Fleisch- und Wurstwaren sowie einem Standort in Flammersfeld.",
  },
  {
    name: "MISS FOOD Catering",
    place: "Niederelbert",
    url: "https://miss-food.catering/",
    logo: "/partner-miss-food.png",
    brand: "miss-food",
    description:
      "Catering mit hauseigener Metzgerei für private Feiern, Firmenveranstaltungen und große Events – mit kreativen Buffets aus dem Westerwald.",
  },
];

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

const shippingRates = [
  { maxWeight: 2, price: 6.19, label: "DHL Paket bis 2 kg" },
  { maxWeight: 5, price: 7.69, label: "DHL Paket bis 5 kg" },
  { maxWeight: 10, price: 10.49, label: "DHL Paket bis 10 kg" },
  { maxWeight: 20, price: 18.99, label: "DHL Paket bis 20 kg" },
  { maxWeight: 31.5, price: 23.99, label: "DHL Paket bis 31,5 kg" },
] as const;

function calculateShipping(weight: number) {
  if (weight <= 0) return { cost: 0, packages: [] as string[] };
  let remaining = weight;
  let cost = 0;
  const packages: string[] = [];

  while (remaining > 0) {
    const packageWeight = Math.min(remaining, 31.5);
    const rate =
      shippingRates.find((entry) => packageWeight <= entry.maxWeight) ||
      shippingRates[shippingRates.length - 1];
    cost += rate.price;
    packages.push(rate.label);
    remaining = Math.max(0, remaining - 31.5);
  }

  return { cost, packages };
}

export default function Home() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    mehl: 0,
    "loeckchen-500": 0,
    "loeckchen-250": 0,
    "band-500": 0,
    "band-250": 0,
  });
  const [accepted, setAccepted] = useState(false);
  const [orderMethod, setOrderMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "shipping">("pickup");
  const [notice, setNotice] = useState("");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [showCornerLogo, setShowCornerLogo] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setShowCornerLogo(window.scrollY < 20);

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;
      setShowCornerLogo(currentScrollY < 20);

      if (currentScrollY < 20) {
        setHeaderVisible(true);
      } else if (difference > 1) {
        setHeaderVisible(false);
      } else if (difference < -1) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productTotal = useMemo(
    () =>
      products.reduce(
        (sum, product) => sum + product.price * (quantities[product.id] || 0),
        0,
      ),
    [quantities],
  );
  const totalWeight = useMemo(
    () =>
      products.reduce(
        (sum, product) => sum + product.weight * (quantities[product.id] || 0),
        0,
      ),
    [quantities],
  );
  const shipping = useMemo(
    () =>
      deliveryMethod === "shipping"
        ? calculateShipping(totalWeight)
        : { cost: 0, packages: [] as string[] },
    [deliveryMethod, totalWeight],
  );
  const total = productTotal + shipping.cost;

  function changeQuantity(id: string, next: number) {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(0, Math.min(99, next || 0)),
    }));
  }

  function prepareOrder(formElement: HTMLFormElement) {
    if (!formElement.reportValidity()) return null;
    const form = new FormData(formElement);
    const chosen = products.filter((product) => quantities[product.id] > 0);

    if (!chosen.length) {
      setNotice("Bitte wählen Sie mindestens ein Produkt aus.");
      return null;
    }

    const orderLines = chosen.map((product) => {
      const amount = quantities[product.id];
      return `${amount} × ${product.name} (${product.detail}) – ${euro.format(
        amount * product.price,
      )}`;
    });
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");
    const street = String(form.get("street") || "");
    const postalCode = String(form.get("postalCode") || "");
    const city = String(form.get("city") || "");
    const deliveryLines =
      deliveryMethod === "shipping"
        ? [
            "Lieferart: Postversand",
            `Versandadresse: ${street}, ${postalCode} ${city}`,
            `Produktgewicht: ${totalWeight.toLocaleString("de-DE")} kg`,
            `Paketklasse: ${shipping.packages.join(" + ")}`,
            `Versandkosten: ${euro.format(shipping.cost)}`,
            "Zahlung: PayPal vor dem Versand",
          ]
        : [
            "Lieferart: Selbstabholung",
            "Abholung: Kastanienhof, 56412 Niedererbach (Termin nach Vereinbarung)",
            "Zahlung: Bar, mit Karte oder per PayPal bei der Abholung",
          ];
    return [
      "Verbindliche Bestellung über die Website",
      "",
      `Name: ${firstName} ${lastName}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      "",
      "Bestellung:",
      ...orderLines,
      "",
      `Warenwert: ${euro.format(productTotal)}`,
      ...deliveryLines,
      `Gesamtbetrag: ${euro.format(total)}`,
      message ? `Hinweis: ${message}` : "",
      "",
      "Ich bestelle die oben aufgeführten Produkte kostenpflichtig.",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = prepareOrder(event.currentTarget);
    if (!body) return;

    if (orderMethod === "whatsapp") {
      setNotice(
        "Ihre Bestellung wurde vorbereitet. Bitte senden Sie die geöffnete WhatsApp-Nachricht ab, damit sie bei uns eingeht.",
      );
      window.open(
        `https://wa.me/491632200700?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");

    setNotice(
      "Ihre Bestellung wurde vorbereitet. Bitte senden Sie die geöffnete E-Mail ab, damit sie bei uns eingeht.",
    );
    window.location.href = `mailto:landmarktczakert@gmail.com?subject=${encodeURIComponent(
      `Bestellung von ${firstName} ${lastName}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <header className={`site-header ${headerVisible ? "" : "site-header-hidden"}`}>
        <a className="brand" href="#start" aria-label="Landmarkt Czakert – nach oben">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#geschichte">Geschichte</a>
          <a href="#produkte">Produkte</a>
          <a href="#partner">Partner</a>
          <a href="#bestellen">Bestellen</a>
        </nav>
        <a className="order-pill" href="#bestellen">
          Jetzt bestellen <span aria-hidden="true">↓</span>
        </a>
      </header>
      <img
        className={`floating-corner-logo ${showCornerLogo ? "" : "floating-corner-logo-hidden"}`}
        src="/logo-landmarkt-transparent.png"
        alt=""
        aria-hidden="true"
      />

      <section className="hero" id="start">
        <img
          className="hero-image"
          src="/hero-produkte-hq.jpg"
          alt="Dinkelvollkornprodukte von Landmarkt Czakert"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Familienbetrieb aus Niedererbach · Westerwald</p>
          <h1 className="hero-slogan">
            <span className="slogan-line">Unsere Familientradition, Ihr Genuss –</span>
            <span className="slogan-line">naturnah angebauter Dinkel aus der Region.</span>
            <em>Qualität muss nicht immer teuer sein.</em>
          </h1>
          <p className="hero-intro">
            Ehrliche Dinkelvollkornprodukte aus naturnahem Anbau – regional,
            persönlich und mit Respekt für den Boden.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#produkte">
              Produkte entdecken
            </a>
            <a className="text-link" href="#geschichte">
              Unsere Geschichte <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div className="hero-facts" aria-label="Unsere Grundsätze">
          <span>Ohne Spritzmittel</span>
          <span>Ohne Kunstdünger</span>
          <span>Aus eigenem Anbau</span>
        </div>
      </section>

      <section className="manifesto">
        <p>Die Erde ist unser Kapital.</p>
        <div className="grain-mark">
          <img
            src="/logo-landmarkt.png"
            alt="Landmarkt Czakert"
          />
        </div>
        <p>
          Deshalb geben wir ihr Zeit, arbeiten bodenschonend und begleiten
          unser Getreide selbst – von der Aussaat bis zur Ernte.
        </p>
      </section>

      <section className="story section" id="geschichte">
        <div className="section-heading">
          <p className="eyebrow">01 · Unsere Geschichte</p>
          <h2>Landwirtschaft ist bei uns Familiensache.</h2>
        </div>
        <div className="story-grid">
          <figure className="family-photo">
            <img
              src="/familie-feld.jpeg"
              alt="Familie Czakert bei der gemeinsamen Dinkelernte"
            />
            <figcaption>Familie Czakert · Kastanienhof in Niedererbach</figcaption>
          </figure>
          <div className="story-copy">
            <p className="lead">
              Unser Hof liegt im südlichen Westerwald – fast an der Grenze zu
              Hessen. Seit drei Generationen widmen wir uns hier mit
              Leidenschaft und Verantwortung dem Getreideanbau.
            </p>
            <p>
              Früher stand die Schweinehaltung im Mittelpunkt. Der Wunsch nach
              mehr Qualität, mehr Verantwortung und einem zukunftsfähigen Weg
              führte uns zum Dinkelanbau. Heute entstehen aus unserem eigenen
              Korn vollwertiges Mehl und aromatische Nudeln.
            </p>
            <p>
              Wir verzichten auf Kunstdünger und Spritzmittel. Eine schonende
              Bodenbearbeitung, eine durchdachte Fruchtfolge und der Erhalt der
              Bodenfruchtbarkeit stehen für uns an erster Stelle. Insbesondere
              setzen wir kein Glyphosat ein – damit auch die nächste Generation
              noch gut von und mit dieser Erde leben kann.
            </p>
            <div className="story-signature">
              <div>
                <strong>Regional angebaut</strong>
                <p>Unser Dinkel wächst auf eigenen Feldern in Niedererbach und Umgebung.</p>
              </div>
              <div>
                <strong>Schonend verarbeitet</strong>
                <p>Vom Korn bis zum fertigen Produkt achten wir auf Sorgfalt und Qualität.</p>
              </div>
              <div>
                <strong>Persönlich verkauft</strong>
                <p>Bei uns kaufen Sie direkt von der Familie oder bei ausgewählten Partnern.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="field-break" aria-label="Arbeit auf dem Feld">
        <img src="/maehdrescher.jpeg" alt="Mähdrescher bei der Dinkelernte" />
        <blockquote>
          „Wir wissen, wo unser Dinkel wächst – und was nicht auf unsere Felder
          kommt.“
        </blockquote>
      </section>

      <section className="products section" id="produkte">
        <div className="section-heading products-heading">
          <div>
            <p className="eyebrow">02 · Unser Sortiment</p>
            <h2>Wenige Produkte. Viel Sorgfalt.</h2>
          </div>
          <p>
            Vollwertig, aromatisch und unkompliziert. Unsere Nudeln werden besonders
            schonend getrocknet, damit sie ihren nussigen Geschmack entfalten.
          </p>
        </div>
        <div className="bulk-note">
          <strong>Sie benötigen eine größere Menge?</strong>
          <div>
            <p>
              Größere Bestellmengen für Feiern, Gruppen, Gastronomie oder Handel
              sind auf Anfrage erhältlich. Sprechen Sie uns gerne direkt an.
            </p>
            <div className="bulk-contact-links">
              <a href="mailto:landmarktczakert@gmail.com?subject=Anfrage%20zu%20einer%20gr%C3%B6%C3%9Feren%20Bestellmenge&body=Hallo%20Landmarkt%20Czakert%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20gr%C3%B6%C3%9Fere%20Bestellmenge.%0A%0AGew%C3%BCnschte%20Produkte%20und%20Mengen%3A%0AAnlass%20%2F%20Unternehmen%3A%0AWunschtermin%3A%0AName%3A%0ATelefon%3A%0A%0AFreundliche%20Gr%C3%BC%C3%9Fe">
                E-Mail schreiben →
              </a>
              <a
                href="https://wa.me/491632200700?text=Hallo%20Landmarkt%20Czakert%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20gr%C3%B6%C3%9Fere%20Bestellmenge.%0A%0AGew%C3%BCnschte%20Produkte%20und%20Mengen%3A"
                target="_blank"
                rel="noreferrer"
              >
                Per WhatsApp melden →
              </a>
            </div>
          </div>
        </div>
        <div className="product-grid">
          {products.filter((product) => product.showcase).map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={`${product.name}, ${product.detail}`} />
                <span>0{index + 1}</span>
              </div>
              <div className="product-title">
                <div>
                  <h3>
                    {product.id === "mehl"
                      ? product.name
                      : `${product.name} – ${product.detail.split(" · ")[0]}`}
                  </h3>
                  {product.id === "mehl" ? (
                    <p>{product.detail}</p>
                  ) : (
                    <p className="product-size-prices">
                      <span>250 g – 2,50 €</span>
                      <span>500 g – 3,10 €</span>
                    </p>
                  )}
                </div>
                {product.id === "mehl" && <strong>{euro.format(product.price)}</strong>}
              </div>
              <p className="product-note">{product.note}</p>
              <a href="#bestellen">Zum Bestellformular <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="values section">
        <div className="section-heading">
          <p className="eyebrow">03 · Was uns wichtig ist</p>
          <h2>Guter Geschmack beginnt auf gesundem Boden.</h2>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>Naturnaher Anbau</h3>
            <p>
              Unser Dinkel wächst ohne Kunstdünger und frei von Pestiziden. Wir
              verzichten konsequent auf Glyphosat. Bodenschonende Verfahren und
              Fruchtfolge helfen uns, gesunde Böden und die natürliche Qualität
              des Getreides zu erhalten.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Qualität</h3>
            <p>
              Durch eine schonende Verarbeitung bleiben Geschmack und
              Inhaltsstoffe bestmöglich erhalten. Unsere Pasta hat eine kurze
              Kochzeit. Das Vollkornmehl wird besonders fein gemahlen und
              lässt sich keiner herkömmlichen Mehltype zuordnen.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Genuss</h3>
            <p>
              Dinkelvollkorn enthält natürlicherweise unter anderem Eiweiß,
              Eisen und Magnesium. Die genauen Nährwerte stehen auf der
              Verpackung. Unsere Pasta gibt es als Löckchen und als gewelltes
              Band – beide mit kräftigem, eigenständigem Geschmack.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Kurze Wege</h3>
            <p>
              Unser Dinkel wächst in Niedererbach und Umgebung. Viele unserer
              Verkaufsstellen liegen direkt im Westerwald.
            </p>
          </article>
          <article>
            <span>05</span>
            <h3>Echter Kontakt</h3>
            <p>
              Wir sind ein kleines Familienunternehmen. Darum bleiben Beratung,
              Bestellung und Abholung persönlich.
            </p>
          </article>
          <article>
            <span>06</span>
            <h3>Aus eigenem Anbau</h3>
            <p>
              Wir begleiten unseren Dinkel selbst – von der Aussaat bis zur
              Ernte. So kennen wir seine Herkunft und übernehmen Verantwortung
              für die Qualität unseres Rohstoffs.
            </p>
          </article>
        </div>
      </section>

      <section className="partners section" id="partner">
        <div className="section-heading partner-heading">
          <div>
            <p className="eyebrow">04 · Partner & Verkaufsstellen</p>
            <h2>Regional verbunden.</h2>
          </div>
          <p>
            Unsere Produkte gibt es direkt bei uns und bei ausgewählten
            Partnern. Das Sortiment vor Ort kann variieren.
          </p>
        </div>
        <div className="network">
          <span>Partner von</span>
          <a
            href="https://www.naturgenuss-partner.de/"
            target="_blank"
            rel="noreferrer"
            aria-label="Naturgenuss Erzeuger"
          >
            <img src="/partner-naturgenuss.png" alt="Naturgenuss Erzeuger" />
          </a>
          <a
            href="https://wir-westerwaelder.de/"
            target="_blank"
            rel="noreferrer"
            aria-label="Wir Westerwälder"
          >
            <img src="/partner-wir-westerwaelder-transparent.png" alt="Wir Westerwälder – Made in Westerwald" />
          </a>
        </div>
        <div className="stockist-grid">
          {stockists.map((partner) => (
            <a
              className="partner-card"
              key={`${partner.name}-${partner.place}`}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${partner.name} in ${partner.place} öffnen`}
            >
              <span className="partner-arrow" aria-hidden="true">↗</span>
              <div className={`partner-logo ${partner.brand || ""}`}>
                {partner.logo ? (
                  <img src={partner.logo} alt="" />
                ) : (
                  <strong>{partner.mark}</strong>
                )}
              </div>
              <h3>{partner.name}</h3>
              <p>{partner.place}</p>
              {"comingSoon" in partner && partner.comingSoon && (
                <span className="partner-status">Demnächst · unter Vorbehalt</span>
              )}
              {"description" in partner && partner.description && (
                <p className="partner-description">{partner.description}</p>
              )}
            </a>
          ))}
        </div>
        <div className="cooperation-callout">
          <div>
            <p className="eyebrow">Gemeinsam regional wachsen</p>
            <h3>Interesse an einer Zusammenarbeit?</h3>
          </div>
          <div>
            <p>
              Wir freuen uns über neue Kooperationen und Verkaufsstellen. Wenn
              Sie unsere Produkte anbieten, gemeinsam eine Aktion planen oder
              eine andere Idee mit uns umsetzen möchten, melden Sie sich gerne
              direkt und unverbindlich bei uns.
            </p>
            <div className="cooperation-links">
              <a href="mailto:landmarktczakert@gmail.com?subject=Interesse%20an%20einer%20Zusammenarbeit&body=Hallo%20Landmarkt%20Czakert%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20Zusammenarbeit.%0A%0AMeine%20Idee%20%2F%20mein%20Anliegen%3A%0A%0AName%3A%0AUnternehmen%3A%0ATelefon%3A%0A%0AFreundliche%20Gr%C3%BC%C3%9Fe">
                E-Mail schreiben →
              </a>
              <a
                href="https://wa.me/491632200700?text=Hallo%20Landmarkt%20Czakert%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Zusammenarbeit.%0A%0AMeine%20Idee%20%2F%20mein%20Anliegen%3A"
                target="_blank"
                rel="noreferrer"
              >
                Per WhatsApp melden →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="order section" id="bestellen">
        <div className="order-intro">
          <p className="eyebrow">06 · Direkt bestellen</p>
          <h2>Vom Feld zu Ihnen.</h2>
          <p>
            Stellen Sie Ihre Bestellung zusammen. Nach dem Absenden bestätigen
            wir Ihnen per E-Mail, wann Ihre Produkte am Kastanienhof in
            Niedererbach abgeholt werden können.
          </p>
          <p className="bulk-order-copy">
            Sie möchten eine größere Menge bestellen? Schreiben Sie die
            gewünschte Menge einfach in das Nachrichtenfeld oder kontaktieren
            Sie uns direkt – Großmengen sind auf Anfrage erhältlich.
          </p>
          <div className="pickup">
            <span>Abholung*</span>
            <strong>Kastanienhof</strong>
            <p>56412 Niedererbach · Termin nach Vereinbarung</p>
          </div>
          <p className="shipping-note">
            * Ein postalischer Versand ist ebenfalls möglich. Die Versandkosten
            werden abhängig vom Gewicht zusätzlich berechnet.
          </p>
        </div>
        <form className="order-form" onSubmit={submitOrder}>
          <fieldset>
            <legend>1. Produkte auswählen</legend>
            <p className="tax-note">
              Alle angegebenen Preise sind Endpreise inklusive der gesetzlichen
              Mehrwertsteuer.
            </p>
            <div className="order-products">
              {products.map((product) => (
                <div className="order-row" key={product.id}>
                  <div>
                    <strong>
                      {product.id === "mehl"
                        ? `${product.name} – 1 kg`
                        : `${product.name} – ${product.detail.replace(" · ", " – ")}`}
                    </strong>
                    <span>{euro.format(product.price)}</span>
                  </div>
                  <label>
                    <span className="sr-only">Menge für {product.name}, {product.detail}</span>
                    <button
                      type="button"
                      onClick={() =>
                        changeQuantity(product.id, quantities[product.id] - 1)
                      }
                      aria-label={`Einmal ${product.name} entfernen`}
                    >
                      −
                    </button>
                    <input
                      inputMode="numeric"
                      min="0"
                      max="99"
                      name={`quantity-${product.id}`}
                      type="number"
                      value={quantities[product.id]}
                      onChange={(event) =>
                        changeQuantity(product.id, Number(event.target.value))
                      }
                    />
                    <button
                      type="button"
                      onClick={() =>
                        changeQuantity(product.id, quantities[product.id] + 1)
                      }
                      aria-label={`Einmal ${product.name} hinzufügen`}
                    >
                      +
                    </button>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>2. Lieferart auswählen</legend>
            <div className="delivery-method">
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="pickup"
                  checked={deliveryMethod === "pickup"}
                  onChange={() => setDeliveryMethod("pickup")}
                />
                <span>
                  <strong>Selbstabholung</strong>
                  <small>Kastanienhof · Termin nach Vereinbarung</small>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="shipping"
                  checked={deliveryMethod === "shipping"}
                  onChange={() => setDeliveryMethod("shipping")}
                />
                <span>
                  <strong>Postversand</strong>
                  <small>DHL-Onlinepreis nach Produktgewicht</small>
                </span>
              </label>
            </div>
            {deliveryMethod === "shipping" && (
              <div className="shipping-calculation" aria-live="polite">
                <span>Produktgewicht: {totalWeight.toLocaleString("de-DE")} kg</span>
                <span>
                  {shipping.packages.length
                    ? shipping.packages.join(" + ")
                    : "Paketklasse nach Produktauswahl"}
                </span>
                <strong>Versand: {euro.format(shipping.cost)}</strong>
                <a
                  href="https://www.dhl.de/de/privatkunden/pakete-versenden/deutschlandweit-versenden/preise-national.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  DHL-Onlinepreise · Stand Juli 2026 ↗
                </a>
              </div>
            )}
            <p className="payment-note">
              <strong>Zahlungsarten:</strong>{" "}
              {deliveryMethod === "shipping"
                ? "PayPal vor dem Versand."
                : "Barzahlung, Kartenzahlung oder PayPal bei der Abholung."}
            </p>
          </fieldset>

          <fieldset>
            <legend>3. Ihre Kontaktdaten</legend>
            <div className="form-grid">
              <label>
                Vorname
                <input name="firstName" autoComplete="given-name" required />
              </label>
              <label>
                Nachname
                <input name="lastName" autoComplete="family-name" required />
              </label>
              <label>
                E-Mail-Adresse
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Telefon <span>(optional)</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              {deliveryMethod === "shipping" && (
                <>
                  <label className="full">
                    Straße und Hausnummer
                    <input name="street" autoComplete="street-address" required />
                  </label>
                  <label>
                    Postleitzahl
                    <input name="postalCode" autoComplete="postal-code" required />
                  </label>
                  <label>
                    Ort
                    <input name="city" autoComplete="address-level2" required />
                  </label>
                </>
              )}
              <label className="full">
                Nachricht <span>(optional)</span>
                <textarea name="message" rows={3} />
              </label>
            </div>
          </fieldset>

          <div className="order-summary" aria-live="polite">
            <div>
              <span>Warenwert</span>
              <b>{euro.format(productTotal)}</b>
              <span>{deliveryMethod === "shipping" ? "Postversand" : "Selbstabholung"}</span>
              <b>{euro.format(shipping.cost)}</b>
            </div>
            <div>
              <span>Gesamtbetrag</span>
              <strong>{euro.format(total)}</strong>
            </div>
          </div>
          <div className="buyer-protection">
            <strong>Ihre Rechte bei dieser Bestellung</strong>
            <p>
              Unmittelbar vor dem Absenden sehen Sie Einzelpreise,
              Versandkosten und Gesamtbetrag. Der Vertrag kommt erst mit
              unserer Annahme der abgesendeten Bestellung zustande. Es gilt das
              gesetzliche Mängelhaftungsrecht.
            </p>
            <p>
              Zahlung:{" "}
              {deliveryMethod === "shipping"
                ? "PayPal vor dem Versand."
                : "Bar, mit Karte oder per PayPal bei der Abholung."}
            </p>
            <p>
              Bitte lesen Sie die{" "}
              <a href="/verbraucherinformationen" target="_blank">
                Verbraucherinformationen
              </a>{" "}
              und die{" "}
              <a href="/widerruf" target="_blank">
                Widerrufsbelehrung
              </a>
              .
            </p>
          </div>
          <label className="consent">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(event) => setAccepted(event.target.checked)}
              required
            />
            <span>
              Ich habe die Verbraucherinformationen und die
              Widerrufsbelehrung gelesen. Ich bestelle die ausgewählten
              Produkte verbindlich und kostenpflichtig.{" "}
              {deliveryMethod === "shipping"
                ? "Der Gesamtbetrag enthält die berechneten Versandkosten."
                : "Die Abholung erfolgt nach Terminvereinbarung."}
            </span>
          </label>
          <fieldset className="order-method">
            <legend>Wie möchten Sie bestellen?</legend>
            <label>
              <input
                type="radio"
                name="orderMethod"
                value="whatsapp"
                checked={orderMethod === "whatsapp"}
                onChange={() => setOrderMethod("whatsapp")}
              />
              <span>Per WhatsApp bestellen</span>
            </label>
            <label>
              <input
                type="radio"
                name="orderMethod"
                value="email"
                checked={orderMethod === "email"}
                onChange={() => setOrderMethod("email")}
              />
              <span>Per E-Mail bestellen</span>
            </label>
          </fieldset>
          <p className="form-small">
            Beim Klick wird eine vorausgefüllte E-Mail oder WhatsApp-Nachricht
            geöffnet. Erst mit dem Absenden der Nachricht geht die Bestellung
            bei uns ein.
          </p>
          <button
            className={`submit-order ${orderMethod === "whatsapp" ? "whatsapp-order" : ""}`}
            type="submit"
            disabled={!accepted || total === 0}
          >
            {orderMethod === "whatsapp"
              ? "Zahlungspflichtig per WhatsApp bestellen"
              : "Zahlungspflichtig per E-Mail bestellen"}
            <span aria-hidden="true">→</span>
          </button>
          {notice && <p className="form-notice">{notice}</p>}
        </form>
      </section>

      <section className="instagram">
        <img src="/feld-team.jpeg" alt="Zwei Generationen der Familie Czakert im Dinkelfeld" />
        <div>
          <p className="eyebrow">Einblicke vom Feld</p>
          <h2>Folgen Sie uns.</h2>
          <a
            href="https://www.instagram.com/landmarkt.czakert/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram @landmarkt.czakert <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
          <p>Dinkelvollkornprodukte aus dem Westerwald.</p>
        </div>
        <div>
          <strong>Kontakt</strong>
          <a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a>
          <span>Kastanienhof · 56412 Niedererbach</span>
          <a href="/impressum">Impressum</a>
          <a href="/verbraucherinformationen">Verbraucherinformationen</a>
          <a href="/widerruf">Widerrufsbelehrung</a>
        </div>
        <div>
          <strong>Schnellzugriff</strong>
          <a href="#geschichte">Geschichte</a>
          <a href="#produkte">Produkte</a>
          <a href="#bestellen">Bestellen</a>
        </div>
        <div>
          <strong>Social</strong>
          <a
            href="https://www.instagram.com/landmarkt.czakert/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="#start">Nach oben ↑</a>
        </div>
      </footer>
      <a className="withdrawal-link" href="/widerruf">
        Vertrag widerrufen
      </a>
    </main>
  );
}
