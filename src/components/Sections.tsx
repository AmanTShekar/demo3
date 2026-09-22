"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { STAYS, TESTIMONIALS, SITE, type Stay } from "@/lib/site";
import { StayGrid, Stars } from "./StayCard";
import { useBooking } from "./BookingContext";
import Reveal from "./Reveal";
import {
  IconCloudMist,
  IconMountain,
  IconFlame,
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

export function Experience() {
  const items = [
    { t: "Mist mornings", d: "Clouds drift through your deck at 7am. Chai tastes better above them.", icon: <IconCloudMist className="h-5 w-5" /> },
    { t: "Snow peaks", d: "Clear-day views of the snowline from every balcony and tent flap.", icon: <IconMountain className="h-5 w-5" /> },
    { t: "Riverside bonfires", d: "Nightly bonfire, live grill and music by the Parvati river.", icon: <IconFlame className="h-5 w-5" /> },
    { t: "Curated treks", d: "Chhalal, Tosh, Kheerganga and secret waterfall walks with guides.", icon: <IconCompass className="h-5 w-5" /> },
  ];
  return (
    <section id="experience" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="eyebrow">The Kalga experience</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-[42px] sm:leading-[1.1]">
            Mountainside views, mist in the pines, snow when you&apos;re lucky.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="h-full rounded-[20px] border border-line bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:card-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine text-white">
                  {it.icon}
                </div>
                <h3 className="mt-4 text-[16px] font-bold tracking-tight">{it.t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            ["https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop", "Snowline mornings"],
            ["https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=800&auto=format&fit=crop", "Bonfire nights"],
            ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", "Parvati riverside"],
          ].map(([src, label], i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="relative h-56 overflow-hidden rounded-[20px] img-zoom">
                <Image src={src} alt={label} fill className="object-cover" loading="lazy" />
                <div className="absolute bottom-3 left-3 rounded-full bg-paper px-4 py-2 text-[12px] font-bold text-ink">
                  {label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
        <Snowfall count={14} />
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

export function Faq() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "How does a WhatsApp enquiry work?", a: "Tap Send a stay enquiry, fill in your name, dates and guests, then send the pre-filled message on WhatsApp. We reply with availability and current pricing. Sending an enquiry does not confirm a booking, and no advance payment is required to enquire." },
    { q: "What room types are available?", a: "We have two private room types: Room with Balcony at ₹1,300 per night (2 rooms) and Room without Balcony at ₹1,000 per night (3 rooms). We also have a dorm at ₹300 per person per night." },
    { q: "What is included?", a: "Every option includes an attached washroom, geyser hot water and free Wi-Fi." },
    { q: "What is the cancellation policy?", a: "Free cancellation up to 5 days before check-in. 50% refund 2–5 days before. Date reschedule once is free up to 3 days before, subject to availability." },
    { q: "How do I reach Apple Cottage?", a: "Apple Cottage is in Kalga, Parvati Valley. Bhuntar is around 31 km away (about 1.5 hours), and pickup is available. From Kasol stand, most stays are a 5–10 minute walk away." },
  ];
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="eyebrow block text-center">Good to know</p>
          <h2 className="font-display mt-3 text-center text-3xl font-semibold tracking-tight sm:text-[42px]">Questions, answered</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className={`overflow-hidden rounded-[18px] border bg-paper transition-colors duration-300 ${open === i ? "border-ink" : "border-line"}`}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-bold tracking-tight"
              >
                {f.q}
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${open === i ? "bg-ink text-white" : "bg-cream"}`}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && <p className="px-6 pb-6 text-[14px] leading-relaxed text-ink/65">{f.a}</p>}
            </div>
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
