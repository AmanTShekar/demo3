"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { STAYS, TESTIMONIALS, SITE, type Stay } from "@/lib/site";
import { StayGrid, Stars } from "./StayCard";
import { useBooking } from "./BookingContext";

export function Experience() {
  const items = [
    { t: "Mist mornings", d: "Clouds drift through your deck at 7am. Chai tastes better above them.", icon: "☁" },
    { t: "Snow peaks", d: "Clear-day views of the snowline from every balcony and tent flap.", icon: "▲" },
    { t: "Riverside bonfires", d: "Nightly bonfire, live grill and music by the Parvati river.", icon: "♨" },
    { t: "Curated treks", d: "Chhalal, Tosh, Kheerganga and secret waterfall walks with guides.", icon: "◈" },
  ];
  return (
    <section id="experience" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow">The Kasol experience</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-[42px] sm:leading-[1.1]">
          Mountainside views, mist in the pines, snow when you&apos;re lucky.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-[20px] border border-line bg-cream p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine text-xl text-white">
                {it.icon}
              </div>
              <h3 className="mt-4 text-[16px] font-bold tracking-tight">{it.t}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop", "Snowline mornings"],
            ["https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=800&auto=format&fit=crop", "Bonfire nights"],
            ["https://images.unsplash.com/photo-1445307806294-bff7f67ff225?q=80&w=800&auto=format&fit=crop", "Pine forest walks"],
          ].map(([src, label]) => (
            <div key={label} className="relative h-56 overflow-hidden rounded-[20px] img-zoom">
              <Image src={src} alt={label} fill className="object-cover" loading="lazy" />
              <div className="absolute bottom-3 left-3 rounded-full bg-paper px-4 py-2 text-[12px] font-bold text-ink">
                {label}
              </div>
            </div>
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
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Handpicked stays</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-[42px]">
              Tents, cottages &amp; glass rooms
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink/60">
              Every stay is visited, slept in and rated by our team. Riverside tents for the vibe,
              cottages for comfort, glass rooms for snowfall.
            </p>
          </div>
          <Link
            href="/stays"
            className="rounded-full bg-ink px-6 py-3 text-[13px] font-bold text-white hover:bg-pine"
          >
            View all listings →
          </Link>
        </div>
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
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">All stays in Kasol</h1>
      <p className="mt-3 text-[14px] text-ink/60">
        {filtered.length} stays · riverside tents to snowfall glass rooms · live availability on WhatsApp
      </p>

      <div className="mt-8 flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-4 sm:p-5 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2">
          {["All", "Tent", "Cottage", "Cabin", "Room", "Camp"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full px-4 py-2.5 text-[13px] font-bold ${
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
            <option value="low">Price: low → high</option>
            <option value="high">Price: high → low</option>
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
    <section className="bg-pine">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow !text-white/60">Why book direct</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[42px] sm:leading-[1.1]">
            Why book with {SITE.name}?
          </h2>
          <ul className="mt-7 space-y-4">
            {[
              "Real photos, real locations — no fake listings",
              "Best-price promise — skip aggregator fees",
              "Local team in Kasol for food, fire & treks",
              "Flexible dates — reschedule once for free",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[15px] font-medium text-white/90">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass text-[13px] font-bold text-white">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <button
            onClick={() => openBooking(null)}
            className="mt-8 rounded-full bg-brass px-8 py-4 text-[15px] font-bold text-white hover:bg-brassdeep"
          >
            Enquire on WhatsApp
          </button>
        </div>
        <div className="relative h-80 overflow-hidden rounded-[24px] sm:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            alt="Starry night over Himalayas"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-paper px-5 py-4 card-shadow">
            <div className="text-[13px] font-bold text-ink">Tonight in Kasol: 4°C · clear skies</div>
            <div className="text-[12px] font-medium text-moss">Perfect for bonfire + stargazing</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow">Guest stories</p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-[42px]">Loved by 12,000+ travellers</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-[20px] border border-line bg-cream p-7">
              <Stars n={t.rating} />
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/75">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <div className="text-[14px] font-bold">{t.name} <span className="font-medium text-moss">· {t.from}</span></div>
                <div className="text-[12px] font-medium text-moss">Stayed at {t.stay}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "How does WhatsApp booking work?", a: "Tap Book now, fill your name, dates and guests, then hit Confirm. WhatsApp opens with your enquiry pre-typed — just press send. We confirm availability within minutes (8am–11pm) and share payment link. No advance needed to enquire." },
    { q: "Is there snowfall in Kasol?", a: "Yes — late Dec to Feb in Kasol town, longer at higher stays like our Glass Room and A-Frame. Mist and clouds are year-round, especially mornings July–September." },
    { q: "Are tents warm in winter?", a: "Our premium tents have insulated canvas, thick blankets and room heaters. Riverside budget camp runs March–November; for Dec–Feb we recommend cottages, cabins or glass rooms with heating." },
    { q: "What is the cancellation policy?", a: "Free cancellation up to 5 days before check-in. 50% refund 2–5 days before. Date reschedule once is free up to 3 days before, subject to availability." },
    { q: "How do I reach Kasol?", a: "Nearest airport Bhuntar (31 km, 1.5 hrs). Overnight Volvo from Delhi to Bhuntar/Kasol (12 hrs). We arrange pickup from Bhuntar or Kasol stand for Glass Room and Cottage guests." },
  ];
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow text-center block">Good to know</p>
        <h2 className="font-display mt-3 text-center text-3xl font-semibold tracking-tight sm:text-[42px]">Questions, answered</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className={`overflow-hidden rounded-[18px] border bg-paper transition-colors ${open === i ? "border-ink" : "border-line"}`}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-bold tracking-tight"
              >
                {f.q}
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg ${open === i ? "bg-ink text-white" : "bg-cream"}`}>
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
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-[42px] sm:leading-[1.1]">In the heart of Parvati Valley</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink/60">{SITE.address}</p>
          <div className="mt-6 space-y-3 text-[14px]">
            <div className="flex gap-2.5 rounded-2xl bg-cream px-4 py-3"><b>✈ Bhuntar</b><span className="text-ink/60">31 km · 1.5 hrs · pickup available</span></div>
            <div className="flex gap-2.5 rounded-2xl bg-cream px-4 py-3"><b>◉ Kasol stand</b><span className="text-ink/60">5–10 min walk to most stays</span></div>
            <div className="flex gap-2.5 rounded-2xl bg-cream px-4 py-3"><b>◈ Treks</b><span className="text-ink/60">Chhalal 30 min · Tosh 1 hr · Kheerganga day trip</span></div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I need directions to " + SITE.name)}`} target="_blank" className="rounded-full bg-pine px-7 py-3.5 text-[14px] font-bold text-white hover:bg-pinedeep">
              Get directions
            </a>
            <a href={`tel:+${SITE.whatsapp}`} className="rounded-full border border-ink px-7 py-3.5 text-[14px] font-bold hover:bg-ink hover:text-white">
              Call us
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[24px] border border-line">
          <iframe
            title="Kasol map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.30%2C32.00%2C77.35%2C32.03&layer=mapnik&marker=32.015%2C77.325"
            className="h-80 w-full sm:h-[480px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
