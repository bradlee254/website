import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} — Electrical, CCTV and Computer & IT Services`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The card shown when the site is shared on WhatsApp, Facebook and similar.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0c1a11",
          color: "#f5f4ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "#43c229",
            }}
          >
            <svg width="56" height="56" viewBox="0 0 64 64">
              <path d="M36 9 15 36h15l-3 19 22-28H34l2-18Z" fill="#0c1a11" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
              LEE
            </div>
            <div style={{ fontSize: 22, opacity: 0.7, letterSpacing: 4 }}>
              ELECTRICAL & COMPUTER SERVICES
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            Power. Security.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            Technology.
            <span style={{ color: "#43c229", marginLeft: 24 }}>Done Right.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(245,244,238,0.2)",
            paddingTop: 28,
            fontSize: 28,
          }}
        >
          <div>Electrical • CCTV • Computer & IT Services</div>
          <div style={{ color: "#43c229" }}>Nairobi, Kenya</div>
        </div>
      </div>
    ),
    size,
  );
}
