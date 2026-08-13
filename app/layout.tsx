import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const origin = "https://landmarkt-czakert.de";
  const description =
    "Dinkelvollkornmehl und Dinkelvollkornnudeln aus naturnahem Anbau in Niedererbach – regional, persönlich und direkt vom Familienbetrieb Landmarkt Czakert.";

  return {
    title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
    description,
    icons: { icon: "/logo-landmarkt.png" },
    openGraph: {
      title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
      description,
      url: origin,
      locale: "de_DE",
      type: "website",
      images: [{ url: new URL("/og.png", origin), width: 1536, height: 910 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
      description,
      images: [new URL("/og.png", origin)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
