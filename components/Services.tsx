import { useRef } from "react";

const services = [
  {
    title: "Business Website",
    price: "$750",
    priceSuffix: "– $2,500",
    billingNote: "one-time",
    tagline: "Your brand online — fast, clean, and built to convert.",
    description:
      "A custom-designed, mobile-first website that establishes your presence and turns visitors into customers. No templates, no shortcuts.",
    features: [
      "Custom design (no templates)",
      "Up to 5 pages",
      "Contact form",
      "Mobile responsive",
      "SEO basics",
      "1 month of support",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    title: "Web Application",
    price: "$5,000",
    priceSuffix: "– $15,000",
    billingNote: "one-time",
    tagline: "A fully custom app built around your business logic.",
    description:
      "User accounts, dashboards, role-based access, and real business workflows — engineered from scratch for your specific needs.",
    features: [
      "Full-stack development",
      "User authentication & roles",
      "Custom database design",
      "Admin dashboard",
      "API integrations",
      "3 months of support",
    ],
    featured: true,
    cta: "Get Started",
    badge: "Most Popular",
  },
  {
    title: "Online Ordering System",
    price: "$4,500",
    priceSuffix: "– $10,000",
    billingNote: "one-time",
    tagline: "Take orders online — menus, payments, and real-time tracking.",
    description:
      "A complete ordering platform with menu management, cart, Stripe payments, and a live order dashboard for your team.",
    features: [
      "Menu management",
      "Cart & checkout",
      "Stripe payments",
      "Real-time order dashboard",
      "Order status updates",
      "3 months of support",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    title: "Ongoing Maintenance",
    price: "$200",
    priceSuffix: "– $500",
    billingNote: "per month",
    tagline: "Your app stays healthy. You stay focused.",
    description:
      "Bug fixes, dependency updates, small feature additions, and a developer you can actually reach when something breaks.",
    features: [
      "Bug fixes & patches",
      "Dependency updates",
      "Small feature additions",
      "Performance monitoring",
      "Priority response time",
      "Monthly check-in call",
    ],
    featured: false,
    cta: "Get Started",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "96px 24px",
        background: "var(--background, #0a0a0f)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p
          style={{
            color: "#6366f1",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Services & Pricing
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            margin: "0 auto 16px",
            maxWidth: "640px",
            lineHeight: 1.15,
          }}
        >
          Transparent pricing. Real results.
        </h2>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "17px",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Every project is scoped to your goals. These ranges reflect the value
          delivered — not just hours worked.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Footer note */}
      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
          marginTop: "48px",
        }}
      >
        Prices vary based on complexity and timeline.{" "}
        <a
          href="#contact"
          style={{
            color: "#6366f1",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Let's talk about your project
        </a>{" "}
        for an accurate quote.
      </p>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const {
    title,
    price,
    priceSuffix,
    billingNote,
    tagline,
    description,
    features,
    featured,
    cta,
    badge,
  } = service;

  return (
    <div
      style={{
        background: featured
          ? "linear-gradient(145deg, #4f46e5, #6366f1)"
          : "#111118",
        border: featured ? "none" : "1px solid #1f1f2e",
        borderRadius: "20px",
        padding: "36px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        position: "relative",
        boxShadow: featured
          ? "0 20px 60px rgba(99,102,241,0.35)"
          : "0 4px 24px rgba(0,0,0,0.3)",
        transform: featured ? "translateY(-8px)" : "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!featured) {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "#6366f1";
        }
      }}
      onMouseLeave={(e) => {
        if (!featured) {
          (e.currentTarget as HTMLDivElement).style.transform = "none";
          (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f2e";
        }
      }}
    >
      {/* Badge */}
      {badge && (
        <span
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            color: "#4f46e5",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          {badge}
        </span>
      )}

      {/* Title & Tagline */}
      <div>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: featured ? "#fff" : "#e5e7eb",
            margin: "0 0 6px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: featured ? "rgba(255,255,255,0.75)" : "#9ca3af",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {tagline}
        </p>
      </div>

      {/* Price */}
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 800,
              color: featured ? "#fff" : "#e5e7eb",
              letterSpacing: "-0.02em",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: featured ? "rgba(255,255,255,0.8)" : "#9ca3af",
            }}
          >
            {priceSuffix}
          </span>
        </div>
        <span
          style={{
            fontSize: "12px",
            color: featured ? "rgba(255,255,255,0.6)" : "#6b7280",
            fontWeight: 500,
          }}
        >
          {billingNote}
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: featured ? "rgba(255,255,255,0.15)" : "#1f1f2e",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: featured ? "rgba(255,255,255,0.82)" : "#9ca3af",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* Features */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              color: featured ? "rgba(255,255,255,0.9)" : "#d1d5db",
            }}
          >
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: featured ? "rgba(255,255,255,0.2)" : "rgba(99,102,241,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4l2.5 2.5L9 1"
                  stroke={featured ? "#fff" : "#6366f1"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        style={{
          marginTop: "auto",
          display: "block",
          textAlign: "center",
          padding: "14px",
          borderRadius: "10px",
          fontWeight: 600,
          fontSize: "15px",
          textDecoration: "none",
          background: featured ? "#fff" : "transparent",
          color: featured ? "#4f46e5" : "#6366f1",
          border: featured ? "none" : "1px solid #6366f1",
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          if (featured) {
            el.style.background = "#f0f0ff";
          } else {
            el.style.background = "#6366f1";
            el.style.color = "#fff";
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          if (featured) {
            el.style.background = "#fff";
          } else {
            el.style.background = "transparent";
            el.style.color = "#6366f1";
          }
        }}
      >
        {cta}
      </a>
    </div>
  );
}
