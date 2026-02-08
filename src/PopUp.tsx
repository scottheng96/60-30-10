import { useEffect, useState } from "react";
import type { Palette } from "./colorGenerator";

export function Popup() {
  const [palette, setPalette] = useState< Palette | null>(null);

  useEffect(() => {
    chrome.storage.local.get("palette", (result) => {
      const paletteObj = result.palette

    // Check if paletteObj exists and has keys
    if (paletteObj && Object.keys(paletteObj).length > 0) {
        setPalette(paletteObj as Palette);
    } else {
        setPalette(null);
    }
    });
  }, []);

  if (!palette) return <div>Loading...</div>;

  return (
    <div>
      <div>Palette:</div>
      <div style={{ color: palette.primary }}>{palette.primary}</div>
      <div style={{ color: palette.secondary }}>{palette.secondary}</div>
      <div style={{ color: palette.accent }}>{palette.accent}</div>
    </div>
  );
}