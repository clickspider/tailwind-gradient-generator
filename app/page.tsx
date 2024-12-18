import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { GradientGenerator } from "@/components/gradient-generator";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Tailwind CSS Gradient Generator | Create Beautiful Gradients",
  description:
    "Create beautiful gradients with our intuitive generator. Export as Tailwind CSS, raw CSS, or download as PNG/SVG. Perfect for modern web design.",
  keywords: [
    "tailwind css",
    "gradient generator",
    "css gradients",
    "web design",
    "tailwind generator",
    "css generator",
    "design tools",
  ],
  authors: [{ name: "Daniel Frey", url: "https://github.com/clickspider" }],
  openGraph: {
    title: "Tailwind CSS Gradient Generator",
    description:
      "Create beautiful gradients with our intuitive generator. Export as Tailwind CSS, raw CSS, or download as PNG/SVG.",
    type: "website",
    url: "https://gradient.tailwindcss.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind CSS Gradient Generator",
    description:
      "Create beautiful gradients with our intuitive generator. Export as Tailwind CSS, raw CSS, or download as PNG/SVG.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 relative">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <GradientGenerator />
      <Footer />
    </main>
  );
}
