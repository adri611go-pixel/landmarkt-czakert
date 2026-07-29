import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const description =
    "Dinkelvollkornmehl und Dinkelvollkornpasta aus naturnahem Anbau in Niedererbach – direkt vom Familienbetrieb Landmarkt Czakert.";

  return {
    title: "Landmarkt Czakert | Dinkel aus dem Westerwald",
    description,
    icons: { icon: "/landmarkt-czakert-logo.png" },
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
