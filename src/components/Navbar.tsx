"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { useBooking } from "./BookingContext";
import WhatsAppIcon from "./WhatsAppIcon";
import { IconClose, IconMenu } from "./Icons";

export default function Navbar() {
  const { openBooking } = useBooking();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "bg-paper/95 backdrop-blur-md shadow-[0_1px_0_#e7e0d2]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/apple_cottage.PNG" alt={SITE.name} className="h-10 w-10 rounded-2xl object-cover" />
          <span className="leading-tight">
            <span
              className={`font-display block text-[18px] font-semibold tracking-tight ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`block text-[10px] font-bold tracking-[0.2em] uppercase ${
                solid ? "text-moss" : "text-white/70"
              }`}
            >
              {`${SITE.location} • Parvati Valley`}
            </span>
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-8 text-[13.5px] font-semibold tracking-wide md:flex ${
            solid ? "text-ink/70" : "text-white/85"
          }`}
        >
          <Link href="/" className="hover:opacity-100 opacity-90 hover:underline underline-offset-8">HOME</Link>
          <Link href="/stays" className="hover:opacity-100 opacity-90 hover:underline underline-offset-8">ALL LISTINGS</Link>
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I want to book a stay in Kasol.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              solid
                ? "bg-[#25D366] text-white hover:brightness-95"
                : "bg-[#25D366] text-white hover:brightness-110"
            }`}
          >
            <WhatsAppIcon className="h-[22px] w-[22px]" />
          </a>
          <button
            onClick={() => openBooking(null)}
            className="rounded-full bg-brass px-6 py-2.5 text-[13px] font-bold text-white hover:bg-brassdeep"
          >
            Book now
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className={`flex h-10 w-10 items-center justify-center rounded-xl border md:hidden ${
            solid ? "border-line text-ink" : "border-white/30 text-white"
          }`}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 py-5 md:hidden fade-in">
          <div className="flex flex-col gap-4 text-[15px] font-semibold text-ink/80">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/stays" onClick={() => setOpen(false)}>All listings</Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I want to book a stay in Kasol.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => { setOpen(false); openBooking(null); }}
              className="mt-1 rounded-full bg-brass px-5 py-3.5 text-sm font-bold text-white"
            >
              Book now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
