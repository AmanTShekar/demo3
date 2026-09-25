"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import { StaysPreview, WhyBook, Reviews, FinalCTA, Location } from "@/components/Sections";
import Gallery from "@/components/Gallery";
import StayDetailModal from "@/components/StayDetailModal";
import { Snowfall } from "@/components/Scene";
import type { Stay } from "@/lib/site";

export default function Home() {
  const [viewing, setViewing] = useState<Stay | null>(null);

  return (
    <>
      <Snowfall count={18} className="fixed inset-0 z-40" />
      <Hero />
      <StaysPreview onView={setViewing} />
      <Gallery />
      <WhyBook />
      <Reviews />
      <FinalCTA />
      <Location />
      <StayDetailModal stay={viewing} onClose={() => setViewing(null)} />
    </>
  );
}
