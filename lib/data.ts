import { asset } from "@/lib/site";

export type Testimonial = {
  quote: string;
  /** Customer's name as they agreed to be shown, e.g. "Mary W." */
  name?: string;
  /** Short context, e.g. "Homeowner — Nairobi". */
  detail?: string;
  /** The kind of work the review is about. */
  service: string;
  rating: number;
};

// Add each customer's name and detail once you have their permission to
// publish it. Reviews without a name are shown with the service only.
export const testimonials: Testimonial[] = [
  {
    quote: "Excellent service. Fixed my laptop within one hour.",
    service: "Computer Services",
    rating: 5,
  },
  {
    quote: "Very professional electrical installation for our office.",
    service: "Electrical Services",
    rating: 5,
  },
  {
    quote: "Quick fault finding and a fair price. Highly recommended.",
    service: "Electrical Services",
    rating: 5,
  },
  {
    quote: "They recovered all my lost documents after a drive failure.",
    service: "Data Recovery",
    rating: 5,
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /** Filter tabs on the Our Work page are built from these categories. */
  category: string;
  label: string;
  /** Optional one-line description of the job. */
  description?: string;
};

// One entry per photo. New categories (for example "CCTV" or "Networking")
// appear as filter tabs automatically once a photo uses them.
export const galleryItems: GalleryItem[] = [
  {
    id: "cctv-installation",
    src: asset("/images/photos/cctv-installation.webp"),
    alt: "Technician on a stepladder mounting a dome CCTV camera to an office ceiling",
    category: "CCTV",
    label: "CCTV Camera Installation",
  },
  {
    id: "distribution-board",
    src: asset("/images/photos/distribution-board.webp"),
    alt: "Electrician in a hard hat and safety glasses working on a distribution board",
    category: "Electrical",
    label: "Distribution Board Installation",
  },
  {
    id: "socket-installation",
    src: asset("/images/photos/socket-installation.webp"),
    alt: "Technician fitting a wall socket with an insulated screwdriver",
    category: "Electrical",
    label: "Socket & Switch Installation",
  },
  {
    id: "network-cabinet",
    src: asset("/images/photos/network-cabinet.webp"),
    alt: "Technician connecting labelled network cables in a wall-mounted cabinet",
    category: "Networking",
    label: "Network Cabinet & Cabling",
  },
  {
    id: "cctv-monitoring",
    src: asset("/images/photos/cctv-monitoring.webp"),
    alt: "Technician connecting a CCTV recorder beside a monitor showing four camera views",
    category: "CCTV",
    label: "Recorder & Monitoring Setup",
  },
  {
    id: "laptop-repair",
    src: asset("/images/photos/laptop-repair.webp"),
    alt: "Laptop opened up on a workbench during a repair",
    category: "IT & Computers",
    label: "Laptop Repair",
  },
  {
    id: "data-recovery",
    src: asset("/images/photos/data-recovery.webp"),
    alt: "Technician placing a hard drive into a drive dock beside a laptop",
    category: "IT & Computers",
    label: "Data Recovery",
  },
  {
    id: "distribution-board-wiring",
    src: asset("/images/photos/panel.webp"),
    alt: "LEE technician in uniform working on an electrical distribution board",
    category: "Electrical",
    label: "Distribution Board Wiring",
  },
  {
    id: "distribution-board-service",
    src: asset("/images/photos/fuse.webp"),
    alt: "LEE electrician servicing a distribution board with an insulated screwdriver",
    category: "Electrical",
    label: "Distribution Board Servicing",
  },
];
