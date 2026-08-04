import { NextResponse } from "next/server";

const SERVICE_OPTIONS = [
  "Wiring & Installation",
  "Lighting Solutions",
  "Power Outlets & Switches",
  "Fault Finding & Repairs",
  "Safety Inspections",
  "CCTV Installation",
  "PC & Laptop Repairs",
  "Software Installation",
  "Virus & Malware Removal",
  "System Upgrades",
  "Data Backup & Recovery",
  "Other",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\-.\s\d]{7,20}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service = typeof body.service === "string" ? body.service : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 },
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }
    if (phone !== "" && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }
    if (!SERVICE_OPTIONS.includes(service)) {
      return NextResponse.json(
        { error: "Please select a service." },
        { status: 400 },
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please enter a message of at least 10 characters." },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 400 },
    );
  }
}
