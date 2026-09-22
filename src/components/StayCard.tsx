"use client";

import Image from "next/image";
import { STAYS, type Stay } from "@/lib/site";
import { useBooking } from "./BookingContext";
import { IconStar, IconArrowRight } from "./Icons";

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-brass" aria-label={`${n} stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <IconStar key={i} className="h-3.5 w-3.5" />
      ))}
    </span>
  );
}

export default function StayCard({
  stay,
  onView,
}: {
  stay: Stay;
  onView?: (s: Stay) => void;
}) {
  const { openBooking } = useBooking();
  return (
    <article className="group overflow-hidden rounded-[20px] border border-line bg-paper card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:card-shadow-lg">
      <div className="relative h-60 overflow-hidden img-zoom bg-sage">
        <Image
          src={stay.image}
          alt={stay.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {stay.tag && (
            <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-extrabold tracking-[0.14em] text-white uppercase">
              {stay.tag}
            </span>
          )}
          <span className="rounded-full bg-paper px-3 py-1.5 text-[10px] font-extrabold tracking-[0.14em] text-ink uppercase">
            {stay.type}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-[12px] font-bold text-ink">
          <IconStar className="h-3.5 w-3.5 text-brass" />
          {stay.rating} <span className="font-medium text-moss">({stay.reviews})</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[11px] font-extrabold tracking-[0.16em] text-moss uppercase">{stay.location}</p>
        <h3 className="font-display mt-1.5 text-[21px] leading-snug font-semibold tracking-tight text-ink">
          {stay.name}
        </h3>
        <p className="mt-1 text-[13px] font-bold text-pine">{stay.view}</p>
        <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-ink/65">
          {stay.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {stay.amenities.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full bg-sage px-3 py-1.5 text-[11.5px] font-semibold text-ink/75">
              {a}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-[23px] font-extrabold tracking-tight text-ink">
              ₹{stay.price.toLocaleString("en-IN")}
            </span>
          </div>
          <p className="mt-0.5 text-[12px] font-medium text-moss">
            {stay.priceUnit} · up to {stay.guests} guest{stay.guests > 1 ? "s" : ""} · {stay.inventory} available
          </p>
          <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brassdeep">
            <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-brass" />
            Enquire for live availability
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onView?.(stay)}
            className="flex items-center justify-center gap-1.5 rounded-full border border-ink px-4 py-3 text-[13px] font-bold text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            Details <IconArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => openBooking(stay.id)}
            className="rounded-full bg-brass px-4 py-3 text-[13px] font-bold text-white transition-transform duration-300 hover:bg-brassdeep hover:-translate-y-0.5"
          >
            Send enquiry
          </button>
        </div>
      </div>
    </article>
  );
}

export function StayGrid({ stays, onView }: { stays: typeof STAYS; onView: (s: Stay) => void }) {
  if (!stays.length)
    return (
      <div className="rounded-[20px] border border-dashed border-line bg-paper p-10 text-center text-moss">
        No stays match these filters. Try clearing them.
      </div>
    );
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stays.map((s) => (
        <StayCard key={s.id} stay={s} onView={onView} />
      ))}
    </div>
  );
}
