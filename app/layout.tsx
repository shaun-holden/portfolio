import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Inter from Google Fonts. Next.js downloads it at build time and
// self-hosts it — zero layout shift, no privacy concerns.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",       // show fallback font immediately while Inter loads
});

// ─── Open Graph / SEO ────────────────────────────────────────────────────────
// This controls what Google sees AND what shows up when you share the link
// on Slack, Twitter, LinkedIn, iMessage, etc.
export const metadata: Metadata = {
  title: "DeShaun Holden — Full-Stack Web Developer",
  description:
    "I build custom web apps for small businesses — ordering systems, invoicing tools, and booking platforms that save time and money.",
  keywords: [
    "full-stack developer",
    "web developer Atlanta",
    "React developer",
    "Node.js developer",
    "freelance web developer",
  ],
  authors: [{ name: "DeShaun Holden" }],
  openGraph: {
    title: "DeShaun Holden — Full-Stack Web Developer",
    description:
      "I build custom web apps for small businesses — ordering systems, invoicing tools, and booking platforms.",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://www.deshaunholden.com/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeShaun Holden — Full-Stack Web Developer",
    description:
      "I build custom web apps for small businesses — ordering systems, invoicing tools, and booking platforms.",
    images: ["https://www.deshaunholden.com/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="en" helps screen readers and search engines understand the language
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
