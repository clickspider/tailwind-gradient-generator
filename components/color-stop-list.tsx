"use client";

import { memo } from "react";
import { ColorStop } from "@/components/ui/color-stop";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { ColorStop as ColorStopType } from "@/lib/types";

interface ColorStopListProps {
  colorStops: ColorStopType[];
  onUpdate: (index: number, stop: Partial<ColorStopType>) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}

export const ColorStopList = memo(function ColorStopList({
  colorStops,
  onUpdate,
  onAdd,
  onRemove,
}: ColorStopListProps) {
  return (
    <div className="space-y-2">
      {colorStops.map((stop, index) => (
        <ColorStop
          key={`${stop.color}-${stop.position}`}
          stop={stop}
          onUpdate={(newStop) => onUpdate(index, newStop)}
          onRemove={() => onRemove(index)}
          canRemove={colorStops.length > 2}
        />
      ))}
      {colorStops.length < 5 && (
        <Button
          variant="outline"
          className="w-full bg-muted/50 border-primary/20 hover:bg-primary/10 hover:text-primary"
          onClick={onAdd}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Color Stop
        </Button>
      )}
    </div>
  );
});
