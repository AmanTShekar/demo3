import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE } from "@/lib/site";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — Tents, Cottages & Mountain-View Stays in Kasol`,
  description:
    "Handpicked tents, cottages, cabins and glass rooms in Kasol & Parvati Valley. Mist mornings, snow peaks, riverside bonfires. Book in 2 minutes on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BookingModal />
          <FloatingWhatsApp />
        </BookingProvider>
      </body>
    </html>
  );
}
