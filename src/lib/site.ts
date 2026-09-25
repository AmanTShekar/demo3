// Central property data. Keep edits here so the UI stays consistent.
export const SITE = {
  name: "Apple Cottage Homestay & Cafe",
  tagline: "A slower stay in the heart of Parvati Valley",
  phoneDisplay: "+91 70185 88551",
  phoneHref: "+917018588551",
  whatsapp: "917018588551",
  email: "hello@applecottagekalga.com",
  location: "Kalga",
  address: "Kalga, Parvati Valley, Himachal Pradesh",
  checkIn: "12:00 PM",
  directionsMessage: "Hi! I would like to enquire about room availability and booking a stay at Apple Cottage, Kalga. Please share options, rates, and details.",
  enquiryMessage: "Hi! I would like to enquire about room availability and booking a stay at Apple Cottage, Kalga. Please share options, rates, and details.",
} as const;

export type Stay = {
  id: string;
  name: string;
  type: "Room" | "Dorm";
  price: number;
  priceUnit: "per night" | "per person / night";
  inventory: number;
  rating: number;
  reviews: number;
  guests: number;
  beds: string;
  size: string;
  view: string;
  location: string;
  tag?: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  bestFor: string[];
};

export const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) =>
  `/gallery/apple-cottage-${String(i + 1).padStart(2, "0")}.jpg`,
);

const img = (index: number) => GALLERY_IMAGES[index - 1];

const commonAmenities = ["Attached washroom", "Geyser (hot water)", "Free Wi-Fi"];

export const STAYS: Stay[] = [
  {
    id: "room-balcony",
    name: "Room with Balcony",
    type: "Room",
    price: 1300,
    priceUnit: "per night",
    inventory: 2,
    rating: 4.9,
    reviews: 48,
    guests: 2,
    beds: "1 double bed",
    size: "Comfortable private room",
    view: "Valley-facing balcony",
    location: "Apple Cottage, Kalga",
    tag: "Most requested",
    image: img(1),
    gallery: [
      img(1),
      img(2),
      img(3),
    ],
    description:
      "A warm private room with a balcony for morning chai, mountain air and unhurried evenings in Kalga.",
    amenities: commonAmenities,
    bestFor: ["Couples", "Slow travel", "Mountain views"],
  },
  {
    id: "room-without-balcony",
    name: "Room without Balcony",
    type: "Room",
    price: 1000,
    priceUnit: "per night",
    inventory: 3,
    rating: 4.8,
    reviews: 36,
    guests: 2,
    beds: "1 double bed",
    size: "Cosy private room",
    view: "Quiet cottage setting",
    location: "Apple Cottage, Kalga",
    tag: "Best value",
    image: img(4),
    gallery: [
      img(4),
      img(5),
      img(6),
    ],
    description:
      "A simple, comfortable private room for travellers who want a peaceful base without paying for a balcony.",
    amenities: commonAmenities,
    bestFor: ["Solo travellers", "Couples", "Budget stays"],
  },
  {
    id: "dorm",
    name: "Apple Cottage Dorm",
    type: "Dorm",
    price: 300,
    priceUnit: "per person / night",
    inventory: 1,
    rating: 4.8,
    reviews: 29,
    guests: 1,
    beds: "Single dorm bed",
    size: "Shared dorm",
    view: "Pine valley surroundings",
    location: "Apple Cottage, Kalga",
    tag: "Backpacker favourite",
    image: img(7),
    gallery: [
      img(7),
      img(8),
      img(9),
    ],
    description:
      "A friendly, comfortable dorm for solo travellers and backpackers looking to meet people and stay close to the trails.",
    amenities: commonAmenities,
    bestFor: ["Backpackers", "Solo travellers", "Trekkers"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    from: "Delhi",
    text: "The balcony room was exactly what we wanted: quiet mornings, hot water and a beautiful walk through Kalga.",
    stay: "Room with Balcony",
    rating: 5,
  },
  {
    name: "Nisha Kapoor",
    from: "Mumbai",
    text: "Clean, warm and genuinely peaceful. The team made directions and pickup from Bhuntar very easy.",
    stay: "Room without Balcony",
    rating: 5,
  },
  {
    name: "Kabir",
    from: "Bengaluru",
    text: "Perfect backpacker base before Kheerganga. Great value, reliable Wi-Fi and a lovely valley atmosphere.",
    stay: "Apple Cottage Dorm",
    rating: 5,
  },
];

export function buildWhatsAppLink(data: {
  stayName: string;
  stayCapacity: number;
  units: number;
  name: string;
  phone: string;
  email?: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  requests?: string;
  nights: number;
  estimate: number;
}) {
  const fmt = (d: string) => {
    const [y, m, day] = d.split("-");
    return d ? `${day}-${m}-${y}` : "";
  };
  const lines = [
    `*STAY ENQUIRY — ${SITE.name}*`,
    "------------------------------",
    `*Stay:* ${data.stayName} (${data.stayCapacity} pax/unit)`,
    `*Rooms / beds requested:* ${data.units}`,
    `*Check-in:* ${fmt(data.checkIn)}`,
    `*Check-out:* ${fmt(data.checkOut)}`,
    `*Nights:* ${data.nights}`,
    `*Guests:* ${data.adults} adult${data.adults > 1 ? "s" : ""}${data.children ? ` + ${data.children} child${data.children > 1 ? "ren" : ""}` : ""}`,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
  ];
  if (data.email?.trim()) lines.push(`*Email:* ${data.email.trim()}`);
  lines.push(`*Estimated total:* ₹${data.estimate.toLocaleString("en-IN")}`, "------------------------------", "_Sent from the website enquiry form_", "Please confirm availability and the current price. This is only an enquiry, not a confirmed booking.");
  if (data.requests?.trim()) lines.push(`*Special requests:* ${data.requests.trim()}`);
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
