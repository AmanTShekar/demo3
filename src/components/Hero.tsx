"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { useBooking } from "./BookingContext";
import { IconStar, IconArrowDown, IconCalendar, IconUsers } from "./Icons";

export default function Hero() {
  const { openBooking } = useBooking();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [y, setY] = useState(0);

  useEffect(() => {
    const fn = () => setY(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section className="relative overflow-hidden bg-pinedeep">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop"
          alt="Snow mountains above Kasol, Parvati Valley"
          fill
          priority
          className="object-cover will-change-transform"
          style={{ transform: `translateY(${y * 0.14}px) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pt-32 pb-10 sm:px-6 sm:pt-36">
        <div className="max-w-4xl">
          <div className="hero-rise inline-flex items-center gap-2.5 rounded-full bg-paper px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-ink uppercase" style={{ animationDelay: "0ms" }}>
            <span className="h-2 w-2 rounded-full bg-leaf" />
            Kasol · Mist · Snow · Riverside
          </div>

          <h1
            className="font-display hero-rise mt-6 text-[42px] leading-[1.02] font-semibold tracking-tight text-white sm:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            Wake up above
            <br />
            the clouds in Kasol.
          </h1>

          <p
            className="hero-rise mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            {SITE.tagline}. Six handpicked tents, cottages and glass rooms —
            bonfires, misty mornings and snow peaks. From ₹999, booked on WhatsApp in 2 minutes.
          </p>

          <div className="hero-rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "270ms" }}>
            <button
              onClick={() => openBooking(null)}
              className="rounded-full bg-brass px-8 py-4 text-[15px] font-bold text-white transition-transform duration-300 hover:bg-brassdeep hover:-translate-y-0.5"
            >
              Check availability
            </button>
            <a
              href="#stays"
              className="rounded-full border border-white/40 px-8 py-4 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Explore stays
            </a>
          </div>

          <div
            className="hero-rise mt-7 flex flex-wrap items-center gap-x-7 gap-y-2 text-[13px] font-semibold text-white/75"
            style={{ animationDelay: "360ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <IconStar className="h-3.5 w-3.5 text-brass" /> 4.8 · 1,280+ reviews
            </span>
            <span>Free reschedule once</span>
            <span>Bonfire + meals included</span>
          </div>
        </div>

        <div className="hero-rise mt-12 rounded-[20px] bg-paper p-3 card-shadow-lg sm:p-3.5" style={{ animationDelay: "450ms" }}>
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-[1fr_1fr_1fr_auto]">
            <label className="rounded-2xl border border-line bg-cream px-4 py-3">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.18em] text-moss uppercase">
                <IconCalendar className="h-3.5 w-3.5" /> Check-in
              </span>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-[14px] font-bold text-ink outline-none"
              />
            </label>
            <label className="rounded-2xl border border-line bg-cream px-4 py-3">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.18em] text-moss uppercase">
                <IconCalendar className="h-3.5 w-3.5" /> Check-out
              </span>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-[14px] font-bold text-ink outline-none"
              />
            </label>
            <label className="rounded-2xl border border-line bg-cream px-4 py-3">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.18em] text-moss uppercase">
                <IconUsers className="h-3.5 w-3.5" /> Guests
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-[14px] font-bold text-ink outline-none"
              >
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="6">5+ guests</option>
              </select>
            </label>
            <button
              onClick={() => openBooking(null)}
              className="col-span-2 rounded-2xl bg-pine px-10 py-4 text-[15px] font-bold text-white hover:bg-pinedeep lg:col-span-1"
            >
              Search stays
            </button>
          </div>
        </div>

        <a
          href="#stays"
          className="scroll-cue mt-8 hidden w-fit items-center gap-2.5 text-[11px] font-extrabold tracking-[0.24em] text-white/60 uppercase sm:flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
            <IconArrowDown className="h-4 w-4" />
          </span>
          Scroll to stays
        </a>
      </div>

      <div className="relative bg-pine">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:px-6 lg:grid-cols-4">
          {[
            ["6", "Curated stays"],
            ["12k+", "Happy guests"],
            ["4.8 / 5", "Average rating"],
            ["2 min", "WhatsApp booking"],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-5 text-center">
              <div className="font-display text-[26px] font-semibold text-white">{n}</div>
              <div className="mt-0.5 text-[10.5px] font-bold tracking-[0.2em] text-white/60 uppercase">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
