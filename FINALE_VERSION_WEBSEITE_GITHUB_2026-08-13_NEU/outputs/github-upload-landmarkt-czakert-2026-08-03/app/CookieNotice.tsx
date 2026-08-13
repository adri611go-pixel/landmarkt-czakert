"use client";

import { useEffect, useState } from "react";

export const CONSENT_STORAGE_KEY = "landmarkt-cookie-consent";
export const CONSENT_EVENT = "landmarkt-consent-change";

export type ConsentChoice = { externalMedia: boolean };

export function saveConsent(choice: ConsentChoice) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(CONSENT_STORAGE_KEY) === null);
  }, []);

  function choose(externalMedia: boolean) {
    saveConsent({ externalMedia });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-layer" role="presentation">
      <section
        className="cookie-notice"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <p className="eyebrow">Ihre Privatsphäre</p>
        <h2 id="cookie-title">Cookies & externe Inhalte</h2>
        <p id="cookie-description">
          Wir verwenden technisch notwendige Speicherfunktionen, damit Ihre
          Auswahl gespeichert wird. Externe Inhalte wie Google Maps laden wir
          erst nach Ihrer Zustimmung. Dabei können Daten an Google übertragen
          werden.
        </p>
        <div className="cookie-actions">
          <button type="button" className="cookie-secondary" onClick={() => choose(false)}>
            Nur notwendige
          </button>
          <button type="button" className="cookie-primary" onClick={() => choose(true)}>
            Alle akzeptieren
          </button>
        </div>
        <a className="cookie-more" href="/verbraucherinformationen#datenschutz">
          Hinweise zum Datenschutz
        </a>
      </section>
    </div>
  );
}
