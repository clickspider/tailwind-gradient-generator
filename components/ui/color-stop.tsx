"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Slider } from "./slider";
import { X } from "lucide-react";
import { ColorStop } from "@/lib/types";

interface ColorStopProps {
  stop: ColorStop;
  canRemove: boolean;
  onUpdate: (stop: Partial<ColorStop>) => void;
  onRemove: () => void;
}

export function ColorStop({
  stop,
  canRemove,
  onUpdate,
  onRemove,
}: ColorStopProps) {
  const [localColor, setLocalColor] = useState(stop.color);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalColor(e.target.value);
  };

  const handleColorBlur = () => {
    onUpdate({ color: localColor });
  };

  const handlePositionChange = ([value]: number[]) => {
    onUpdate({ position: value });
  };

  const handleOpacityChange = ([value]: number[]) => {
    onUpdate({ opacity: value });
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20">
      <Input
        type="color"
        value={localColor}
        onChange={handleColorChange}
        onBlur={handleColorBlur}
        className="w-12 h-12 p-1 rounded bg-muted/50 border-primary/20 focus:border-primary cursor-pointer"
      />
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium text-foreground min-w-[60px]">
            Position
          </Label>
          <Slider
            value={[stop.position]}
            min={0}
            max={100}
            step={1}
            onValueChange={handlePositionChange}
            className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
          />
          <span className="text-sm text-muted-foreground min-w-[40px] text-right">
            {stop.position}%
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium text-foreground min-w-[60px]">
            Opacity
          </Label>
          <Slider
            value={[stop.opacity]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={handleOpacityChange}
            className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
          />
          <span className="text-sm text-muted-foreground min-w-[40px] text-right">
            {Math.round(stop.opacity * 100)}%
          </span>
        </div>
      </div>
      {canRemove && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
