"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-24  overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Tailwind CSS Gradient Generator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Create beautiful gradients with our intuitive generator. Export as
            Tailwind CSS, raw CSS, or download as PNG/SVG.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
