"use client";

import { memo, useState } from "react";
import { GradientConfig } from "@/lib/types";
import { generateCSS } from "@/lib/gradient";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Smartphone, Monitor, Square } from "lucide-react";
import { Button } from "./ui/button";

interface GradientPreviewProps {
  gradient: GradientConfig;
  className?: string;
}

const previewModes = [
  { id: "simple", icon: Square, label: "Simple" },
  { id: "device", icon: Smartphone, label: "Device" },
  { id: "ui", icon: Monitor, label: "UI" },
] as const;

export const GradientPreview = memo(function GradientPreview({
  gradient,
  className = "",
}: GradientPreviewProps) {
  const [mode, setMode] =
    useState<(typeof previewModes)[number]["id"]>("simple");
  const backgroundValue = generateCSS(gradient);

  const getGlassStyles = () => {
    if (gradient.type !== "glass") return {};
    const { blur, saturation, border, borderOpacity, shadow } =
      gradient.glassEffect;

    return {
      background: backgroundValue,
      backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
      border: border
        ? `1px solid rgba(255, 255, 255, ${borderOpacity / 100})`
        : "none",
      boxShadow: shadow ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none",
    };
  };

  const renderPreview = () => {
    switch (mode) {
      case "device":
        return (
          <div className="relative w-full aspect-[9/16] max-w-[300px] mx-auto">
            <div className="absolute inset-0 rounded-[3rem] border-[8px] border-gray-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl" />
              <motion.div
                className="w-full h-full"
                style={
                  gradient.type === "glass"
                    ? getGlassStyles()
                    : { background: backgroundValue }
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full" />
            </div>
          </div>
        );

      case "ui":
        return (
          <div className="w-full aspect-video max-w-[600px] mx-auto p-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            <motion.div
              className="w-full h-24 rounded-xl mb-8"
              style={
                gradient.type === "glass"
                  ? getGlassStyles()
                  : { background: backgroundValue }
              }
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="space-y-4">
              <motion.div
                className="w-3/4 h-12 rounded-lg bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <motion.div
                className="w-1/2 h-12 rounded-lg bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl" />
            <motion.div
              className="absolute inset-0 rounded-2xl shadow-lg overflow-hidden"
              style={
                gradient.type === "glass"
                  ? getGlassStyles()
                  : { background: backgroundValue }
              }
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        );
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-center gap-2">
        {previewModes.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant={mode === id ? "default" : "outline"}
            size="sm"
            onClick={() => setMode(id)}
            className="flex items-center gap-2"
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{label}</span>
          </Button>
        ))}
      </div>

      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderPreview()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
