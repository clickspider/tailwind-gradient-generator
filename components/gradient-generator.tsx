"use client";

import { useGradient } from "@/hooks/use-gradient";
import { GradientPreview } from "./gradient-preview";
import { GradientControls } from "./gradient-controls";
import { ColorStopList } from "./color-stop-list";
import { GradientOutput } from "./gradient-output";
import { GradientPresets } from "./gradient-presets";
import { Card } from "./ui/card";
import { motion, useAnimation } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useExportConfig } from "@/hooks/use-export-config";
import {
  generateTailwindClass,
  generateCSS,
  generateSVG,
} from "@/lib/gradient";
import {
  Copy,
  Download,
  Code2,
  FileCode2,
  ImageIcon,
  CheckCircle2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";

function InteractiveParticles({ gradient }: { gradient: any }) {
  const [particles, setParticles] = useState<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }>
  >([]);
  const controls = useAnimation();

  useEffect(() => {
    // Create particles with colors from the gradient
    const colors = gradient.colorStops.map((stop: any) => stop.color);
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);

    // Animate particles
    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y:
            (particle.y + particle.vy + window.innerHeight) %
            window.innerHeight,
        }))
      );
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [gradient.colorStops]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: particle.size,
            height: particle.size,
            x: particle.x,
            y: particle.y,
            background: particle.color,
            opacity: 0.3,
            filter: "blur(4px)",
          }}
          animate={controls}
        />
      ))}
    </div>
  );
}

export function GradientGenerator() {
  const {
    gradient,
    sortedColorStops,
    updateColorStop,
    addColorStop,
    removeColorStop,
    updateGradientType,
    updateAngle,
    updateGlassEffect,
    setGradient,
  } = useGradient();

  const { toast } = useToast();
  const { config } = useExportConfig();

  const [activeTab, setActiveTab] = useState<"customize" | "presets">(
    "customize"
  );
  const [copiedStates, setCopiedStates] = useState({
    tailwind: false,
    css: false,
  });

  const copyToClipboard = async (text: string, type: "tailwind" | "css") => {
    await navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [type]: false }));
    }, 2000);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  const downloadSVG = () => {
    const svg = generateSVG(gradient, config.width, config.height);
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gradient.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded SVG",
      description: "Your gradient has been downloaded as an SVG file.",
    });
  };

  const downloadPNG = async () => {
    const svg = generateSVG(gradient, config.width, config.height);
    const img = new Image();
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = config.width * config.resolution;
      canvas.height = config.height * config.resolution;
      const ctx = canvas.getContext("2d")!;

      if (!config.transparent) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "gradient.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({
        title: "Downloaded PNG",
        description: "Your gradient has been downloaded as a PNG file.",
      });
    };

    img.src = url;
  };

  const tailwindCode = generateTailwindClass(gradient);
  const cssCode = `background: ${generateCSS(gradient)}`;

  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      {/* Dynamic Background */}
      <div
        className={cn(
          "gradient-background",
          gradient.type === "glass" && "glass"
        )}
        style={{
          background: generateCSS(gradient),
        }}
      />

      {/* Interactive Particles */}
      <InteractiveParticles gradient={gradient} />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl">
            {/* Softer card inner glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-y-0 left-0 w-[500px] bg-[#8b5cf6]/10 rounded-full blur-[100px] -translate-x-1/2" />
              <div className="absolute inset-y-0 right-0 w-[500px] bg-[#8b5cf6]/10 rounded-full blur-[100px] translate-x-1/2" />
            </div>

            {/* Subtle grid overlay */}

            <div className="p-8 space-y-8">
              {/* Main Grid */}
              <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
                {/* Left Column - Controls */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-lighter">
                      Customize Your Gradient
                    </h2>
                    <p className="text-muted-foreground">
                      Choose from our presets or create your own perfect
                      gradient.
                    </p>
                  </div>

                  <Tabs
                    value={activeTab}
                    onValueChange={(v) => setActiveTab(v as typeof activeTab)}
                    className="relative"
                  >
                    <TabsList className="grid w-full grid-cols-2 relative bg-muted/50">
                      <TabsTrigger
                        value="customize"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Customize
                      </TabsTrigger>
                      <TabsTrigger
                        value="presets"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Presets
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="customize" className="space-y-6 mt-6">
                      <GradientControls
                        gradient={gradient}
                        onTypeChange={updateGradientType}
                        onAngleChange={updateAngle}
                        onGlassEffectChange={updateGlassEffect}
                      />
                      <ColorStopList
                        colorStops={sortedColorStops}
                        onUpdate={updateColorStop}
                        onAdd={addColorStop}
                        onRemove={removeColorStop}
                      />
                    </TabsContent>
                    <TabsContent value="presets" className="mt-6">
                      <GradientPresets
                        onSelect={setGradient}
                        currentType={gradient.type}
                      />
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Right Column - Preview and Export */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-lighter">
                      Preview & Export
                    </h2>
                    <p className="text-muted-foreground">
                      See how your gradient looks and export it in your
                      preferred format.
                    </p>
                  </div>

                  {/* Quick Export Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-2">
                        {/* Tailwind Button */}
                        <Tooltip>
                          <Popover>
                            <PopoverTrigger asChild>
                              <TooltipTrigger asChild>
                                <Button
                                  onClick={() =>
                                    copyToClipboard(tailwindCode, "tailwind")
                                  }
                                  className="hover:scale-105 transition-transform bg-primary/10 hover:bg-primary/20 text-primary flex items-center gap-2"
                                >
                                  {copiedStates.tailwind ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <Code2 className="h-4 w-4" />
                                  )}
                                  Copy Tailwind Class
                                </Button>
                              </TooltipTrigger>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-2" side="top">
                              <div className="space-y-2">
                                <div className="text-sm font-medium">
                                  Preview:
                                </div>
                                <pre className="bg-muted/50 p-2 rounded-md text-xs overflow-x-auto">
                                  {tailwindCode}
                                </pre>
                              </div>
                            </PopoverContent>
                          </Popover>
                          <TooltipContent>
                            <p>Click to copy Tailwind class</p>
                          </TooltipContent>
                        </Tooltip>

                        {/* CSS Button */}
                        <Tooltip>
                          <Popover>
                            <PopoverTrigger asChild>
                              <TooltipTrigger asChild>
                                <Button
                                  onClick={() =>
                                    copyToClipboard(cssCode, "css")
                                  }
                                  className="hover:scale-105 transition-transform bg-primary/10 hover:bg-primary/20 text-primary flex items-center gap-2"
                                >
                                  {copiedStates.css ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <FileCode2 className="h-4 w-4" />
                                  )}
                                  Copy CSS
                                </Button>
                              </TooltipTrigger>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-2" side="top">
                              <div className="space-y-2">
                                <div className="text-sm font-medium">
                                  Preview:
                                </div>
                                <pre className="bg-muted/50 p-2 rounded-md text-xs overflow-x-auto">
                                  {cssCode}
                                </pre>
                              </div>
                            </PopoverContent>
                          </Popover>
                          <TooltipContent>
                            <p>Click to copy CSS code</p>
                          </TooltipContent>
                        </Tooltip>

                        {/* SVG Button */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={downloadSVG}
                              className="hover:scale-105 transition-transform bg-primary/10 hover:bg-primary/20 text-primary flex items-center gap-2"
                            >
                              <Download className="h-4 w-4" />
                              Download SVG
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Download as SVG vector file</p>
                          </TooltipContent>
                        </Tooltip>

                        {/* PNG Button */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={downloadPNG}
                              className="hover:scale-105 transition-transform bg-primary/10 hover:bg-primary/20 text-primary flex items-center gap-2"
                            >
                              <ImageIcon className="h-4 w-4" />
                              Download PNG
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Download as PNG image</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </div>

                  {/* Preview Area */}
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                    <GradientPreview gradient={gradient} />
                  </div>

                  {/* Advanced Export Options */}
                  <div className="pt-4 border-t border-primary/20">
                    <GradientOutput gradient={gradient} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
