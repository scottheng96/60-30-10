export type ColorHSL = {
    h: number
    s: number
    l: number
}

export type Palette = {
    primary: string
    secondary: string
    accent: string
}

/**
 * Generate a 60-30-10 palette in hex
 */
export function generatePalette(base: ColorHSL): Palette {

  // Secondary (analogous)
  const secondary: ColorHSL = {
    h: (base.h + 30) % 360,
    s: Math.max(0, base.s * 0.8),
    l: Math.max(0, base.l - 10),
  };

  // Accent (complementary)
  const accent: ColorHSL = {
    h: (base.h + 180) % 360,
    s: Math.min(100, base.s * 1.2),
    l: 55, // fixed for visibility
  };

  return {
    primary: hslToHex(base),
    secondary: hslToHex(secondary),
    accent: hslToHex(accent),
  };
}

export function generateBaseHSL(): ColorHSL {
  // Hue: full 360° spectrum
  const h = Math.floor(Math.random() * 360);

  // Saturation: keep between 50-90% for rich colors, avoid washed-out extremes
  const s = Math.floor(50 + Math.random() * 40);

  // Lightness: keep between 40-65% for good balance (not too dark, not too bright)
  const l = Math.floor(40 + Math.random() * 25);

  const baseColor: ColorHSL = {
    h,
    s,
    l,
  }
  return baseColor;
}

/**
 * Convert HSL to Hex
 */
function hslToHex({ h, s, l }: ColorHSL): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}