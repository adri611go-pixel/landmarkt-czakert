"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  saveConsent,
  type ConsentChoice,
} from "./CookieNotice";

const products = [
  {
    id: "mehl",
    name: "Dinkelvollkornmehl",
    detail: "1 kg",
    price: 2.1,
    weight: 1,
    image: "/mehl-hq.jpg",
    note: "Das ganze Korn, fein vermahlen – kräftig, vollwertig und vielseitig.",
    showcase: true,
  },
  {
    id: "loeckchen-500",
    name: "Dinkelvollkornnudeln",
    detail: "Löckchen · 500 g",
    price: 3.1,
    weight: 0.5,
    image: "/pasta-loeckchen-hq.jpg",
    note: "Nussig im Geschmack, besonders schonend getrocknet und in nur 3–4 Minuten gekocht.",
    showcase: true,
  },
  {
    id: "loeckchen-250",
    name: "Dinkelvollkornnudeln",
    detail: "Löckchen · 250 g",
    price: 2.5,
    weight: 0.25,
    image: "/pasta-loeckchen-hq.jpg",
    note: "Nussig im Geschmack, besonders schonend getrocknet und in nur 3–4 Minuten gekocht.",
    showcase: false,
  },
  {
    id: "band-500",
    name: "Dinkelvollkornnudeln",
    detail: "Band gewellt · 500 g",
    price: 3.1,
    weight: 0.5,
    image: "/pasta-band-hq.jpg",
    note: "Nussig im Geschmack, besonders schonend getrocknet und in nur 3–4 Minuten gekocht.",
    showcase: true,
  },
  {
    id: "band-250",
    name: "Dinkelvollkornnudeln",
    detail: "Band gewellt · 250 g",
    price: 2.5,
    weight: 0.25,
    image: "/pasta-band-hq.jpg",
    note: "Nussig im Geschmack, besonders schonend getrocknet und in nur 3–4 Minuten gekocht.",
    showcase: false,
  },
] as const;

const stockists = [
  {
    name: "CAP Supermarkt",
    place: "Hundangen",
    url: "https://cap-markt.de/",
    logo: "/partner-cap.png",
    brand: "cap",
    description:
      "Lebensmittel-Nahversorgung mit regionalen Angeboten, persönlichem Service und gelebter Inklusion.",
  },
  {
    name: "Hofladen Kraut und Rüben",
    place: "Ewighausen",
    url: "https://hofladen-krautundrueben.de/",
    logo: "/partner-kraut-rueben.png",
    brand: "kraut-rueben",
    description:
      "Rund um die Uhr geöffneter Hofladen mit regionalen Produkten ‚Made in Westerwald‘ und besonderem Augenmerk auf Nachhaltigkeit und Tierwohl.",
  },
  {
    name: "Müller’s Hofladen",
    place: "Großmaischeid",
    url: "https://naturgenuss-partner.de/2023/09/04/muelers-hofladen/",
    mark: "Logo folgt",
    brand: "muellers",
    description: "Hofladen in Großmaischeid mit regionalen Lebensmitteln und persönlichem Verkauf.",
  },
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
    url: "https://rewe-daci.de/",
    logo: "/partner-rewe-daci.png",
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
    logo: "/partner-munditia-round.jpg",
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
  {
    maxWeight: 2,
    price: 6.19,
    label: "DHL Paket bis 2 kg · max. 60 × 30 × 15 cm",
  },
  {
    maxWeight: 5,
    price: 7.69,
    label: "DHL Paket bis 5 kg · max. 120 × 60 × 60 cm",
  },
  {
    maxWeight: 10,
    price: 10.49,
    label: "DHL Paket bis 10 kg · max. 120 × 60 × 60 cm",
  },
  {
    maxWeight: 20,
    price: 18.99,
    label: "DHL Paket bis 20 kg · max. 120 × 60 × 60 cm",
  },
  {
    maxWeight: 31.5,
    price: 23.99,
    label: "DHL Paket bis 31,5 kg · max. 120 × 60 × 60 cm",
  },
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

function ValueIcon({ type }: { type: "tractor" | "sprout" | "process" | "location" }) {
  if (type === "tractor") {
    return <svg className="value-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="14" cy="35" r="7"/><circle cx="36" cy="36" r="4"/><path d="M7 35H4v-8h8l4-11h11v15h9l5 5M18 16v15M18 22h9M30 26h7l4 6"/></svg>;
  }
  if (type === "sprout") {
    return <svg className="value-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 42V22M24 28C15 28 9 23 8 14c9 0 15 5 16 14ZM24 22c1-9 7-14 16-14-1 9-7 14-16 14ZM14 42h20"/></svg>;
  }
  if (type === "process") {
    return <svg className="value-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="25" cy="29" r="12"/><circle cx="25" cy="29" r="4"/><path d="M25 17V7M21 12l-4-4M29 12l4-4M13 42h25M9 31c4-1 7-4 8-8M8 25c4 0 7-2 9-5"/></svg>;
  }
  return <svg className="value-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M39 20c0 11-15 24-15 24S9 31 9 20a15 15 0 1 1 30 0Z"/><circle cx="24" cy="20" r="5"/></svg>;
}

export default function Home() {
  const [mapsAllowed, setMapsAllowed] = useState(false);
  const [flourImageIndex, setFlourImageIndex] = useState(0);
  const [curlsImageIndex, setCurlsImageIndex] = useState(0);
  const [ribbonImageIndex, setRibbonImageIndex] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    mehl: 0,
    "loeckchen-500": 0,
    "loeckchen-250": 0,
    "band-500": 0,
    "band-250": 0,
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [orderMethod, setOrderMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "shipping">("pickup");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    function readChoice() {
      try {
        const saved = window.localStorage.getItem(CONSENT_STORAGE_KEY);
        setMapsAllowed(saved ? (JSON.parse(saved) as ConsentChoice).externalMedia === true : false);
      } catch {
        setMapsAllowed(false);
      }
    }

    function handleChoice(event: Event) {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      setMapsAllowed(choice?.externalMedia === true);
    }

    readChoice();
    window.addEventListener(CONSENT_EVENT, handleChoice);
    return () => window.removeEventListener(CONSENT_EVENT, handleChoice);
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
  const shipping = useMemo(() => calculateShipping(totalWeight), [totalWeight]);
  const orderTotal =
    productTotal + (deliveryMethod === "shipping" ? shipping.cost : 0);
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
    return [
      "Hallo,",
      "",
      deliveryMethod === "pickup"
        ? "ich möchte gerne folgende Produkte unverbindlich zur Abholung anfragen:"
        : "ich möchte gerne folgende Produkte unverbindlich für den Postversand anfragen:",
      "",
      ...orderLines,
      "",
      `— Voraussichtlicher Warenwert: ${euro.format(productTotal)} —`,
      "",
      "Gewünschte Lieferart:",
      deliveryMethod === "pickup"
        ? "Selbstabholung: Kastanienhof, 56412 Niedererbach (Termin nach Vereinbarung)"
        : `Postversand innerhalb Deutschlands (${shipping.packages.join(
            " + ",
          )}) – voraussichtliche Versandkosten: ${euro.format(shipping.cost)}`,
      deliveryMethod === "shipping"
        ? `Gesamtgewicht der Produkte: ${totalWeight.toLocaleString("de-DE")} kg`
        : "",
      deliveryMethod === "shipping"
        ? `— Voraussichtlicher Gesamtbetrag: ${euro.format(orderTotal)} —`
        : "",
      "",
      "Kontaktdaten:",
      `Name: ${firstName} ${lastName}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      message ? `Hinweis: ${message}` : "",
      "",
      deliveryMethod === "pickup"
        ? "Diese Anfrage ist unverbindlich. Der Kaufvertrag kommt erst bei Übergabe und Bezahlung vor Ort zustande."
        : "Diese Anfrage ist unverbindlich. Wir bestätigen Ihnen Verfügbarkeit und Gesamtpreis einschließlich Versandkosten persönlich. Der Kaufvertrag kommt mit der Übergabe des Pakets an DHL zustande.",
      "",
      "Vielen Dank!",
      "",
      "Beste Grüße",
      firstName || lastName ? `${firstName} ${lastName}`.trim() : "",
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
        "Ihre unverbindliche Abholanfrage wurde vorbereitet. Bitte senden Sie die geöffnete WhatsApp-Nachricht ab.",
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
      "Ihre unverbindliche Abholanfrage wurde vorbereitet. Bitte senden Sie die geöffnete E-Mail ab.",
    );
    window.location.href = `mailto:landmarktczakert@gmail.com?subject=${encodeURIComponent(
      `Unverbindliche Abholanfrage von ${firstName} ${lastName}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Landmarkt Czakert – nach oben">
          <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#geschichte">Geschichte</a>
          <a href="#produkte">Produkte</a>
          <a href="#partner">Partner</a>
          <a href="/kontakt">Kontakt</a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert"
            target="_blank"
            rel="noreferrer"
          >
            Rezensionen
          </a>
        </nav>
        <a className="order-pill" href="#bestellen">
          Abholung anfragen <span aria-hidden="true">↓</span>
        </a>
      </header>
      <section className="hero" id="start">
        <img
          className="hero-image"
          src="/hero-produkte-hq.jpg"
          alt="Dinkelvollkornprodukte von Landmarkt Czakert"
        />
        <div className="hero-shade" />
        <img
          className="hero-corner-logo"
          src="/logo-landmarkt-transparent.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-copy">
          <p className="eyebrow">Familienbetrieb aus Niedererbach · Westerwald</p>
          <h1 className="hero-slogan">
            <span className="slogan-line">Unsere Familientradition, Ihr Genuss –</span>
            <span className="slogan-line">naturnah angebauter Dinkel aus der Region</span>
            <em>Qualität muss nicht immer teuer sein</em>
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
        <div className="story-heading">
          <p className="eyebrow">01 · Unsere Geschichte</p>
          <h2>Landwirtschaft ist bei uns Familiensache</h2>
        </div>
        <div className="story-grid">
          <figure className="family-photo">
            <img
              src="/familie-feld.jpeg"
              alt="Familie Czakert bei der gemeinsamen Dinkelernte"
            />
            <figcaption>Familie Czakert</figcaption>
          </figure>
          <div className="story-copy">
            <p className="lead">
              Seit drei Generationen widmen wir uns mit Leidenschaft und
              Verantwortung dem Getreideanbau auf unserem Hof im südlichen
              Westerwald an der Grenze zu Hessen.
            </p>
            <p>
              Im Laufe der Zeit haben wir unseren Betrieb von der Viehhaltung hin
              zur gezielten Bewirtschaftung unserer Felder weiterentwickelt. Dabei
              wurde deutlich, dass für viele Menschen die Herkunft ihrer
              Lebensmittel und eine <strong>transparente Herstellung</strong>{" "}
              zunehmend an Bedeutung gewinnen.
            </p>
            <p>
              Heute verarbeiten wir unser <strong>eigenes Korn</strong>{" "}zu
              vollwertigem Mehl und aromatischen Nudeln. Dabei <strong>verzichten</strong>{" "}
              wir bewusst auf <strong>Kunstdünger</strong> und <strong>chemische
              Spritzmittel</strong>.{" "}
              Stattdessen setzen wir auf eine <strong>schonende
              Bodenbearbeitung</strong>, eine durchdachte <strong>Fruchtfolge</strong>{" "}
              und den <strong>langfristigen Erhalt der Bodenfruchtbarkeit</strong>.
            </p>
            <p>
              Diese nachhaltige und bodenschonende Bewirtschaftung schmeckt man
              auch: in der <strong>hohen Qualität</strong>{" "}und im <strong>natürlichen,
              aromatischen Geschmack</strong> unserer Produkte.
            </p>
          </div>
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
      </section>

      <section className="field-break" aria-label="Arbeit auf dem Feld">
        <img src="/maehdrescher.jpeg" alt="Mähdrescher bei der Dinkelernte" />
        <blockquote>
          „Wir wissen, wo unser Dinkel wächst – und was nicht auf unsere Felder
          kommt.“
        </blockquote>
      </section>

      <section className="products section" id="produkte">
        <div className="products-heading">
          <p className="eyebrow">02 · Unser Sortiment</p>
          <h2>Kleine Auswahl. Große Sorgfalt</h2>
          <p className="products-heading-copy">
            Unsere Dinkelvollkornprodukte verbinden den vollen Wert des ganzen
            Korns mit einem angenehm milden Geschmack. Durch die besonders feine
            Vermahlung entstehen eine zarte Konsistenz und ein feiner Biss. Auch
            unsere Nudeln überzeugen mit ihrem aromatischen Geschmack und sind
            bereits nach etwa drei Minuten fertig gekocht.
          </p>
        </div>
        <div className="product-grid">
          {products.filter((product) => product.showcase).map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className={`product-image ${
                product.id === "mehl" || product.id === "loeckchen-500" || product.id === "band-500"
                  ? `product-image-gallery${
                      (product.id === "mehl" && flourImageIndex === 1) ||
                      (product.id === "loeckchen-500" && curlsImageIndex === 1) ||
                      (product.id === "band-500" && ribbonImageIndex === 1)
                        ? " is-label"
                        : ""
                    }`
                  : ""
              }`}>
                <img
                  src={
                    product.id === "mehl" && flourImageIndex === 1
                      ? "/inhaltsangaben-dinkelvollkornmehl.png"
                      : product.id === "loeckchen-500" && curlsImageIndex === 1
                        ? "/inhaltsangaben-dinkelvollkornpasta.png"
                        : product.id === "band-500" && ribbonImageIndex === 1
                          ? "/inhaltsangaben-dinkelvollkornpasta.png"
                      : product.image
                  }
                  alt={
                    product.id === "mehl" && flourImageIndex === 1
                      ? "Inhalts- und Nährwertangaben des Dinkelvollkornmehls"
                      : (product.id === "loeckchen-500" && curlsImageIndex === 1) ||
                          (product.id === "band-500" && ribbonImageIndex === 1)
                        ? "Inhalts- und Nährwertangaben der Dinkelvollkornnudeln"
                      : `${product.name}, ${product.detail}`
                  }
                />
                <span>0{index + 1}</span>
                {product.id === "mehl" && (
                  <>
                    <button
                      type="button"
                      className="product-gallery-arrow product-gallery-arrow-left"
                      onClick={() => setFlourImageIndex((current) => (current === 0 ? 1 : 0))}
                      aria-label="Vorheriges Mehlfoto anzeigen"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="product-gallery-arrow product-gallery-arrow-right"
                      onClick={() => setFlourImageIndex((current) => (current === 0 ? 1 : 0))}
                      aria-label="Nächstes Mehlfoto anzeigen"
                    >
                      ›
                    </button>
                  </>
                )}
                {product.id === "loeckchen-500" && (
                  <>
                    <button
                      type="button"
                      className="product-gallery-arrow product-gallery-arrow-left"
                      onClick={() => setCurlsImageIndex((current) => (current === 0 ? 1 : 0))}
                      aria-label="Vorheriges Bild der Nudeln Löckchen anzeigen"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="product-gallery-arrow product-gallery-arrow-right"
                      onClick={() => setCurlsImageIndex((current) => (current === 0 ? 1 : 0))}
                      aria-label="Nächstes Bild der Nudeln Löckchen anzeigen"
                    >
                      ›
                    </button>
                  </>
                )}
                {product.id === "band-500" && (
                  <>
                    <button
                      type="button"
                      className="product-gallery-arrow product-gallery-arrow-left"
                      onClick={() => setRibbonImageIndex((current) => (current === 0 ? 1 : 0))}
                      aria-label="Vorheriges Bild der Nudeln Band gewellt anzeigen"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="product-gallery-arrow product-gallery-arrow-right"
                      onClick={() => setRibbonImageIndex((current) => (current === 0 ? 1 : 0))}
                      aria-label="Nächstes Bild der Nudeln Band gewellt anzeigen"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              <div className="product-title">
                <div>
                  <h3>
                    {product.id === "mehl"
                      ? product.name
                      : `${product.name} – ${product.detail.split(" · ")[0]}`}
                  </h3>
                  <p className="product-size-prices">
                    {product.id === "mehl" ? (
                      <span>1 kg – 2,10 €</span>
                    ) : (
                      <>
                      <span>250 g – 2,50 €</span>
                      <span>500 g – 3,10 €</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="products-order-cta">
          <a href="#bestellen">
            Jetzt anfragen <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="values section">
        <div className="values-heading">
          <p className="eyebrow">03 · Was uns wichtig ist</p>
          <h2>Guter Geschmack beginnt auf gesundem Boden</h2>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <ValueIcon type="tractor" />
            <h3>Aus eigenem Anbau</h3>
            <p>
              Wir begleiten unseren Dinkel von der Aussaat bis zur Ernte selbst.
              So kennen wir seine Herkunft genau und übernehmen Verantwortung
              für die Qualität unseres Rohstoffs.
            </p>
          </article>
          <article>
            <span>02</span>
            <ValueIcon type="sprout" />
            <h3>Naturnah und bodenschonend</h3>
            <p>
              Unser Dinkel wächst ohne Kunstdünger, Pestizide und Glyphosat.
              Eine schonende Bodenbearbeitung und eine durchdachte Fruchtfolge
              helfen uns, die Fruchtbarkeit unserer Böden langfristig zu
              erhalten.
            </p>
          </article>
          <article>
            <span>03</span>
            <ValueIcon type="process" />
            <h3>Sorgfältig verarbeitet</h3>
            <p>
              Durch eine schonende Verarbeitung bleiben Geschmack und wertvolle
              Inhaltsstoffe bestmöglich erhalten. Unser Vollkornmehl wird
              besonders fein gemahlen, unsere Nudeln überzeugen mit kurzer
              Kochzeit und kräftigem, eigenständigem Geschmack.
            </p>
          </article>
          <article>
            <span>04</span>
            <ValueIcon type="location" />
            <h3>Regional und persönlich</h3>
            <p>
              Unser Dinkel wächst in Niedererbach und der Region. Als kleiner
              Familienbetrieb setzen wir auf kurze Wege, regionale
              Verkaufsstellen und persönlichen Kontakt bei Beratung,
              Bestellung und Abholung.
            </p>
          </article>
        </div>
      </section>

      <section className="partners section" id="partner">
        <div className="partner-heading">
          <p className="eyebrow">04 · Partner & Verkaufsstellen</p>
          <h2>Regional verbunden</h2>
          <p className="partner-heading-copy">
            Unsere Produkte gibt es direkt bei uns und bei ausgewählten
            Partnern. Das Sortiment vor Ort kann variieren.
          </p>
        </div>
        <div className="network">
          <span>Partner von</span>
          <a
            href="https://naturgenuss-partner.de/"
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
          {stockists
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name, "de"))
            .map((partner) => (
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
        </div>
      </section>

      <section className="order section" id="bestellen">
        <div className="order-heading">
          <p className="eyebrow">05 · Abholung anfragen</p>
          <h2>Unverbindlich reservieren</h2>
          <p className="order-heading-copy">
            Stellen Sie Ihre gewünschte Abholung zusammen. Wir prüfen den
            Bestand und melden uns persönlich mit einem möglichen Abholtermin.
          </p>
        </div>
        <div className="order-grid">
        <div className="order-intro">
          <div className="pickup">
            <span>Abholung*</span>
            <strong>Kastanienhof</strong>
            <p>56412 Niedererbach · Termin nach Vereinbarung</p>
            <small>
              * Auch eine postalische Bestellung ist möglich. Die Versandkosten
              müssen selbst übernommen werden.
            </small>
          </div>
          <div className="bulk-order-box">
            <p>
              <strong>Sie benötigen eine größere Menge?</strong>
              Größere Bestellmengen für Feiern, Gruppen, Gastronomie oder Handel
              sind auf Anfrage erhältlich. Schreiben Sie die gewünschte Menge in
              das Nachrichtenfeld oder kontaktieren Sie uns direkt.
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
        <div className="order-form-column">
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
                  <small>Kastanienhof, 56412 Niedererbach · Termin nach Vereinbarung</small>
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
                  <small>Die voraussichtlichen Versandkosten werden anhand der ausgewählten Menge berechnet.</small>
                </span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>3. Kontaktdaten und Terminwunsch</legend>
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
              <label className="full">
                Nachricht <span>(optional)</span>
                <textarea name="message" rows={3} />
              </label>
            </div>
          </fieldset>

          <div className="order-summary" aria-live="polite">
            {deliveryMethod === "shipping" && (
              <div className="order-goods-value">
                <strong className="summary-label">Warenwert</strong>
                <strong>{euro.format(productTotal)}</strong>
              </div>
            )}
            {deliveryMethod === "shipping" && productTotal > 0 && (
              <div className="shipping-calculation">
                <span>Produktgewicht</span>
                <strong>{totalWeight.toLocaleString("de-DE")} kg</strong>
                <span>Voraussichtliche Versandkosten (Inlandversand)</span>
                <strong>{euro.format(shipping.cost)}</strong>
                <small>{shipping.packages.join(" + ")}</small>
                <a
                  href="https://www.dhl.de/de/privatkunden/pakete-versenden/deutschlandweit-versenden/preise-national.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Preise und Paketmaße für den Inlandsversand gemäß aktueller DHL-Auskunft ↗
                </a>
              </div>
            )}
            <div>
              <span>
                {deliveryMethod === "shipping"
                  ? "Voraussichtlicher Gesamtbetrag"
                  : "Voraussichtlicher Warenwert bei Abholung"}
              </span>
              <strong>{euro.format(orderTotal)}</strong>
            </div>
          </div>
          <div className="buyer-protection">
            <strong>
              {deliveryMethod === "pickup"
                ? "Unverbindliche Abholanfrage"
                : "Unverbindliche Versand­anfrage"}
            </strong>
            {deliveryMethod === "pickup" ? (
              <p>
                Ihre Nachricht stellt noch keine verbindliche Bestellung dar.
                Wir bestätigen Ihnen Verfügbarkeit und einen möglichen
                Abholtermin persönlich. Der Kaufvertrag kommt erst bei der
                Abholung vor Ort zustande. Die Zahlung (Bar oder PayPal) erfolgt
                vor Ort bei Abholung.
              </p>
            ) : (
              <p>
                Ihre Nachricht stellt noch keine verbindliche Bestellung dar.
                Wir bestätigen Ihnen Verfügbarkeit und den Gesamtpreis
                einschließlich Versandkosten persönlich. Der Kaufvertrag kommt
                mit der Übergabe des Pakets an DHL zustande.
              </p>
            )}
          </div>
          <label className="consent">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(event) => setPrivacyAccepted(event.target.checked)}
              required
            />
            <span>
              Ich habe verstanden, dass dies nur eine unverbindliche
              Reservierungsanfrage ist. Ich stimme der Verarbeitung meiner
              Angaben zur Bearbeitung der Anfrage zu und bestätige, dass die
              Zahlung bei Zustandekommen des Kaufvertrags vor Ort wahlweise
              per PayPal oder bar erfolgt.
            </span>
          </label>
          <fieldset className="order-method">
            <legend>Wie möchten Sie die Abholung anfragen?</legend>
            <label>
              <input
                type="radio"
                name="orderMethod"
                value="whatsapp"
                checked={orderMethod === "whatsapp"}
                onChange={() => setOrderMethod("whatsapp")}
              />
              <span>Per WhatsApp anfragen</span>
            </label>
            <label>
              <input
                type="radio"
                name="orderMethod"
                value="email"
                checked={orderMethod === "email"}
                onChange={() => setOrderMethod("email")}
              />
              <span>Per E-Mail anfragen</span>
            </label>
          </fieldset>
          <p className="form-small">
            Beim Klick wird eine vorausgefüllte E-Mail oder WhatsApp-Nachricht
            geöffnet. Erst mit dem Absenden geht Ihre unverbindliche Anfrage
            bei uns ein.
          </p>
          <p className="form-small form-contract-note" aria-live="polite">
            {deliveryMethod === "pickup"
              ? "Unverbindlich reservieren. Der Kaufvertrag kommt erst bei Übergabe und Bezahlung vor Ort zustande."
              : "Unverbindlich anfragen. Wir bestätigen Verfügbarkeit und Gesamtpreis einschließlich Versandkosten persönlich. Der Kaufvertrag kommt mit der Übergabe des Pakets an DHL zustande."}
          </p>
          <button
            className={`submit-order ${orderMethod === "whatsapp" ? "whatsapp-order" : ""}`}
            type="submit"
            disabled={!privacyAccepted || productTotal === 0}
          >
            {orderMethod === "whatsapp"
              ? "Per WhatsApp unverbindlich anfragen"
              : "Per E-Mail unverbindlich anfragen"}
            <span aria-hidden="true">→</span>
          </button>
          {notice && <p className="form-notice">{notice}</p>}
        </form>
        </div>
        </div>
      </section>

      <section className="contact-overview section" id="kontakt">
        <div className="contact-heading">
          <p className="eyebrow">06 · Kontakt & Anfahrt</p>
          <h2>Hier finden Sie uns</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-map">
            {mapsAllowed ? (
              <iframe
                title="Karte zum Kastanienhof in Niedererbach"
                src="https://www.google.com/maps?q=Kastanienhof%2C%2056412%20Niedererbach&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="map-consent-placeholder">
                <strong>Google Maps ist deaktiviert</strong>
                <p>Die Karte wird erst nach Ihrer Zustimmung geladen.</p>
                <button type="button" onClick={() => saveConsent({ externalMedia: true })}>
                  Google Maps laden
                </button>
              </div>
            )}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kastanienhof%2C%2056412%20Niedererbach"
              target="_blank"
              rel="noreferrer"
            >
              Route zum Kastanienhof planen ↗
            </a>
          </div>
          <div className="contact-details">
            <img src="/logo-landmarkt.png" alt="Landmarkt Czakert" />
            <div>
              <p className="eyebrow">Standort & Kontakt</p>
              <h3>Kastanienhof</h3>
              <address>
                56412 Niedererbach
                <br />
                Telefon: <a href="tel:+4964854672">06485 / 4672</a>
                <br />
                E-Mail: <a href="mailto:landmarktczakert@gmail.com">landmarktczakert@gmail.com</a>
              </address>
              <p><strong>Abholung:</strong> Termin nach Vereinbarung</p>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram">
        <img src="/feld-team.jpeg" alt="Zwei Generationen der Familie Czakert im Dinkelfeld" />
        <div>
          <p className="eyebrow">Einblicke vom Feld</p>
          <h2>Folgen Sie uns</h2>
          <div className="instagram-links">
            <a
              href="https://www.instagram.com/landmarkt.czakert/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="instagram-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.7" r="1" className="instagram-dot" />
              </svg>
              @landmarkt.czakert <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert"
              target="_blank"
              rel="noreferrer"
            >
              <span className="google-icon" aria-hidden="true">G</span>
              Schreibe eine Rezension <span aria-hidden="true">↗</span>
            </a>
          </div>
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
          <a href="tel:+4964854672">06485 / 4672</a>
          <span>Kastanienhof · 56412 Niedererbach</span>
        </div>
        <div>
          <strong>Schnellzugriff</strong>
          <a href="#geschichte">Geschichte</a>
          <a href="#produkte">Produkte</a>
          <a href="#partner">Partner</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <div className="footer-social">
          <strong>Social</strong>
          <a
            href="https://www.instagram.com/landmarkt.czakert/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-review-link"
            href="https://www.google.com/maps/search/?api=1&query=Landmarkt+Czakert"
            target="_blank"
            rel="noreferrer"
          >
            <span>Google Rezension</span>
            <span className="review-stars" aria-label="Fünf Sterne">★★★★★</span>
          </a>
          <a className="back-to-top" href="#start">Nach oben ↑</a>
        </div>
        <nav className="footer-legal" aria-label="Rechtliche Informationen">
          <a href="/impressum">Impressum</a>
          <span aria-hidden="true">·</span>
          <a href="/datenschutz">Datenschutz</a>
        </nav>
      </footer>
    </main>
  );
}
