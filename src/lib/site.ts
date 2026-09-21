// Central config — edit your WhatsApp number here (country code + number, no + or spaces)
export const SITE = {
  name: "Apple Cottage Homestay & Cafe Kalga",
  tagline: "Cozy mountain stays in Kalga, Parvati Valley",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@kasolmiststays.in",
  location: "Kalga",
  address: "Kalga, Parvati Valley, Himachal Pradesh",
  checkIn: "12:00 PM",
  checkOut: "10:30 AM",
};

export type Stay = {
  id: string;
  name: string;
  type: "Tent" | "Cottage" | "Cabin" | "Room" | "Camp";
  price: number;
  mrp?: number;
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

export const STAYS: Stay[] = [
  {
    id: "mist-valley-dome",
    name: "Mist Valley Dome Tent",
    type: "Tent",
    price: 1499,
    mrp: 1999,
    rating: 4.8,
    reviews: 214,
    guests: 3,
    beds: "1 queen + 1 mattress",
    size: "220 sq.ft",
    view: "Riverside + mist valley",
    location: "Katagla, 10 min from Kasol",
    tag: "Most loved",
    image: img("photo-1504280390367-361c6d9f38f4"),
    gallery: [
      img("photo-1504280390367-361c6d9f38f4"),
      img("photo-1475483768296-616dbfcc6a64"),
      img("photo-1506905925346-21bda4d32df4"),
    ],
    description:
      "Wake up inside a white dome to low clouds drifting over the Parvati river. Private deck, bonfire pit and hot meals — the classic Kasol tent experience, done right.",
    amenities: ["River view deck", "Bonfire + music", "Hot meals", "Attached washroom", "Power backup", "Parking"],
    bestFor: ["Couples", "Friends", "First-timers"],
  },
  {
    id: "parvati-view-cottage",
    name: "Parvati View Cottage",
    type: "Cottage",
    price: 3299,
    mrp: 4199,
    rating: 4.9,
    reviews: 186,
    guests: 4,
    beds: "2 king bedrooms",
    size: "650 sq.ft",
    view: "Snow peaks + pine forest",
    location: "Old Kasol village",
    tag: "Mountain view",
    image: img("photo-1518780664697-55e3ad937233"),
    gallery: [
      img("photo-1518780664697-55e3ad937233"),
      img("photo-1520250497591-112f2f40a3f4"),
      img("photo-1544735716-392fe2489ffa"),
    ],
    description:
      "Stone-and-wood cottage above Old Kasol with a wide sun deck facing snow peaks. Fireplace living room, kitchenette and balconies in every room.",
    amenities: ["Snow-peak balcony", "Fireplace", "Kitchenette", "Room heater", "High-speed WiFi", "Caretaker"],
    bestFor: ["Families", "Workation", "Long stays"],
  },
  {
    id: "snowline-aframe",
    name: "Snowline A-Frame Cabin",
    type: "Cabin",
    price: 4499,
    mrp: 5499,
    rating: 4.9,
    reviews: 142,
    guests: 2,
    beds: "1 king loft bed",
    size: "420 sq.ft",
    view: "Panoramic Himalayan",
    location: "Chhalal, 25 min hike",
    tag: "Premium",
    image: img("photo-1470770841072-f978cf4d019e"),
    gallery: [
      img("photo-1470770841072-f978cf4d019e"),
      img("photo-1582719508461-905c673771fd"),
      img("photo-1519681393784-d120267933ba"),
    ],
    description:
      "Glass-front A-frame for stargazing from bed. Heated floors, bathtub with a view, and total silence except pine wind. Our most romantic stay.",
    amenities: ["Glass facade", "Bathtub with view", "Heated flooring", "Espresso kit", "Stargazing deck", "Private chef on call"],
    bestFor: ["Honeymoon", "Couples", "Celebrations"],
  },
  {
    id: "pine-forest-swiss",
    name: "Pine Forest Swiss Tent",
    type: "Tent",
    price: 1999,
    mrp: 2599,
    rating: 4.7,
    reviews: 328,
    guests: 4,
    beds: "2 queen beds",
    size: "300 sq.ft",
    view: "Deodar forest",
    location: "Choj village meadow",
    image: img("photo-1523987355523-c7b5b0dd90a7"),
    gallery: [
      img("photo-1523987355523-c7b5b0dd90a7"),
      img("photo-1471115853179-bb1d604434e0"),
      img("photo-1445307806294-bff7f67ff225"),
    ],
    description:
      "Big canvas Swiss tents under 100-ft deodars. Fairy lights, hammocks, communal bonfire and a cafe that serves killer pancakes.",
    amenities: ["Forest hammocks", "Cafe on site", "Common bonfire", "Hot water", "Board games", "Trek desk"],
    bestFor: ["Groups", "Solo", "Budget premium"],
  },
  {
    id: "himalayan-glass-room",
    name: "Himalayan Glass Room",
    type: "Room",
    price: 5499,
    mrp: 6999,
    rating: 5.0,
    reviews: 98,
    guests: 2,
    beds: "1 king four-poster",
    size: "380 sq.ft",
    view: "180° valley + snowfall",
    location: "Kasol main ridge",
    tag: "Snowfall point",
    image: img("photo-1582719508461-905c673771fd"),
    gallery: [
      img("photo-1582719508461-905c673771fd"),
      img("photo-1590490360182-c33d57733427"),
      img("photo-1506905925346-21bda4d32df4"),
    ],
    description:
      "Floor-to-ceiling glass on three sides. Watch mist roll in at dawn and snowfall in winter without leaving your blanket. Heated, silent, unforgettable.",
    amenities: ["3-side glass walls", "Central heating", "Snowfall view", "Bathtub", "Smart TV", "Airport pickup"],
    bestFor: ["Luxury", "Snow chasers", "Photographers"],
  },
  {
    id: "riverside-camp-bonfire",
    name: "Riverside Camp & Bonfire",
    type: "Camp",
    price: 999,
    mrp: 1299,
    rating: 4.6,
    reviews: 512,
    guests: 2,
    beds: "Alpine tent + sleeping bags",
    size: "Shared 2-acre camp",
    view: "Parvati riverside",
    location: "Kasol riverside",
    tag: "Best value",
    image: img("photo-1475483768296-616dbfcc6a64"),
    gallery: [
      img("photo-1475483768296-616dbfcc6a64"),
      img("photo-1504280390367-361c6d9f38f4"),
      img("photo-1510312305653-8ed496efae75"),
    ],
    description:
      "Classic backpacker riverside camp. Alpine tents, live grill, bonfire stories and the sound of the Parvati all night. Perfect first Kasol night.",
    amenities: ["Riverside tents", "Dinner + breakfast", "Bonfire nightly", "Live grill", "Common washrooms", "Volleyball"],
    bestFor: ["Backpackers", "Bachelors", "Large groups"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    from: "Delhi",
    text: "Woke up to clouds inside our dome tent. Booking on WhatsApp took 2 minutes and the team arranged a late check-in without any fuss.",
    stay: "Mist Valley Dome Tent",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    from: "Mumbai",
    text: "The A-frame is unreal at night — stars through the glass roof. Clean, warm, and the food was proper home-style.",
    stay: "Snowline A-Frame Cabin",
    rating: 5,
  },
  {
    name: "Sarah & James",
    from: "UK",
    text: "We stayed 6 nights in the cottage working remotely. Fast WiFi, snow views, total quiet. Best value in Parvati Valley.",
    stay: "Parvati View Cottage",
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
    `------------------------------`,
    `*Stay:* ${data.stayName} (${data.stayCapacity} pax/unit)`,
    `*Units needed:* ${data.units}`,
    `*Check-in:* ${fmt(data.checkIn)}`,
    `*Check-out:* ${fmt(data.checkOut)}`,
    `*Nights:* ${data.nights}`,
    `*Guests:* ${data.adults} adult${data.adults > 1 ? "s" : ""}${data.children ? ` + ${data.children} child${data.children > 1 ? "ren" : ""}` : ""} (${data.adults + data.children} total)`,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
  ];
  if (data.email?.trim()) lines.push(`*Email:* ${data.email.trim()}`);
  lines.push(`*Est. total:* ₹${data.estimate.toLocaleString("en-IN")} (${data.nights} night${data.nights > 1 ? "s" : ""} × ${data.units} unit${data.units > 1 ? "s" : ""})`);
  if (data.requests?.trim()) lines.push(`*Special requests:* ${data.requests.trim()}`);
  lines.push(`------------------------------`, `_Sent from the website booking form_`, `Please confirm availability and price. Thank you!`);
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
