import type { Metadata } from "next";
import "./globals.css";
import CookieNotice from "./CookieNotice";

const description =
  "Dinkelvollkornmehl und Dinkelvollkornnudeln aus naturnahem Anbau in Niedererbach – regional, persönlich und direkt vom Familienbetrieb Landmarkt Czakert.";

export const metadata: Metadata = {
  metadataBase: new URL("https://landmarkt-czakert.de"),
  title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
  description,
  icons: { icon: "/logo-landmarkt.png" },
  openGraph: {
    title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
    description,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 910 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
