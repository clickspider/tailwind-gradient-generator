import { GradientConfig } from "./types";

const defaultGlassEffect = {
  enabled: true,
  blur: 16,
  saturation: 150,
  opacity: 15,
  border: true,
  borderOpacity: 20,
  shadow: true,
};

export const gradientPresets: Record<string, GradientConfig> = {
  // Modern Tech Companies
  vercel: {
    type: "linear",
    angle: 45,
    colorStops: [
      { color: "#000000", position: 0, opacity: 1 },
      { color: "#323232", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  supabase: {
    type: "linear",
    angle: 45,
    colorStops: [
      { color: "#133B54", position: 0, opacity: 1 },
      { color: "#1C5F3C", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  neon: {
    type: "linear",
    angle: 160,
    colorStops: [
      { color: "#111111", position: 0, opacity: 1 },
      { color: "#0D1117", position: 60, opacity: 1 },
      { color: "#171C2B", position: 100, opacity: 1 },
    ],
    glassEffect: {
      ...defaultGlassEffect,
      enabled: true,
      blur: 12,
      saturation: 110,
      opacity: 8,
      border: false,
      shadow: true,
    },
  },
  neonAccent: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#00F0FF", position: 0, opacity: 0.15 },
      { color: "#00F0FF", position: 100, opacity: 0.05 },
    ],
    glassEffect: {
      ...defaultGlassEffect,
      blur: 40,
      saturation: 150,
      opacity: 10,
      border: false,
      shadow: true,
    },
  },
  cursor: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#7C3AED", position: 0, opacity: 1 }, // Vivid purple
      { color: "#DB2777", position: 50, opacity: 1 }, // Pink
      { color: "#059669", position: 100, opacity: 1 }, // Rich green
    ],
    glassEffect: defaultGlassEffect,
  },

  // Modern Glass Effects
  frostGlass: {
    type: "glass",
    angle: 135,
    colorStops: [
      { color: "#FFFFFF", position: 0, opacity: 0.1 },
      { color: "#FFFFFF", position: 100, opacity: 0.2 },
    ],
    glassEffect: {
      ...defaultGlassEffect,
      blur: 12,
      saturation: 120,
      opacity: 10,
    },
  },
  coloredGlass: {
    type: "glass",
    angle: 135,
    colorStops: [
      { color: "#3B82F6", position: 0, opacity: 0.1 },
      { color: "#8B5CF6", position: 100, opacity: 0.15 },
    ],
    glassEffect: {
      ...defaultGlassEffect,
      blur: 8,
      saturation: 140,
      opacity: 12,
    },
  },

  // Popular Color Combinations
  sunset: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#FF512F", position: 0, opacity: 1 },
      { color: "#F09819", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  ocean: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#2193b0", position: 0, opacity: 1 },
      { color: "#6dd5ed", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  aurora: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#85FFBD", position: 0, opacity: 1 },
      { color: "#FFFB7D", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  midnight: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#0F2027", position: 0, opacity: 1 },
      { color: "#203A43", position: 50, opacity: 1 },
      { color: "#2C5364", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },

  // Modern UI Trends
  modernPurple: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#7928CA", position: 0, opacity: 1 },
      { color: "#FF0080", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  cyberpunk: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#FF00E5", position: 0, opacity: 1 },
      { color: "#00F0FF", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },
  spotify: {
    type: "linear",
    angle: 135,
    colorStops: [
      { color: "#1DB954", position: 0, opacity: 1 },
      { color: "#191414", position: 100, opacity: 1 },
    ],
    glassEffect: defaultGlassEffect,
  },

  // Glass Morphism
  modernGlass: {
    type: "glass",
    angle: 135,
    colorStops: [
      { color: "#FFFFFF", position: 0, opacity: 0.1 },
      { color: "#000000", position: 100, opacity: 0.05 },
    ],
    glassEffect: {
      ...defaultGlassEffect,
      blur: 16,
      saturation: 180,
      opacity: 8,
      borderOpacity: 15,
    },
  },
  rainbowGlass: {
    type: "glass",
    angle: 135,
    colorStops: [
      { color: "#FF0000", position: 0, opacity: 0.1 },
      { color: "#00FF00", position: 50, opacity: 0.1 },
      { color: "#0000FF", position: 100, opacity: 0.1 },
    ],
    glassEffect: {
      ...defaultGlassEffect,
      blur: 12,
      saturation: 160,
      opacity: 10,
    },
  },
};
