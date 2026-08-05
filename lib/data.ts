import type { LucideIcon } from "lucide-react";
import { asset } from "@/lib/site";
import {
  Building2,
  Cable,
  Camera,
  Cctv,
  Cpu,
  HardDrive,
  Lightbulb,
  PlugZap,
  Search,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const electricalServices: Service[] = [
  {
    title: "Wiring & Installation",
    description: "Professional wiring for homes and commercial buildings.",
    icon: Cable,
  },
  {
    title: "Lighting Solutions",
    description: "Indoor and outdoor lighting installations.",
    icon: Lightbulb,
  },
  {
    title: "Power Outlets & Switches",
    description: "Installation and replacement of outlets and switches.",
    icon: PlugZap,
  },
  {
    title: "Fault Finding & Repairs",
    description: "Diagnose and repair electrical faults quickly and safely.",
    icon: Search,
  },
  {
    title: "Safety Inspections",
    description: "Comprehensive electrical safety assessments.",
    icon: ShieldCheck,
  },
];

export const cctvServices: Service[] = [
  {
    title: "Home & Office CCTV Systems",
    description: "Complete camera systems tailored to residential and commercial properties.",
    icon: Building2,
  },
  {
    title: "Camera Supply & Installation",
    description: "Supply and professional installation of HD security cameras.",
    icon: Camera,
  },
  {
    title: "Remote Viewing Setup",
    description: "Watch live footage from anywhere using your phone or computer.",
    icon: Smartphone,
  },
  {
    title: "Recording & Storage Setup",
    description: "Reliable local and cloud recording so footage is there when you need it.",
    icon: HardDrive,
  },
  {
    title: "System Maintenance & Support",
    description: "Ongoing checks, repairs and upgrades to keep your system online.",
    icon: Wrench,
  },
];

export const computerServices: Service[] = [
  {
    title: "PC & Laptop Repairs",
    description: "Hardware diagnostics and repairs for all brands.",
    icon: Cpu,
  },
  {
    title: "Software Installation",
    description: "Windows, Office, Antivirus and driver installations.",
    icon: Smartphone,
  },
  {
    title: "Virus & Malware Removal",
    description: "Deep cleaning of infected computers.",
    icon: ShieldCheck,
  },
  {
    title: "System Upgrades",
    description: "RAM upgrades, SSD installation and performance tuning.",
    icon: Wrench,
  },
  {
    title: "Data Backup & Recovery",
    description: "Recover lost files and protect your important data.",
    icon: HardDrive,
  },
];

export const featuredServices = [
  {
    title: "Electrical Services",
    description:
      "Wiring, lighting, outlets, fault finding and safety inspections for homes and businesses.",
    image: asset("/images/photos/electrical-testing.jpg"),
    items: [
      "Wiring & Installation",
      "Lighting Solutions",
      "Power Outlets & Switches",
      "Fault Finding & Repairs",
      "Safety Inspections",
      "CCTV Installation",
    ],
    href: "/services#electrical",
    icon: Lightbulb,
    accent: "bg-primary",
  },
  {
    title: "Computer Services",
    description:
      "Repairs, software installation, virus removal, upgrades and data recovery.",
    image: asset("/images/photos/laptop-repair.jpg"),
    items: [
      "PC & Laptop Repairs",
      "Software Installation",
      "Virus & Malware Removal",
      "System Upgrades",
      "Data Backup & Recovery",
    ],
    href: "/services#computer",
    icon: Cpu,
    accent: "bg-secondary",
  },
  {
    title: "CCTV Installation",
    description:
      "Security camera supply and installation for homes and businesses — clear viewing, reliable recording and remote access.",
    image: asset("/images/photos/panel.png"),
    items: [
      "Home & Office CCTV Systems",
      "Camera Supply & Installation",
      "Remote Viewing Setup",
      "Recording & Storage Setup",
      "System Maintenance & Support",
    ],
    href: "/services#cctv",
    icon: Cctv,
    accent: "bg-accent",
    fullWidth: true,
  },
];

export const whyChooseUs = [
  {
    title: "Reliable Service",
    description: "Always available to serve customers whenever you need us.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Work",
    description: "Professional workmanship using industry standards.",
    icon: Wrench,
  },
  {
    title: "Customer Satisfaction",
    description: "We prioritize every client's needs and expectations.",
    icon: Lightbulb,
  },
];

export const testimonials = [
  {
    quote: "Excellent service. Fixed my laptop within one hour.",
    name: "Customer Review",
    role: "Computer Services",
    rating: 5,
  },
  {
    quote: "Very professional electrical installation for our office.",
    name: "Customer Review",
    role: "Electrical Services",
    rating: 5,
  },
  {
    quote: "Quick fault finding and a fair price. Highly recommended.",
    name: "Customer Review",
    role: "Electrical Services",
    rating: 5,
  },
  {
    quote: "They recovered all my lost documents after a drive failure.",
    name: "Customer Review",
    role: "Data Recovery",
    rating: 5,
  },
];

export const galleryItems = [
  {
    id: "wiring-installation",
    src: asset("/images/photos/panel.png"),
    alt: "Professional electrical wiring installation",
    category: "Electrical",
    label: "Wiring Installation",
  },
  {
    id: "lighting-installation",
    src: asset("/images/photos/electrical-testing.jpg"),
    alt: "Indoor lighting installation",
    category: "Electrical",
    label: "Lighting Installation",
  },
  {
    id: "distribution-board",
    src: asset("/images/photos/fuse.png"),
    alt: "Electrical distribution board",
    category: "Electrical",
    label: "Distribution Board",
  },
  {
    id: "laptop-repair",
    src: asset("/images/photos/laptop-repair.jpg"),
    alt: "Laptop repair in progress",
    category: "Computer",
    label: "Laptop Repair",
  },
  {
    id: "desktop-repair",
    src: asset("/images/photos/laptop-repair.jpg"),
    alt: "Desktop computer repair",
    category: "Computer",
    label: "Desktop Repair",
  },
  {
    id: "software-installation",
    src: asset("/images/photos/electrical-testing.jpg"),
    alt: "Software installation",
    category: "Computer",
    label: "Software Installation",
  },
];
