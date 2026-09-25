"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { useBooking } from "./BookingContext";
import { IconStar, IconArrowDown, IconFlame } from "./Icons";
import { MountainSilhouette, Snowfall, MistBand, Snowman } from "./Scene";

export default function Hero() {
  const { openBooking } = useBooking();
  const [y, setY] = useState(0);
  const [fillingFastMonth, setFillingFastMonth] = useState("");

  useEffect(() => {
    const fn = () => setY(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setFillingFastMonth(nextMonth.toLocaleString("en-IN", { month: "short" }));
  }, []);

  return (
    <section className="relative overflow-hidden bg-pinedeep">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop"
          alt="Snow mountains above Kalga, Parvati Valley"
          fill
          priority
          className="object-cover will-change-transform"
          style={{ transform: `translateY(${y * 0.14}px) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>

      <MistBand />

      <div className="relative z-[2] mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pt-28 pb-10 sm:px-6 sm:pt-36 sm:pb-16">
        <div className="max-w-4xl">
          <div className="hero-rise inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.18em] text-ink uppercase" style={{ animationDelay: "0ms" }}>
            <span className="pulse-soft h-2 w-2 rounded-full bg-leaf" />
            Open now{fillingFastMonth ? ` · ${fillingFastMonth} dates filling fast` : ""}
          </div>

          <h1
            className="font-display hero-rise mt-4 sm:mt-6 text-[34px] leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            Wake up in
            <br />
            Apple Cottage, Kalga.
          </h1>

          <p
            className="hero-rise mt-4 sm:mt-5 max-w-xl text-[14.5px] sm:text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "180ms" }}
          >
            {SITE.tagline}. Private rooms and a friendly dorm with attached washrooms, geyser hot
            water and free Wi-Fi. From ₹300 per person, confirmed on WhatsApp in minutes.
          </p>

          <div className="hero-rise mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" style={{ animationDelay: "270ms" }}>
            <button
              onClick={() => openBooking(null)}
              className="flex items-center justify-center gap-2 rounded-full bg-brass px-7 py-3.5 sm:px-8 sm:py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-brassdeep hover:-translate-y-0.5"
            >
              <IconFlame className="h-4.5 w-4.5" />
              Check availability
            </button>
            <a
              href="#stays"
              className="flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 sm:px-8 sm:py-4 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Explore rooms
            </a>
          </div>

          <div
            className="hero-rise mt-6 sm:mt-7 flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2 text-[12px] sm:text-[13px] font-semibold text-white/75"
            style={{ animationDelay: "360ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <IconStar className="h-3.5 w-3.5 text-brass" /> 4.8 · 1,280+ reviews
            </span>
            <span>Free reschedule once</span>
            <span>Pickup from Bhuntar available</span>
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

      {/* 4 Features Bar with Mountain Silhouette & Snowman anchored to its dividing line */}
      <div className="relative z-[2] bg-pine/95 border-t border-white/10 backdrop-blur-sm">
        {/* Mountain Silhouette and Snowman positioned strictly above the dividing line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-full z-[1]">
          <MountainSilhouette className="pointer-events-none block w-full" />
          <Snowman className="pointer-events-none absolute right-3 sm:right-8 lg:right-16 bottom-0 z-[3]" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4 sm:divide-y-0">
          {[
            ["3", "Stay options"],
            ["5", "Private rooms"],
            ["₹300", "Dorm per person"],
            ["2 min", "WhatsApp enquiry"],
          ].map(([n, l], idx) => (
            <div
              key={l}
              className={`px-3 py-3 sm:px-4 sm:py-5 text-center ${
                idx >= 2 ? "border-t border-white/10 sm:border-t-0" : ""
              }`}
            >
              <div className="font-display text-[22px] sm:text-[26px] font-semibold text-white">{n}</div>
              <div className="mt-0.5 text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-white/60 uppercase">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
