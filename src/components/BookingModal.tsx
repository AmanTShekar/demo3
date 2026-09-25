"use client";

import { useEffect, useMemo, useState } from "react";
import { STAYS, buildWhatsAppLink, SITE } from "@/lib/site";
import { useBooking } from "./BookingContext";
import WhatsAppIcon from "./WhatsAppIcon";

function nightsBetween(a: string, b: string) {
  if (!a || !b) return 1;
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  const n = Math.round((d2 - d1) / 86400000);
  return n > 0 ? n : 1;
}

export default function BookingModal() {
  const { isOpen, stayId, closeBooking } = useBooking();
  const [stay, setStay] = useState(stayId ?? STAYS[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [requests, setRequests] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset the form when a new enquiry session opens.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStay(stayId ?? STAYS[0].id);
      setError("");
      setDone(false);
    }
  }, [isOpen, stayId]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && closeBooking();
    if (isOpen) window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen, closeBooking]);

  const selected = useMemo(() => STAYS.find((s) => s.id === stay) ?? STAYS[0], [stay]);
  const nights = nightsBetween(checkIn, checkOut);
  const totalGuests = adults + children;
  const units = selected.type === "Dorm" ? 1 : Math.max(1, Math.ceil(totalGuests / selected.guests));
  const estimate = selected.price * nights * (selected.type === "Dorm" ? adults : units);
  const unitLabel = selected.type === "Dorm" ? "dorm bed" : `room${units > 1 ? "s" : ""}`;
  const exceedsListedInventory = selected.type === "Room" && units > selected.inventory;

  if (!isOpen) return null;

  const submit = () => {
    if (name.trim().length < 2) return setError("Please enter your full name.");
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, "").slice(-10)))
      return setError("Enter a valid 10-digit Indian mobile number.");
    if (!checkIn || !checkOut) return setError("Please select check-in and check-out dates.");
    if (new Date(checkOut) <= new Date(checkIn)) return setError("Check-out must be after check-in.");
    setError("");
    setDone(true);
    const link = buildWhatsAppLink({
      stayName: selected.name,
      stayCapacity: selected.guests,
      units,
      name: name.trim(),
      phone: phone.trim(),
      checkIn,
      checkOut,
      adults,
      children,
      requests,
      nights,
      estimate,
    });
    setTimeout(() => window.open(link, "_blank"), 600);
  };

  const inputCls =
    "w-full rounded-2xl border border-line bg-cream px-4 py-3 text-[14px] font-semibold text-ink outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 placeholder:text-ink/30 placeholder:font-medium";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-ink/60 fade-in" onClick={closeBooking} />
      <div className="enquiry-modal-scroll relative h-[100dvh] max-h-[100dvh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-none bg-paper modal-in sm:h-auto sm:max-h-[92vh] sm:rounded-[24px]">
        <div className="sticky top-0 flex items-center justify-between border-b border-line bg-paper px-6 py-5 sm:px-8">
          <div>
            <p className="eyebrow">WhatsApp enquiry</p>
            <h2 className="font-display mt-1 text-[22px] font-semibold tracking-tight text-ink">Send a stay enquiry</h2>
          </div>
          <button
            onClick={closeBooking}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-lg font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {!done ? (
          <div className="grid gap-5 px-6 py-6 sm:px-8">
            <div>
              <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                Select room or dorm
              </label>
              <select value={stay} onChange={(e) => setStay(e.target.value)} className={inputCls}>
                {STAYS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — ₹{s.price.toLocaleString("en-IN")} {s.priceUnit}
                  </option>
                ))}
              </select>
              <div className="mt-2.5 flex items-center justify-between rounded-2xl bg-pine px-5 py-3.5 text-[13px]">
                <span className="font-semibold text-white/80">
                  {nights} night{nights > 1 ? "s" : ""} · {adults} adult{adults > 1 ? "s" : ""}
                  {children ? ` + ${children} kid${children > 1 ? "s" : ""}` : ""}
                </span>
                <span className="text-right font-extrabold text-white">
                  <span className="block">Est. ₹{estimate.toLocaleString("en-IN")}</span>
                  <span className="block text-[11px] font-semibold text-white/65">
                    {selected.type === "Dorm"
                      ? "per-person estimate"
                      : `${units} room${units > 1 ? "s" : ""} for ${totalGuests} guest${totalGuests > 1 ? "s" : ""}`}
                  </span>
                </span>
              </div>
              {exceedsListedInventory && (
                <p className="mt-2.5 rounded-2xl border border-amber-900/10 bg-amber-50 px-4 py-3 text-[12px] font-semibold leading-relaxed text-amber-950/75">
                  This group needs {units} rooms, while {selected.name} currently lists {selected.inventory} rooms.
                  We&apos;ll confirm the best available arrangement with you on WhatsApp.
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                  Full name *
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Kapoor"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                  Mobile number *
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d+\s]/g, ""))}
                  placeholder="70185 88551"
                  inputMode="tel"
                  maxLength={13}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                  Check-in *
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                  Check-out *
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                  Adults
                </label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setAdults(Math.max(1, adults - 1))} className="h-10 w-10 rounded-full border border-line font-bold hover:bg-cream">−</button>
                  <span className="w-6 text-center font-bold">{adults}</span>
                  <button onClick={() => setAdults(Math.min(12, adults + 1))} className="h-10 w-10 rounded-full border border-line font-bold hover:bg-cream">+</button>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                  Kids
                </label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setChildren(Math.max(0, children - 1))} className="h-10 w-10 rounded-full border border-line font-bold hover:bg-cream">−</button>
                  <span className="w-6 text-center font-bold">{children}</span>
                  <button onClick={() => setChildren(Math.min(8, children + 1))} className="h-10 w-10 rounded-full border border-line font-bold hover:bg-cream">+</button>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ink/70 uppercase">
                Special requests <span className="font-medium normal-case tracking-normal text-ink/40">(optional)</span>
              </label>
              <textarea
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                placeholder="Bonfire, birthday setup, late check-in, food preference..."
                rows={3}
                className={`${inputCls} resize-none`}
              />
            </div>

            {error && (
              <p className="rounded-2xl bg-[#fdecec] px-4 py-3 text-[13px] font-bold text-[#b91c1c]">
                {error}
              </p>
            )}

            <button
              onClick={submit}
              className="flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-[15px] font-bold text-white hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send enquiry on WhatsApp
            </button>
            <p className="text-center text-[12px] font-medium text-moss">
              Check-in {SITE.checkIn} · Check-out {SITE.checkOut} · We&apos;ll confirm availability on WhatsApp · No advance required
            </p>
          </div>
        ) : (
          <div className="px-6 py-10 text-center sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-3xl text-pine">
              ✓
            </div>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">Opening WhatsApp…</h3>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-ink/60">
              Your enquiry for <b className="text-ink">{selected.name}</b> ({units} {unitLabel}, {nights} night{nights > 1 ? "s" : ""}, estimated ₹
              {estimate.toLocaleString("en-IN")}) is ready. Just press send in WhatsApp — we&apos;ll reply
              with availability and current pricing.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
              <button
                onClick={() => {
                  const link = buildWhatsAppLink({
                    stayName: selected.name,
                    stayCapacity: selected.guests,
                    units,
                    name: name.trim(),
                    phone: phone.trim(),
                    checkIn,
                    checkOut,
                    adults,
                    children,
                    requests,
                    nights,
                    estimate,
                  });
                  window.open(link, "_blank");
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Re-open WhatsApp
              </button>
              <button
                onClick={closeBooking}
                className="rounded-full border border-line px-6 py-3.5 text-sm font-bold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
