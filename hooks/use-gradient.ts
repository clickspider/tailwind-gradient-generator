"use client";

import { useState, useMemo, useCallback } from "react";
import { GradientConfig, ColorStop, GlassEffect } from "@/lib/types";

const defaultGlassEffect: GlassEffect = {
  enabled: true,
  blur: 16,
  saturation: 150,
  opacity: 15,
  border: true,
  borderOpacity: 20,
  shadow: true,
};

const defaultGradient: GradientConfig = {
  type: "linear",
  angle: 90,
  colorStops: [
    { color: "#3b82f6", position: 0, opacity: 1 },
    { color: "#8b5cf6", position: 100, opacity: 1 },
  ],
  glassEffect: defaultGlassEffect,
};

export function useGradient() {
  const [gradient, setGradient] = useState<GradientConfig>(defaultGradient);

  const sortedColorStops = useMemo(() => {
    return [...gradient.colorStops].sort((a, b) => a.position - b.position);
  }, [gradient.colorStops]);

  const updateColorStop = useCallback(
    (index: number, stop: Partial<ColorStop>) => {
      setGradient((prev) => {
        const newStops = [...prev.colorStops];
        newStops[index] = { ...newStops[index], ...stop };

        // Only sort if position changed
        if ("position" in stop) {
          newStops.sort((a, b) => a.position - b.position);
        }

        return {
          ...prev,
          colorStops: newStops,
        };
      });
    },
    []
  );

  const addColorStop = useCallback(() => {
    if (gradient.colorStops.length >= 5) return;

    const newStop: ColorStop = {
      color: "#000000",
      position: 50,
      opacity: 1,
    };

    setGradient((prev) => ({
      ...prev,
      colorStops: [...prev.colorStops, newStop].sort(
        (a, b) => a.position - b.position
      ),
    }));
  }, [gradient.colorStops.length]);

  const removeColorStop = useCallback(
    (index: number) => {
      if (gradient.colorStops.length <= 2) return;

      setGradient((prev) => ({
        ...prev,
        colorStops: prev.colorStops.filter((_, i) => i !== index),
      }));
    },
    [gradient.colorStops.length]
  );

  const updateGradientType = useCallback((type: GradientConfig["type"]) => {
    setGradient((prev) => ({ ...prev, type }));
  }, []);

  const updateAngle = useCallback((angle: number) => {
    setGradient((prev) => ({ ...prev, angle }));
  }, []);

  const updateGlassEffect = useCallback((effect: Partial<GlassEffect>) => {
    setGradient((prev) => ({
      ...prev,
      glassEffect: { ...prev.glassEffect, ...effect },
    }));
  }, []);

  const setGradientConfig = useCallback((config: GradientConfig) => {
    setGradient({
      ...config,
      glassEffect: {
        ...defaultGlassEffect,
        ...config.glassEffect,
      },
    });
  }, []);

  return {
    gradient,
    sortedColorStops,
    updateColorStop,
    addColorStop,
    removeColorStop,
    updateGradientType,
    updateAngle,
    updateGlassEffect,
    setGradient: setGradientConfig,
  };
}
