// Central property data. Keep edits here so the UI stays consistent.
export const SITE = {
  name: "Apple Cottage Homestay & Cafe",
  tagline: "A slower stay in the heart of Parvati Valley",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  email: "hello@applecottagekalga.com",
  location: "Kalga",
  address: "Kalga, Parvati Valley, Himachal Pradesh",
  checkIn: "12:00 PM",
  checkOut: "10:30 AM",
  directionsMessage: "Hi! I need directions to Apple Cottage Kalga",
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

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

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
    image: img("photo-1518780664697-55e3ad937233"),
    gallery: [
      img("photo-1518780664697-55e3ad937233"),
      img("photo-1520250497591-112f2f40a3f4"),
      img("photo-1506905925346-21bda4d32df4"),
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
    image: img("photo-1540518614846-7eded433c457"),
    gallery: [
      img("photo-1540518614846-7eded433c457"),
      img("photo-1560185008-b033106af5c3"),
      img("photo-1505693416388-ac5ce068fe85"),
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
    image: img("photo-1523987355523-c7b5b0dd90a7"),
    gallery: [
      img("photo-1523987355523-c7b5b0dd90a7"),
      img("photo-1471115853179-bb1d604434e0"),
      img("photo-1500534623283-312aade485b7"),
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
    `*NEW BOOKING ENQUIRY — ${SITE.name}*`,
    "------------------------------",
    `*Stay:* ${data.stayName} (${data.stayCapacity} pax/unit)`,
    `*Units needed:* ${data.units}`,
    `*Check-in:* ${fmt(data.checkIn)}`,
    `*Check-out:* ${fmt(data.checkOut)}`,
    `*Nights:* ${data.nights}`,
    `*Guests:* ${data.adults} adult${data.adults > 1 ? "s" : ""}${data.children ? ` + ${data.children} child${data.children > 1 ? "ren" : ""}` : ""}`,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
  ];
  if (data.email?.trim()) lines.push(`*Email:* ${data.email.trim()}`);
  lines.push(`*Est. total:* ₹${data.estimate.toLocaleString("en-IN")}`, "------------------------------", "_Sent from the website booking form_", "Please confirm availability and price. Thank you!");
  if (data.requests?.trim()) lines.push(`*Special requests:* ${data.requests.trim()}`);
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
