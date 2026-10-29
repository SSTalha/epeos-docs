import type { Metadata, Viewport } from "next";
import { connection } from "next/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Epeos — The foundation for a connected enterprise",
    template: "%s | Epeos",
  },
  description:
    "Connect fragmented systems, model your business, and give your teams and AI a governed foundation to work from. Meet Epeos, your enterprise data foundry.",
  applicationName: "Epeos",
  openGraph: {
    title: "Epeos — From complexity to clarity",
    description: "Your data. Connected to your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epeos — From complexity to clarity",
    description: "A governed foundation for your enterprise data.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f8f9f6" };

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // A fresh render allows Next.js to apply the per-request CSP nonce to its scripts.
  await connection();
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
