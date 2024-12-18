export interface ColorStop {
  color: string;
  position: number;
  opacity: number;
}

export interface GlassEffect {
  enabled: boolean;
  blur: number;
  saturation: number;
  opacity: number;
  border: boolean;
  borderOpacity: number;
  shadow: boolean;
}

export interface GradientConfig {
  type: "linear" | "radial" | "glass";
  angle: number;
  colorStops: ColorStop[];
  glassEffect: GlassEffect;
}

export interface ExportConfig {
  width: number;
  height: number;
  transparent: boolean;
  resolution: number;
}

export type GradientType = "linear" | "radial" | "glass";
