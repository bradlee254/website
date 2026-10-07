import type { LucideIcon } from "lucide-react";
import { Cctv, HardDrive, Laptop, Network, Zap } from "lucide-react";
import { asset } from "@/lib/site";

export type Faq = { question: string; answer: string };
export type Step = { title: string; description: string };

export type ServiceDetail = {
  slug: string;
  /** Short name used in navigation, the footer and the quote form. */
  name: string;
  title: string;
  /** One or two sentences for listings. */
  summary: string;
  /** Lead paragraph on the service page. */
  intro: string;
  icon: LucideIcon;
  /** Shown as one of the three headline services on the home page. */
  featured: boolean;
  /** Three-word summary for the home page, e.g. "Installation • Repairs". */
  tagline?: string;
  /** The 4–6 services listed on the home page panel. */
  highlights?: string[];
  /** Steps specific to this service; the general process is used otherwise. */
  process: Step[];
  image?: { src: string; alt: string; position: string };
  /** Optional second photo, shown under the "what's included" list. */
  detailImage?: { src: string; alt: string; caption: string };
  included: string[];
  problems: string[];
  audience: string[];
  faqs: Faq[];
  cta: { heading: string; label: string };
  seo: { title: string; description: string };
};

export const services: ServiceDetail[] = [
  {
    slug: "electrical",
    name: "Electrical",
    title: "Electrical Services",
    summary:
      "Installation, wiring, repairs and maintenance for homes and commercial buildings — from a single faulty socket to a full rewire.",
    intro:
      "Safe, durable electrical work for homes, offices and shops. We install, repair and maintain wiring, lighting and distribution boards, and we track down faults when something stops working.",
    icon: Zap,
    featured: true,
    tagline: "Installation • Repairs • Maintenance",
    highlights: [
      "House & commercial wiring",
      "Lighting installation",
      "Socket & switch installation",
      "Fault diagnosis & repairs",
      "Distribution boards",
    ],
    process: [
      { title: "Inspection", description: "We look at the existing wiring and what you need done." },
      { title: "Quote", description: "You get a clear quotation covering the work and materials." },
      { title: "Installation or repair", description: "The technician carries out the work safely." },
      { title: "Testing", description: "Every circuit we touched is tested before power stays on." },
      { title: "Handover", description: "We show you what was done and answer your questions." },
    ],
    image: {
      src: asset("/images/photos/socket-installation.webp"),
      alt: "Technician fitting a wall socket with an insulated screwdriver",
      position: "object-[60%_45%]",
    },
    included: [
      "Electrical installation",
      "Electrical repairs",
      "House wiring",
      "Commercial wiring",
      "Lighting installation",
      "Socket & switch installation",
      "Electrical fault diagnosis",
      "Distribution board installation",
      "Maintenance",
      "Emergency electrical services",
    ],
    problems: [
      "Power that trips, flickers or cuts out",
      "Sockets, switches or lights that have stopped working",
      "Old or overloaded wiring that needs replacing",
      "A new building, room or shop that needs wiring from scratch",
      "A distribution board that needs installing or upgrading",
    ],
    audience: ["Homes", "Offices", "Shops", "Schools & institutions"],
    faqs: [
      {
        question: "Do you provide emergency electrical services?",
        answer:
          "Yes. Call us on the number on this page for urgent electrical faults and we will tell you how quickly a technician can reach you.",
      },
      {
        question: "Do you give a quotation before starting work?",
        answer:
          "Yes. We assess the job first and give you a clear quotation, so you know what the work involves before anything begins. Quotations are free.",
      },
      {
        question: "Do you work on both homes and commercial buildings?",
        answer:
          "Yes. We handle house wiring and repairs as well as wiring, lighting and maintenance for offices, shops and other business premises.",
      },
      {
        question: "Can you find out why my power keeps tripping?",
        answer:
          "Yes. Fault diagnosis is a core part of our work. We test the circuit, find the cause, explain it to you and then fix it.",
      },
    ],
    cta: {
      heading: "Need electrical work?",
      label: "Request electrical service",
    },
    seo: {
      title: "Electrical Services in Nairobi",
      description:
        "Electrical installation, house and commercial wiring, lighting, fault diagnosis, distribution boards and emergency repairs in Nairobi.",
    },
  },
  {
    slug: "cctv",
    name: "CCTV & Security",
    title: "CCTV & Security",
    summary:
      "Security camera systems for homes and businesses — supplied, installed, configured and maintained, with viewing from your phone.",
    intro:
      "Complete CCTV systems for homes and businesses. We install and configure the cameras and recorder, set up viewing on your phone or computer, and keep the system working afterwards.",
    icon: Cctv,
    featured: true,
    tagline: "Installation • Configuration • Monitoring",
    highlights: [
      "Camera installation",
      "DVR/NVR installation",
      "Remote viewing on your phone",
      "Storage configuration",
      "Maintenance & troubleshooting",
    ],
    process: [
      { title: "Site assessment", description: "We look at the property and what you need to see." },
      { title: "Camera positioning", description: "We agree where each camera goes for the best coverage." },
      { title: "Installation", description: "Cameras, cabling and the recorder are fitted neatly." },
      { title: "Configuration", description: "Recording, storage and phone access are set up." },
      { title: "Testing", description: "We check every camera with you, day and night view." },
    ],
    image: {
      src: asset("/images/photos/cctv-installation.webp"),
      alt: "Technician on a stepladder mounting a dome CCTV camera to an office ceiling",
      position: "object-[60%_25%]",
    },
    detailImage: {
      src: asset("/images/photos/cctv-monitoring.webp"),
      alt: "Technician connecting a CCTV recorder beside a monitor showing four camera views",
      caption:
        "Recorder set up and tested, with every camera visible on one screen.",
    },
    included: [
      "CCTV installation",
      "CCTV configuration",
      "Camera replacement",
      "Remote monitoring setup",
      "Mobile access",
      "DVR/NVR installation",
      "Storage configuration",
      "Security system maintenance",
      "Camera troubleshooting",
      "Home security systems",
      "Business security systems",
    ],
    problems: [
      "A property with no camera coverage",
      "Cameras that are offline, blurry or not recording",
      "Footage you cannot view from your phone",
      "A recorder that has run out of storage or stopped working",
      "An old system that needs extending or replacing",
    ],
    audience: ["Homes", "Offices", "Shops", "Other business premises"],
    faqs: [
      {
        question: "Do you install CCTV cameras?",
        answer:
          "Yes. We install the cameras and recorder, configure the system and test it with you before we leave.",
      },
      {
        question: "How much does CCTV installation cost?",
        answer:
          "It depends on the number and type of cameras, the recorder and storage you need, and how complex the cabling is. Tell us about the property and we will give you a free quotation.",
      },
      {
        question: "Can I watch my cameras from my phone?",
        answer:
          "Yes. We set up remote viewing so you can see live footage from your phone or computer, and we show you how to use it.",
      },
      {
        question: "Can you repair a system someone else installed?",
        answer:
          "Yes. We troubleshoot existing systems, replace faulty cameras and get recording and remote viewing working again.",
      },
    ],
    cta: {
      heading: "Need CCTV installed or fixed?",
      label: "Request CCTV service",
    },
    seo: {
      title: "CCTV Installation in Nairobi",
      description:
        "CCTV installation, configuration, DVR/NVR setup, remote viewing and security system maintenance for homes and businesses in Nairobi.",
    },
  },
  {
    slug: "computer",
    name: "Computer Repair",
    title: "Computer & IT Services",
    summary:
      "Repairs, software, virus removal and day-to-day IT support that keep your computers working — for home users and businesses.",
    intro:
      "Repairs and support for laptops and desktop computers. We fix hardware faults, install Windows and software, remove viruses and look after the computers a business depends on.",
    icon: Laptop,
    featured: true,
    tagline: "Repairs • Networking • Support",
    highlights: [
      "Computer & laptop repair",
      "Windows & software installation",
      "Virus & malware removal",
      "Networking & Wi-Fi setup",
      "Business IT support",
    ],
    process: [
      { title: "Diagnosis", description: "We find out what is actually wrong with the machine." },
      { title: "Quote", description: "You know the fix and the cost before we proceed." },
      { title: "Repair", description: "Hardware or software is repaired or replaced." },
      { title: "Testing", description: "We run the computer properly to confirm the fault is gone." },
      { title: "Handover", description: "You get it back with an explanation of what was done." },
    ],
    image: {
      src: asset("/images/photos/laptop-repair.webp"),
      alt: "Laptop opened up on a workbench during a repair",
      position: "object-[50%_70%]",
    },
    included: [
      "Computer repair",
      "Laptop repair",
      "Windows installation",
      "Software installation",
      "Virus & malware removal",
      "Printer setup",
      "IT maintenance",
      "Business IT support",
    ],
    problems: [
      "A laptop or computer that will not turn on",
      "A machine that has become slow, freezes or crashes",
      "Viruses, pop-ups or suspicious software",
      "Windows or software that needs installing or reinstalling",
      "A printer that will not connect or print",
    ],
    audience: ["Home users", "Students", "Offices", "Small businesses"],
    faqs: [
      {
        question: "Do you repair laptops?",
        answer:
          "Yes. We diagnose and repair laptops and desktop computers, including hardware faults, software problems and virus removal.",
      },
      {
        question: "Will I lose my files during a repair?",
        answer:
          "We take care to keep your data safe and will tell you before doing anything that could affect your files, such as reinstalling Windows.",
      },
      {
        question: "Do you support business computers?",
        answer:
          "Yes. We provide maintenance and support for the computers, printers and software an office relies on.",
      },
      {
        question: "How much will my repair cost?",
        answer:
          "It depends on the fault. We diagnose the problem first and give you a quotation before doing the repair.",
      },
    ],
    cta: {
      heading: "Computer problem?",
      label: "Request IT support",
    },
    seo: {
      title: "Computer & Laptop Repair in Nairobi",
      description:
        "Computer and laptop repair, Windows and software installation, virus removal, printer setup and business IT support in Nairobi.",
    },
  },
  {
    slug: "networking",
    name: "Networking",
    title: "Networking & Wi-Fi",
    summary:
      "Network and Wi-Fi setup for homes and offices, so every room and every device has a connection that works.",
    intro:
      "Network installation and Wi-Fi setup for homes and offices. We plan the layout, run the cabling, set up the equipment and make sure every device connects reliably.",
    icon: Network,
    featured: false,
    process: [
      { title: "Site survey", description: "We check the building, the devices and where signal is weak." },
      { title: "Network plan", description: "We agree where cabling, switches and access points go." },
      { title: "Cabling & installation", description: "Cables are run, labelled and the equipment is fitted." },
      { title: "Configuration", description: "Wi-Fi, security and shared devices are set up." },
      { title: "Testing", description: "We test speed and coverage in every area you use." },
    ],
    image: {
      src: asset("/images/photos/network-cabinet.webp"),
      alt: "Technician connecting labelled network cables in a wall-mounted cabinet",
      position: "object-[60%_50%]",
    },
    included: [
      "Network installation",
      "Wi-Fi setup",
      "Network cabling",
      "Router & switch setup",
      "Connecting printers & shared devices",
      "Network troubleshooting",
      "Office network maintenance",
    ],
    problems: [
      "Wi-Fi that is slow or keeps dropping",
      "Rooms or desks with no signal",
      "A new office that needs a network from scratch",
      "Printers and computers that cannot see each other",
      "Untidy cabling that is hard to maintain",
    ],
    audience: ["Homes", "Offices", "Shops", "Small businesses"],
    faqs: [
      {
        question: "Why is my office Wi-Fi slow?",
        answer:
          "Common causes are poor router placement, too many devices on one access point, interference and ageing equipment. We check the network, find the cause and recommend a fix.",
      },
      {
        question: "Do you set up networks for new offices?",
        answer:
          "Yes. We plan the network, install the cabling and equipment, and connect and test your devices.",
      },
      {
        question: "Can you extend Wi-Fi to the whole building?",
        answer:
          "Usually, yes. After looking at the building we recommend where extra access points or cabling are needed for full coverage.",
      },
    ],
    cta: {
      heading: "Network or Wi-Fi trouble?",
      label: "Request networking service",
    },
    seo: {
      title: "Network Installation & Wi-Fi Setup in Nairobi",
      description:
        "Network installation, Wi-Fi setup, cabling and troubleshooting for homes and offices in Nairobi.",
    },
  },
  {
    slug: "data-recovery",
    name: "Data Recovery",
    title: "Data Backup & Recovery",
    summary:
      "Recovering lost files from failed or damaged drives, and setting up backups so it does not happen again.",
    intro:
      "When a drive fails or files are deleted, we work to get your documents, photos and business data back — and set up backups so you are protected next time.",
    icon: HardDrive,
    featured: false,
    process: [
      { title: "Assessment", description: "We examine the device to see what has failed." },
      { title: "Quote", description: "We tell you what is likely recoverable and the cost." },
      { title: "Recovery", description: "We work to retrieve your files without changing the original drive." },
      { title: "Verification", description: "You check that the files you need are there and open." },
      { title: "Handover & backup", description: "Files are returned and we advise on backing up." },
    ],
    image: {
      src: asset("/images/photos/data-recovery.webp"),
      alt: "Technician placing a hard drive into a drive dock beside a laptop",
      position: "object-center",
    },
    included: [
      "Recovery of deleted files",
      "Recovery from failed or damaged drives",
      "Recovery from computers that will not start",
      "Moving data to a new computer",
      "Backup setup",
      "Advice on protecting important data",
    ],
    problems: [
      "Files or folders deleted by mistake",
      "A hard drive that has stopped working or is not detected",
      "A computer that will not start with important data inside",
      "Data lost after a virus or a failed update",
      "No backup of important documents",
    ],
    audience: ["Home users", "Students", "Offices", "Small businesses"],
    faqs: [
      {
        question: "Can you recover files from a dead hard drive?",
        answer:
          "Often, yes, but it depends on what has failed and how badly the drive is damaged. We assess the drive first and tell you honestly what is likely to be recoverable.",
      },
      {
        question: "What should I do when I realise files are missing?",
        answer:
          "Stop using the device straight away. Saving new files can overwrite the ones you want back. Then contact us.",
      },
      {
        question: "How much does data recovery cost?",
        answer:
          "It depends on the type of failure and how much data is involved. We assess the device and give you a quotation before starting.",
      },
    ],
    cta: {
      heading: "Lost important files?",
      label: "Request data recovery",
    },
    seo: {
      title: "Data Recovery & Backup in Nairobi",
      description:
        "Data recovery from failed drives and deleted files, plus backup setup, for homes and businesses in Nairobi.",
    },
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}

/** Options in the quote form's "service" field. */
export const QUOTE_SERVICE_OPTIONS = [
  ...services.map((service) => service.name),
  "Other",
];

/** Link to the quote form with a service already selected. */
export function quoteLink(slug?: string): string {
  return slug ? `/contact?service=${slug}` : "/contact";
}

export const whyChooseLee = [
  {
    title: "One Team, Multiple Skills",
    description: "Electrical, CCTV and computer expertise under one roof.",
  },
  {
    title: "Clear Communication",
    description:
      "We explain the problem and the work required before proceeding.",
  },
  {
    title: "Professional Workmanship",
    description:
      "We focus on safe, reliable and properly completed installations and repairs.",
  },
  {
    title: "Fast Response",
    description:
      "Get assistance when you need it, including urgent service requests.",
  },
  {
    title: "Homes & Businesses",
    description:
      "Solutions for residential, commercial and office environments.",
  },
];

export const processSteps: Step[] = [
  {
    title: "Tell us what you need",
    description: "Call, WhatsApp or submit a quote request.",
  },
  {
    title: "We assess the job",
    description: "We understand the problem and determine what’s required.",
  },
  {
    title: "You receive a quote",
    description: "You know the expected work and cost before proceeding.",
  },
  {
    title: "We do the work",
    description: "Our technician completes the service.",
  },
  {
    title: "We test and hand over",
    description: "We make sure everything works properly.",
  },
];

export const businessSolutions = [
  {
    title: "Electrical",
    description: "Office wiring, lighting and maintenance.",
    href: "/services/electrical",
  },
  {
    title: "Security",
    description: "CCTV installation and monitoring.",
    href: "/services/cctv",
  },
  {
    title: "IT",
    description: "Computer maintenance, networking and technical support.",
    href: "/services/computer",
  },
];

export const generalFaqs: Faq[] = [
  {
    question: "Do you provide emergency electrical services?",
    answer:
      "Yes. Call us for urgent electrical faults and we will tell you how quickly a technician can reach you.",
  },
  {
    question: "Do you install CCTV cameras?",
    answer: "Yes, including installation, configuration and testing.",
  },
  {
    question: "Do you repair laptops?",
    answer:
      "Yes. We repair laptops and desktop computers, covering hardware faults, Windows and software problems, and virus removal.",
  },
  {
    question: "Do you work with businesses?",
    answer:
      "Yes. We handle office wiring, lighting and electrical maintenance, CCTV for business premises, and computer, network and IT support for offices and shops.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Nairobi and the surrounding areas. For jobs further out, contact us with the location and we will let you know whether we can help.",
  },
  {
    question: "How much does CCTV installation cost?",
    answer:
      "Pricing depends on the number and type of cameras, the recorder and storage, and how complex the installation is. We give a free quotation once we understand the property.",
  },
  {
    question: "Do you provide quotations before work?",
    answer:
      "Yes. We assess the job and give you a clear quotation before any work begins.",
  },
];
