"use client";

import { memo, useState } from "react";
import { gradientPresets } from "@/lib/gradient-presets";
import { GradientConfig } from "@/lib/types";
import { generateCSS } from "@/lib/gradient";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function CursorLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69 13"
      fill="currentColor"
    >
      <path d="M.61621 6.43836c0-3.50869 2.23066-5.4743 5.49005-5.4743h3.91414v2.09026H6.23091c-1.99579 0-3.35255 1.13895-3.35255 3.38404 0 2.2451 1.35676 3.38404 3.35255 3.38404h3.78949v2.0903H6.10626c-3.25939 0-5.49005-1.99582-5.49005-5.47434ZM12.0472 8.41982V.96549h2.1834v7.00164c0 1.35676.702 1.83964 1.8554 1.83964h1.3095c1.139 0 1.8554-.48288 1.8554-1.83964V.96549h2.1677v7.47008c0 2.35533-1.5588 3.47723-3.6648 3.47723h-2.0273c-2.1205 0-3.6806-1.1232-3.6806-3.49298h.0013ZM23.7734.96549h6.4716c2.2149 0 3.3223 1.18487 3.3223 3.08749 0 1.21636-.5773 2.19917-1.4971 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378H31.275V8.65338c0-.57734-.1719-.9828-.9513-.9828h-4.3511v4.24222h-2.1992V.96548Zm6.1763 4.66338c.9986 0 1.404-.53011 1.404-1.30952 0-.84241-.4054-1.29379-1.4341-1.29379h-3.9457v2.60463h3.9772l-.0014-.00132ZM35.5162 9.83815h6.0359c.7334 0 1.2006-.40545 1.2006-1.13895 0-.76367-.4829-1.06022-1.2479-1.1232l-3.0416-.23356c-1.9183-.1404-3.2278-1.10746-3.2278-3.16623 0-2.04302 1.4499-3.21214 3.3525-3.21214h5.9729v2.07451h-5.8482c-.8424 0-1.2794.40545-1.2794 1.1232 0 .74793.4684 1.06022 1.2951 1.13895l3.0875.21781c1.8869.14041 3.1347 1.13895 3.1347 3.15048 0 1.93408-1.3252 3.24368-3.2436 3.24368h-6.1921V9.83815h.0014ZM46.0576 6.42277c0-3.32237 2.4013-5.64488 5.6147-5.64488h.0315c3.2122 0 5.6305 2.32382 5.6305 5.64488 0 3.3368-2.417 5.67633-5.6305 5.67633h-.0315c-3.2121 0-5.6147-2.33953-5.6147-5.67633Zm5.6305 3.55593c1.98 0 3.4312-1.404 3.4312-3.54018 0-2.12044-1.4499-3.54019-3.4312-3.54019-1.9656 0-3.4156 1.41975-3.4156 3.54019 0 2.13618 1.45 3.54018 3.4156 3.54018ZM59.0635.96549h6.4715c2.2149 0 3.3224 1.18487 3.3224 3.08749 0 1.21636-.5774 2.19917-1.4972 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378h-2.1991V8.65338c0-.57734-.1719-.9828-.9514-.9828h-4.3511v4.24222h-2.1991V.96548Zm6.1763 4.66338c.9985 0 1.404-.53011 1.404-1.30952 0-.84241-.4055-1.29379-1.4342-1.29379H61.264v2.60463h3.9771l-.0013-.00132Z"></path>
    </svg>
  );
}

function SupabaseLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109 113"
      fill="currentColor"
    >
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#paint1_linear)"
        fillOpacity="0.2"
      />
      <path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="53.9738"
          y1="54.974"
          x2="94.1635"
          y2="71.8295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="36.1558"
          y1="30.578"
          x2="54.4844"
          y2="65.0806"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NeonLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 102 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#12FFF7"
        fillRule="evenodd"
        d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
        clipRule="evenodd"
      />
      <path
        fill="url(#neon_a)"
        fillRule="evenodd"
        d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
        clipRule="evenodd"
      />
      <path
        fill="url(#neon_b)"
        fillRule="evenodd"
        d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172zm4.851-.966a.97.97 0 0 0-.97.966v18.344c0 .534.435.966.97.966h8.539c.268 0 .34-.216.34-.483v-11.07c0-2.76 3.507-3.956 5.208-1.779l5.319 6.809V4.828c0-.534.05-.966-.485-.966z"
        clipRule="evenodd"
      />
      <path
        fill="#B9FFB3"
        d="M23.287 0c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.319-6.809v8.256c0 2.4-1.954 4.345-4.366 4.345a.484.484 0 0 0 .485-.483V12.584c0-2.758 3.508-3.955 5.21-1.777l5.318 6.808V.965a.97.97 0 0 0-.97-.965"
      />
      <path
        fill="currentColor"
        d="M48.112 7.432v8.032l-7.355-8.032H36.93v13.136h3.49v-8.632l8.01 8.632h3.173V7.432zM58.075 17.64v-2.326h7.815v-2.797h-7.815V10.36h9.48V7.432H54.514v13.136H67.75v-2.927zM77.028 21c4.909 0 8.098-2.552 8.098-7s-3.19-7-8.098-7c-4.91 0-8.081 2.552-8.081 7s3.172 7 8.08 7m0-3.115c-2.73 0-4.413-1.408-4.413-3.885s1.701-3.885 4.413-3.885c2.729 0 4.412 1.408 4.412 3.885s-1.683 3.885-4.412 3.885M98.508 7.432v8.032l-7.355-8.032h-3.828v13.136h3.491v-8.632l8.01 8.632H102V7.432z"
      />
      <defs>
        <linearGradient
          id="neon_a"
          x1="28.138"
          x2="3.533"
          y1="28"
          y2="-.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B9FFB3" />
          <stop offset="1" stopColor="#B9FFB3" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="neon_b"
          x1="28.138"
          x2="11.447"
          y1="28"
          y2="21.476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A1A1A" stopOpacity=".9" />
          <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface GradientPresetsProps {
  onSelect: (preset: GradientConfig) => void;
  currentType: GradientConfig["type"];
}

const companyLogos: Record<
  string,
  {
    src?: string;
    invert?: boolean;
    component?: React.ComponentType<{ className?: string }>;
  }
> = {
  vercel: {
    src: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png",
    invert: true,
  },
  supabase: {
    component: SupabaseLogo,
  },
  neon: {
    component: NeonLogo,
  },
  cursor: {
    component: CursorLogo,
  },
  spotify: {
    src: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
  },
};

export const GradientPresets = memo(function GradientPresets({
  onSelect,
  currentType,
}: GradientPresetsProps) {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const presetCategories = {
    "Tech Companies": [
      "vercel",
      "supabase",
      "neon",
      "neonAccent",
      "cursor",
      "spotify",
    ],
    "Glass Effects": [
      "frostGlass",
      "coloredGlass",
      "modernGlass",
      "rainbowGlass",
    ],
    "Popular Colors": ["sunset", "ocean", "aurora", "midnight"],
    "Modern Trends": ["modernPurple", "cyberpunk"],
  };

  const formatPresetName = (name: string) => {
    return name
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .replace("Accent", "(Accent)");
  };

  const handleSelect = (presetName: string, preset: GradientConfig) => {
    setSelectedPreset(presetName);
    onSelect(preset);
  };

  const renderPresetContent = (presetName: string, category: string) => {
    if (category === "Tech Companies" && companyLogos[presetName]) {
      const logo = companyLogos[presetName];

      if (logo.component) {
        const LogoComponent = logo.component;
        return (
          <div className="relative h-8 w-32 flex items-center justify-center">
            <LogoComponent className="text-white h-full" />
          </div>
        );
      }

      if (logo.src) {
        return (
          <div className={cn("relative h-8 w-32", logo.invert && "invert")}>
            <Image
              src={logo.src}
              alt={`${formatPresetName(presetName)} logo`}
              fill
              className="object-contain"
            />
          </div>
        );
      }
    }

    return (
      <div className="relative text-sm font-medium px-4 py-2 rounded-full bg-black/60 text-white backdrop-blur-sm shadow-sm">
        {formatPresetName(presetName)}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Gradient Presets</h3>
      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-8">
          {Object.entries(presetCategories).map(([category, presetNames]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-base font-medium text-muted-foreground/80">
                {category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {presetNames.map((presetName) => {
                  const preset = gradientPresets[presetName];
                  const isSelected = selectedPreset === presetName;
                  return (
                    <Button
                      key={presetName}
                      variant="outline"
                      className={cn(
                        "h-32 relative overflow-hidden transition-all duration-200",
                        "border rounded-xl shadow-sm hover:shadow-md",
                        !isSelected &&
                          "border-transparent hover:border-[#FF2D6C]/20",
                        isSelected && "border-[#FF2D6C] border-2 shadow-lg"
                      )}
                      onClick={() => handleSelect(presetName, preset)}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: generateCSS(preset),
                        }}
                      />
                      {renderPresetContent(presetName, category)}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
});
