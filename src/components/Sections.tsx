"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { STAYS, TESTIMONIALS, SITE, type Stay } from "@/lib/site";
import { StayGrid, Stars } from "./StayCard";
import { useBooking } from "./BookingContext";
import Reveal from "./Reveal";
import {
  IconCompass,
  IconMapPin,
  IconCheck,
  IconArrowRight,
  IconPhone,
  IconDiamond,
} from "./Icons";
import { MountainSilhouette, Snowfall } from "./Scene";

function Marquee() {
  const items = ["Mist mornings", "Snow peaks", "Riverside bonfires", "Parvati Valley", "Kheerganga treks", "Stargazing", "Pine forests", "Himalayan stays"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-pinedeep py-4">
      <div className="marquee-track flex w-max items-center gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[12px] font-extrabold tracking-[0.22em] text-white/60 uppercase whitespace-nowrap">
            {t}
            <IconDiamond className="h-2 w-2 text-brass" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function StaysPreview({ onView }: { onView: (s: Stay) => void }) {
  return (
    <section id="stays" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Handpicked stays</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-[42px]">
                Stay your way at Apple Cottage
              </h2>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink/60">
                Choose a balcony room, a quiet room without a balcony, or an easy-going dorm. All
                three options are in Kalga and can be confirmed directly on WhatsApp.
              </p>
            </div>
            <Link
              href="/stays"
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-pine"
            >
              View all listings <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10">
          <StayGrid stays={STAYS.slice(0, 6)} onView={onView} />
        </div>
      </div>
    </section>
  );
}

export function StaysFull({ onView }: { onView: (s: Stay) => void }) {
  const [type, setType] = useState("All");
  const [max, setMax] = useState(6000);
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let list = STAYS.filter((s) => (type === "All" ? true : s.type === type));
    list = list.filter((s) => s.price <= max);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [type, max, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6">
      <p className="eyebrow">Parvati Valley</p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Rooms & dorms in Kalga</h1>
      <p className="mt-3 text-[14px] text-ink/60">
        {filtered.length} options · attached washrooms · geyser hot water · free Wi-Fi
      </p>

      <div className="mt-8 flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-4 sm:p-5 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2">
          {["All", "Room", "Dorm"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full px-4 py-2.5 text-[13px] font-bold transition-colors duration-300 ${
                type === t ? "bg-ink text-white" : "bg-cream text-ink/70 hover:bg-line"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-1 flex-wrap items-center gap-4 lg:justify-end">
          <label className="flex items-center gap-3 text-[13px] font-bold text-ink/70">
            Up to ₹{max.toLocaleString("en-IN")}
            <input
              type="range" min={1000} max={6000} step={250} value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="w-32 accent-[#b67a2d]"
            />
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-line bg-paper px-4 py-2.5 text-[13px] font-bold outline-none"
          >
            <option value="popular">Most popular</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>

      <div className="mt-10">
        <StayGrid stays={filtered} onView={onView} />
      </div>
    </div>
  );
}

export function WhyBook() {
  const { openBooking } = useBooking();
  return (
    <>
      <section className="relative overflow-hidden bg-pine">
        <Snowfall count={14} className="pointer-events-none absolute inset-0 overflow-hidden" />
        <div className="relative z-[1] mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow !text-white/60">Why book direct</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[42px] sm:leading-[1.1]">
              Why book with {SITE.name}?
            </h2>
            <ul className="mt-7 space-y-4">
              {[
                "Real photos, real locations — no fake listings",
                "Best-price promise — skip aggregator fees",
                "Local team in Kalga for food, fire & treks",
                "Flexible dates — reschedule once for free",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] font-medium text-white/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass text-white">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openBooking(null)}
              className="mt-8 rounded-full bg-brass px-8 py-4 text-[15px] font-bold text-white transition-transform duration-300 hover:bg-brassdeep hover:-translate-y-0.5"
            >
              Enquire on WhatsApp
            </button>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-80 overflow-hidden rounded-[24px] sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                alt="Starry night over the Himalayas"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-paper px-5 py-4 card-shadow">
                <div className="text-[13px] font-bold text-ink">Tonight in Kalga: clear skies</div>
                <div className="text-[12px] font-medium text-moss">Perfect for bonfire + stargazing</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Marquee />
    </>
  );
}

export function FinalCTA() {
  const { openBooking } = useBooking();
  return (
    <section className="relative overflow-hidden bg-pinedeep">
      <MountainSilhouette />
      <div className="relative z-[1] mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <Reveal>
          <p className="eyebrow !text-white/60">Parvati Valley is calling</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
            Your mountain stay in Kalga is one message away.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-relaxed text-white/70">
            Tell us your dates and group — we confirm availability on WhatsApp within minutes.
            No advance to enquire, pay after confirmation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => openBooking(null)}
              className="rounded-full bg-brass px-9 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-brassdeep hover:-translate-y-0.5"
            >
              Send a stay enquiry
            </button>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.directionsMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-9 py-4 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Chat with us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="eyebrow">Guest stories</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-[42px]">Loved by 12,000+ travellers</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-[20px] border border-line bg-cream p-7">
                <Stars n={t.rating} />
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/75">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <div className="text-[14px] font-bold">{t.name} <span className="font-medium text-moss">· {t.from}</span></div>
                  <div className="text-[12px] font-medium text-moss">Stayed at {t.stay}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">Find us</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-[42px] sm:leading-[1.1]">In the heart of Parvati Valley</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink/60">Kalga, Parvati Valley, Himachal Pradesh</p>
          <div className="mt-6 space-y-3 text-[14px]">
            <div className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
              <IconMapPin className="h-4.5 w-4.5 shrink-0 text-pine" />
              <span><b>Bhuntar</b> <span className="text-ink/60">· 31 km · 1.5 hrs · pickup available</span></span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
              <IconMapPin className="h-4.5 w-4.5 shrink-0 text-pine" />
              <span><b>Kasol stand</b> <span className="text-ink/60">· 5–10 min walk to most stays</span></span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
              <IconCompass className="h-4.5 w-4.5 shrink-0 text-pine" />
              <span><b>Treks</b> <span className="text-ink/60">· Chhalal 30 min · Tosh 1 hr · Kheerganga day trip</span></span>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I need directions to " + SITE.name)}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-pine px-7 py-3.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-pinedeep">
              Get directions
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-[14px] font-bold transition-colors duration-300 hover:bg-ink hover:text-white">
              <IconPhone className="h-4 w-4" /> Call us
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[24px] border border-line">
            <iframe
              title="Kalga map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.30%2C32.00%2C77.35%2C32.03&layer=mapnik&marker=32.015%2C77.325"
              className="h-80 w-full sm:h-[480px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
