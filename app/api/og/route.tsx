// ─── Dynamic OG Image Generator ──────────────────────────────────────────────
// This is a Next.js Route Handler that returns a PNG image on every request.
// next/og uses a subset of React JSX + inline styles (no Tailwind here — just
// plain style objects) to generate a 1200×630 PNG at the Edge.
//
// This image shows up when your link is shared on:
//   LinkedIn, Twitter/X, iMessage, Slack, Discord, WhatsApp, etc.
//
// Visit /api/og in your browser to preview it.

import { ImageResponse } from "next/og";

// edge runtime = runs on Vercel's Edge Network, extremely fast, zero cold start
export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      // Outer container — full 1200×630 canvas
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // Deep indigo gradient background — matches the portfolio accent color
          background: "linear-gradient(135deg, #0f0c29 0%, #1e1b4b 40%, #312e81 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >

        {/* ── Decorative background circles ─────────────────────────────── */}
        {/* These add depth without being distracting */}
        <div style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          top: -200,
          right: -100,
        }} />
        <div style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          bottom: -150,
          left: -50,
        }} />

        {/* ── Top label ─────────────────────────────────────────────────── */}
        <div style={{
          position: "absolute",
          top: 52,
          left: 64,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          {/* Indigo dot — matches the "DeShaun." logo in the Navbar */}
          <div style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#6366f1",
          }} />
          <span style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#818cf8",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            deshaun holden
          </span>
        </div>

        {/* ── Main content ──────────────────────────────────────────────── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
          padding: "0 80px",
        }}>

          {/* Name */}
          <div style={{
            fontSize: 88,
            fontWeight: 800,
            color: "white",
            letterSpacing: -3,
            lineHeight: 1,
          }}>
            DeShaun Holden
          </div>

          {/* Title */}
          <div style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#a5b4fc",
            letterSpacing: -0.5,
          }}>
            Full-Stack Web Developer
          </div>

          {/* Divider line */}
          <div style={{
            width: 60,
            height: 3,
            borderRadius: 2,
            background: "#6366f1",
            marginTop: 4,
          }} />

          {/* Tagline */}
          <div style={{
            fontSize: 24,
            color: "#c7d2fe",
            fontWeight: 400,
            opacity: 0.8,
          }}>
            Custom web apps for small businesses · Atlanta, GA
          </div>
        </div>

        {/* ── Tech stack row at the bottom ──────────────────────────────── */}
        <div style={{
          position: "absolute",
          bottom: 52,
          display: "flex",
          alignItems: "center",
          gap: 28,
          fontSize: 18,
          color: "#6366f1",
          fontWeight: 600,
          letterSpacing: 0.5,
        }}>
          {["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"].map((tech, i, arr) => (
            <div key={tech} style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <span style={{ color: "#818cf8" }}>{tech}</span>
              {i < arr.length - 1 && (
                <span style={{ color: "#4338ca", fontSize: 14 }}>◆</span>
              )}
            </div>
          ))}
        </div>

      </div>
    ),
    {
      width:  1200,
      height: 630,
    }
  );
}
