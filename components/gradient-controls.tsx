"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { GradientConfig, GradientType } from "@/lib/types";

interface GradientControlsProps {
  gradient: GradientConfig;
  onTypeChange: (type: GradientType) => void;
  onAngleChange: (angle: number) => void;
  onGlassEffectChange: (effect: Partial<GradientConfig["glassEffect"]>) => void;
}

export const GradientControls = memo(function GradientControls({
  gradient,
  onTypeChange,
  onAngleChange,
  onGlassEffectChange,
}: GradientControlsProps) {
  const renderGlassControls = () => (
    <div className="space-y-6 pt-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-foreground">
            Blur Amount
          </Label>
          <span className="text-sm text-muted-foreground">
            {gradient.glassEffect.blur}px
          </span>
        </div>
        <Slider
          value={[gradient.glassEffect.blur]}
          onValueChange={([value]) => onGlassEffectChange({ blur: value })}
          min={0}
          max={20}
          step={1}
          className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-foreground">
            Glass Opacity
          </Label>
          <span className="text-sm text-muted-foreground">
            {gradient.glassEffect.opacity}%
          </span>
        </div>
        <Slider
          value={[gradient.glassEffect.opacity]}
          onValueChange={([value]) => onGlassEffectChange({ opacity: value })}
          min={0}
          max={100}
          step={1}
          className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-foreground">
            Saturation
          </Label>
          <span className="text-sm text-muted-foreground">
            {gradient.glassEffect.saturation}%
          </span>
        </div>
        <Slider
          value={[gradient.glassEffect.saturation]}
          onValueChange={([value]) =>
            onGlassEffectChange({ saturation: value })
          }
          min={0}
          max={200}
          step={1}
          className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Switch
              checked={gradient.glassEffect.border}
              onCheckedChange={(checked) =>
                onGlassEffectChange({ border: checked })
              }
              className="data-[state=checked]:bg-primary"
            />
            <Label className="text-sm font-medium text-foreground">
              Border
            </Label>
          </div>
          {gradient.glassEffect.border && (
            <div className="flex items-center gap-2">
              <Slider
                value={[gradient.glassEffect.borderOpacity]}
                onValueChange={([value]) =>
                  onGlassEffectChange({ borderOpacity: value })
                }
                min={0}
                max={100}
                step={1}
                className="w-24 [&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
              />
              <span className="text-sm text-muted-foreground">
                {gradient.glassEffect.borderOpacity}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          checked={gradient.glassEffect.shadow}
          onCheckedChange={(checked) =>
            onGlassEffectChange({ shadow: checked })
          }
          className="data-[state=checked]:bg-primary"
        />
        <Label className="text-sm font-medium text-foreground">Shadow</Label>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <Tabs
        value={gradient.type}
        onValueChange={(value) => onTypeChange(value as GradientType)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger
            value="linear"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Linear
          </TabsTrigger>
          <TabsTrigger
            value="radial"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Radial
          </TabsTrigger>
          <TabsTrigger
            value="glass"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Glass
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {gradient.type === "linear" && (
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium text-foreground">Angle</Label>
          <Input
            type="number"
            value={gradient.angle}
            onChange={(e) => onAngleChange(+e.target.value)}
            className="w-20 bg-muted/50 border-primary/20 focus:border-primary"
          />
        </div>
      )}

      {gradient.type === "glass" && renderGlassControls()}
    </div>
  );
});
