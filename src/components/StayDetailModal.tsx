"use client";

import Image from "next/image";
import { useState } from "react";
import type { Stay } from "@/lib/site";
import { useBooking } from "./BookingContext";
import { Stars } from "./StayCard";

export default function StayDetailModal({ stay, onClose }: { stay: Stay | null; onClose: () => void }) {
  const { openBooking } = useBooking();
  const [img, setImg] = useState(0);
  if (!stay) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-ink/60 fade-in" onClick={onClose} />
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[24px] bg-paper sm:rounded-[24px] modal-in">
        <div className="relative h-64 bg-sage sm:h-80">
          <Image src={stay.gallery[img]} alt={stay.name} fill className="object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-lg font-bold"
            aria-label="Close"
          >
            ×
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            {stay.gallery.map((g, i) => (
              <button
                key={g + i}
                onClick={() => setImg(i)}
                className={`h-12 w-16 overflow-hidden rounded-xl border-2 ${i === img ? "border-white" : "border-transparent opacity-70"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-extrabold tracking-[0.16em] text-moss uppercase">
            {stay.location} · {stay.type}
          </p>
          <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{stay.name}</h2>
            <div className="text-right">
              <div className="text-2xl font-extrabold tracking-tight">₹{stay.price.toLocaleString("en-IN")}</div>
              <div className="text-[12px] font-medium text-moss">{stay.priceUnit} · {stay.inventory} available</div>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-2 text-[13px]">
            <Stars n={5} />
            <span className="font-bold">{stay.rating}</span>
            <span className="text-moss">· {stay.reviews} reviews · {stay.view}</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              [`Up to ${stay.guests}`, "Guests"],
              [stay.beds, "Sleeping"],
              [stay.size, "Space"],
              ["12pm / 10:30am", "Check in/out"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-cream px-4 py-3">
                <div className="text-[13px] font-bold text-ink">{v}</div>
                <div className="text-[10px] font-extrabold tracking-[0.16em] text-moss uppercase">{l}</div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[14.5px] leading-relaxed text-ink/70">{stay.description}</p>

          <h4 className="mt-6 text-[11px] font-extrabold tracking-[0.18em] uppercase">Amenities</h4>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {stay.amenities.map((a) => (
              <div key={a} className="flex items-center gap-2.5 rounded-2xl border border-line px-3.5 py-2.5 text-[13px] font-semibold">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage text-[11px] font-bold text-pine">✓</span>
                {a}
              </div>
            ))}
          </div>

          <h4 className="mt-6 text-[11px] font-extrabold tracking-[0.18em] uppercase">Best for</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {stay.bestFor.map((b) => (
              <span key={b} className="rounded-full bg-pine px-4 py-2 text-[12px] font-bold text-white">
                {b}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <button
              onClick={() => { onClose(); openBooking(stay.id); }}
              className="flex-1 rounded-full bg-brass px-6 py-4 text-[15px] font-bold text-white hover:bg-brassdeep"
            >
              Enquire now — ₹{stay.price.toLocaleString("en-IN")} {stay.priceUnit}
            </button>
            <button
              onClick={onClose}
              className="rounded-full border border-line px-6 py-4 text-[14px] font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
