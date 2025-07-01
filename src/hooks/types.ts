// Types for the theming system

export interface ThemeOptions {
  [key: string]: string; // semantic color name -> color value (hex or tailwind color name)
}

export interface ColorPalette {
  [shade: string]: string; // shade number -> CSS class name
}

export interface GeneratedPalettes {
  [semanticColor: string]: ColorPalette;
}

export type TailwindColorName = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' 
  | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' 
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';

export const TAILWIND_SHADES = [
  '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'
] as const;

export type TailwindShade = typeof TAILWIND_SHADES[number];