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
    "Apple Cottage Homestay & Cafe in Kalga, Parvati Valley offers private rooms and dorm stays with hot water, attached washrooms and free Wi-Fi. Enquire on WhatsApp.",
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
