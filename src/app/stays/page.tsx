"use client";

import { useState } from "react";
import { StaysFull } from "@/components/Sections";
import StayDetailModal from "@/components/StayDetailModal";
import type { Stay } from "@/lib/site";

export default function StaysPage() {
  const [viewing, setViewing] = useState<Stay | null>(null);
  return (
    <>
      <StaysFull onView={setViewing} />
      <StayDetailModal stay={viewing} onClose={() => setViewing(null)} />
    </>
  );
}
