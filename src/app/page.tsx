"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import { StaysPreview, WhyBook, Reviews, FinalCTA, Location } from "@/components/Sections";
import StayDetailModal from "@/components/StayDetailModal";
import type { Stay } from "@/lib/site";

export default function Home() {
  const [viewing, setViewing] = useState<Stay | null>(null);

  return (
    <>
      <Hero />
      <StaysPreview onView={setViewing} />
      <WhyBook />
      <Reviews />
      <FinalCTA />
      <Location />
      <StayDetailModal stay={viewing} onClose={() => setViewing(null)} />
    </>
  );
}
