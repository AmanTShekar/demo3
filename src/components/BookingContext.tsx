"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type BookingCtx = {
  isOpen: boolean;
  stayId: string | null;
  openBooking: (stayId?: string | null) => void;
  closeBooking: () => void;
};

const Ctx = createContext<BookingCtx>({
  isOpen: false,
  stayId: null,
  openBooking: () => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stayId, setStayId] = useState<string | null>(null);

  const openBooking = useCallback((id?: string | null) => {
    setStayId(id ?? null);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const value = useMemo(
    () => ({ isOpen, stayId, openBooking, closeBooking }),
    [isOpen, stayId, openBooking, closeBooking]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useBooking = () => useContext(Ctx);
