import Link from "next/link";
import Image from "next/image";
import { SITE, STAYS } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-pinedeep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/apple_cottage.PNG" alt={SITE.name} width={40} height={40} className="h-10 w-10 rounded-2xl object-cover" />
            <span className="font-display text-xl font-semibold tracking-tight">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/65">
            {SITE.tagline}. Comfortable rooms and dorm stays in Kalga, with clear pricing
            and a simple WhatsApp enquiry flow.
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-white/65">{SITE.address}<br />{SITE.email} · {SITE.phoneDisplay}</p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.directionsMessage)}`}
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-[13px] font-bold text-white hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
        <div>
          <h4 className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/50">Stays</h4>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            {STAYS.slice(0, 5).map((s) => (
              <li key={s.id}><Link href="/stays" className="text-white/80 hover:text-white">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/50">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
            <li><Link href="/stays" className="text-white/80 hover:text-white">All listings</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-[12px] font-medium text-white/50 sm:flex-row sm:px-6">
          <span>© 2026 {SITE.name}. Made with care in Parvati Valley.</span>
          <span>Check-in {SITE.checkIn} · Check-out {SITE.checkOut}</span>
        </div>
      </div>
    </footer>
  );
}
