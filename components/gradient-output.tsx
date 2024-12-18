"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  generateTailwindClass,
  generateCSS,
  generateSVG,
} from "@/lib/gradient";
import { useExportConfig } from "@/hooks/use-export-config";
import type { GradientConfig } from "@/lib/types";

interface GradientOutputProps {
  gradient: GradientConfig;
}

export function GradientOutput({ gradient }: GradientOutputProps) {
  const { toast } = useToast();
  const { config, updateConfig } = useExportConfig();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Advanced Export Options</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Width (px)</Label>
          <Input
            type="number"
            value={config.width}
            onChange={(e) => updateConfig({ width: +e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Height (px)</Label>
          <Input
            type="number"
            value={config.height}
            onChange={(e) => updateConfig({ height: +e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Resolution (PNG only)</Label>
          <Input
            type="number"
            min="1"
            max="4"
            step="0.5"
            value={config.resolution}
            onChange={(e) => updateConfig({ resolution: +e.target.value })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={config.transparent}
            onCheckedChange={(checked) =>
              updateConfig({ transparent: checked })
            }
          />
          <Label>Transparent Background</Label>
        </div>
      </div>
    </div>
  );
}
