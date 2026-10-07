export const site = {
  name: "LEE Electrical and Computer Services",
  shortName: "LEE Electrical & Computer",
  tagline: "Power. Security. Technology. Done Right.",
  description:
    "Professional electrical installation, CCTV security and computer services for homes and businesses across Nairobi.",
  url: "https://lee-electrical.example.com",
  phone: "+254 708 657 832",
  phoneHref: "tel:+254708657832",
  whatsapp: "+254 708 657 832",
  whatsappHref: "https://wa.me/254708657832",
  email: "leebrad341@gmail.com",
  // No street address is published; set one here only if there is a real
  // office customers can visit.
  locality: "Nairobi, Kenya",
  serviceArea: "Nairobi and surrounding areas",
  // Link to the Google Business Profile reviews. Leave empty to hide the link.
  googleReviewsUrl: "",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=Nairobi%2C%20Kenya&z=11&output=embed",
  mapLink: "https://maps.google.com/?q=Nairobi%2C%20Kenya",
} as const;

/** WhatsApp chat link that opens with a message already typed. */
export function whatsappLink(message: string): string {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export const assetBase =
  process.env.NEXT_PUBLIC_ASSET_BASE?.replace(/\/$/, "") ?? "";

export function asset(src: string): string {
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  return `${assetBase}${normalizedSrc}`;
}
