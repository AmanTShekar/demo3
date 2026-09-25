import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/site";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="eyebrow">From Apple Cottage</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-[42px] sm:leading-[1.1]">
            Slow mornings, mountain air and cosy corners
          </h2>
          <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink/60">
            A glimpse of the rooms, views and peaceful details waiting for you in Kalga.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-4">
          {GALLERY_IMAGES.slice(0, 12).map((src, index) => (
            <Reveal
              key={src}
              delay={(index % 4) * 60}
              className={index === 0 ? "col-span-2 row-span-2" : index === 5 ? "row-span-2" : ""}
            >
              <div className="relative h-full overflow-hidden rounded-[20px] bg-sage img-zoom">
                <Image
                  src={src}
                  alt={`Apple Cottage Kalga view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
