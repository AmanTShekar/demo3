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
  title: `${SITE.name} — Cozy Mountain Stays in Kalga, Parvati Valley`,
  description:
    "Apple Cottage Homestay & Cafe Kalga offers cozy cottages and mountain stays in Kalga, Parvati Valley with easy access to Kasol, treks and valley views. Book in 2 minutes on WhatsApp.",
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
