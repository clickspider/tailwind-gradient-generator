import type { GradientConfig } from "./types";

export function generateCSS(gradient: GradientConfig): string {
  if (gradient.type === "glass") {
    const { blur, opacity, saturation, border, borderOpacity, shadow } =
      gradient.glassEffect;

    // Generate the base gradient from color stops
    const baseGradient = generateBaseGradient({
      ...gradient,
      type: "linear",
      angle: 135,
      colorStops: gradient.colorStops.map((stop) => ({
        ...stop,
        opacity: stop.opacity * (opacity / 100), // Apply glass opacity to colors
      })),
    });

    return baseGradient;
  }

  return generateBaseGradient(gradient);
}

function generateBaseGradient(gradient: GradientConfig): string {
  const stops = gradient.colorStops
    .map((stop) => {
      const color = stop.color;
      const rgba = `rgba(${hexToRgb(color)}, ${stop.opacity})`;
      return `${rgba} ${stop.position}%`;
    })
    .join(", ");

  if (gradient.type === "linear") {
    return `linear-gradient(${gradient.angle}deg, ${stops})`;
  }

  return `radial-gradient(circle at center, ${stops})`;
}

export function generateTailwindClass(gradient: GradientConfig): string {
  if (gradient.type === "glass") {
    const { blur, opacity, saturation, border, borderOpacity, shadow } =
      gradient.glassEffect;

    const classes = [
      "backdrop-blur-[var(--glass-blur)]",
      "backdrop-saturate-[var(--glass-saturation)]",
    ];

    if (border) {
      classes.push(
        "border",
        "border-white/[var(--glass-border-opacity)]",
        "rounded-lg"
      );
    }

    if (shadow) {
      classes.push("shadow-lg", "shadow-black/10");
    }

    // Generate gradient classes from color stops
    const gradientStops = gradient.colorStops.map((stop) => ({
      ...stop,
      opacity: stop.opacity * (opacity / 100),
    }));

    const gradientClass = `bg-[linear-gradient(135deg,${gradientStops
      .map(
        (stop) =>
          `rgba(${hexToRgb(stop.color)},${stop.opacity})_${stop.position}%`
      )
      .join(",")})]`;

    classes.push(gradientClass);

    const cssVars = [
      `--glass-blur: ${blur}px`,
      `--glass-saturation: ${saturation}%`,
      `--glass-border-opacity: ${borderOpacity / 100}`,
    ];

    return `${classes.join(" ")} [&]:${cssVars.join(";")}`;
  }

  const stops = gradient.colorStops
    .map((stop) => {
      const color = stop.color;
      const rgba = `rgba(${hexToRgb(color)}, ${stop.opacity})`;
      return `${rgba} ${stop.position}%`;
    })
    .join(",");

  if (gradient.type === "linear") {
    return `bg-[linear-gradient(${gradient.angle}deg,${stops})]`;
  }

  return `bg-[radial-gradient(circle_at_center,${stops})]`;
}

export function generateSVG(
  gradient: GradientConfig,
  width: number,
  height: number
): string {
  const defs =
    gradient.type === "glass"
      ? generateGlassSVGDefs(gradient, width, height)
      : generateGradientSVGDefs(gradient);

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>${defs}</defs>
      <rect width="100%" height="100%" fill="url(#gradient)" filter="${
        gradient.type === "glass" ? "url(#glass)" : ""
      }" />
    </svg>
  `;
}

function generateGlassSVGDefs(
  gradient: GradientConfig,
  width: number,
  height: number
): string {
  const { blur, opacity, saturation, border, borderOpacity, shadow } =
    gradient.glassEffect;

  const gradientStops = gradient.colorStops.map((stop) => ({
    ...stop,
    opacity: stop.opacity * (opacity / 100),
  }));

  let filters = `
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      ${gradientStops
        .map(
          (stop) =>
            `<stop offset="${stop.position}%" style="stop-color:${stop.color};stop-opacity:${stop.opacity}" />`
        )
        .join("\n      ")}
    </linearGradient>
    <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="${blur}" />
      <feColorMatrix type="saturate" values="${saturation / 100}" />
      <feComposite in="SourceGraphic" operator="over" />
    </filter>
  `;

  if (shadow) {
    filters += `
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.1)" />
      </filter>
    `;
  }

  return filters;
}

function generateGradientSVGDefs(gradient: GradientConfig): string {
  const stops = gradient.colorStops
    .map(
      (stop) =>
        `<stop offset="${stop.position}%" style="stop-color:${stop.color};stop-opacity:${stop.opacity}" />`
    )
    .join("");

  if (gradient.type === "linear") {
    return `
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(${gradient.angle},0.5,0.5)">
        ${stops}
      </linearGradient>
    `;
  }

  return `
    <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      ${stops}
    </radialGradient>
  `;
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0,0,0";

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `${r},${g},${b}`;
}
