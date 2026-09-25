import { SITE } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.enquiryMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire about your stay on WhatsApp"
      className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/80 bg-[#25D366] text-white card-shadow-lg transition-transform hover:scale-105 hover:brightness-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-0 bottom-full mb-3 w-max rounded-2xl rounded-br-sm bg-pinedeep px-4 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Enquire about stays <span aria-hidden="true">❄</span>
      </span>
    </a>
  );
}
