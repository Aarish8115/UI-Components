# Semantic Color Theming System

This document demonstrates how to use the newly implemented semantic color theming system.

## Overview

The theming system allows you to define semantic colors that can reference either:
1. **Tailwind color names** (e.g., `brand: 'red'`) - generates `bg-brand-500` classes that inherit from `bg-red-500`
2. **Hex color values** (e.g., `accent: '#f2ff00'`) - generates custom CSS classes with the hex values

## Basic Usage

### 1. Wrap your app with ThemeProvider

```tsx
import React from 'react';
import { ThemeProvider } from './hooks';

function App() {
  const themeOptions = {
    brand: 'red',        // Maps to Tailwind red colors
    accent: '#f2ff00',   // Custom hex color
    secondary: 'blue'    // Maps to Tailwind blue colors
  };

  return (
    <ThemeProvider initialThemeOptions={themeOptions}>
      <YourComponents />
    </ThemeProvider>
  );
}
```

### 2. Generate and apply CSS classes

```tsx
import React from 'react';
import { useGenerateColorPalettes } from './hooks';

function ThemedComponent() {
  const { palettes, cssClasses } = useGenerateColorPalettes();

  return (
    <>
      {/* Inject the generated CSS */}
      <style dangerouslySetInnerHTML={{ __html: cssClasses }} />
      
      {/* Use semantic color classes */}
      <div className="bg-brand-500 text-white p-4">
        Brand colored background (inherits from red-500)
      </div>
      
      <div className="bg-accent-500 text-black p-4">
        Accent colored background (uses #f2ff00)
      </div>
      
      <div className="text-secondary-600">
        Secondary colored text (inherits from blue-600)
      </div>
    </>
  );
}
```

### 3. Use the color utility hook

```tsx
import React from 'react';
import { useColorClass } from './hooks';

function ComponentWithColorUtility() {
  const brandBgClass = useColorClass('brand', '500', 'bg');
  const accentTextClass = useColorClass('accent', '600', 'text');

  return (
    <div className={`${brandBgClass} ${accentTextClass} p-4`}>
      Styled with utility hook
    </div>
  );
}
```

## Generated Output Examples

### For `brand: 'red'`
The system generates classes like:
- `bg-brand-500` → inherits from `bg-red-500` → `background-color: #ef4444`
- `text-brand-500` → inherits from `text-red-500` → `color: #ef4444`
- `border-brand-500` → inherits from `border-red-500` → `border-color: #ef4444`

### For `accent: '#f2ff00'`
The system generates classes like:
- `bg-accent-500` → `background-color: #f2ff00`
- `text-accent-500` → `color: #f2ff00`
- `border-accent-500` → `border-color: #f2ff00`

## Available Shades

All semantic colors support the full range of Tailwind shades:
`50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

## API Reference

### ThemeProvider Props
- `children`: React nodes
- `initialThemeOptions?`: Initial theme configuration

### useTheme Hook
Returns:
- `themeOptions`: Current theme configuration
- `setThemeOptions`: Function to update theme
- `getColorName`: Function to get color class name

### useGenerateColorPalettes Hook
Returns:
- `palettes`: Generated color palettes object
- `cssClasses`: CSS string ready for injection

### useColorClass Hook
Parameters:
- `semanticColor`: Semantic color name (e.g., 'brand')
- `shade?`: Color shade (default: '500')
- `type?`: CSS property type ('bg' | 'text' | 'border', default: 'bg')

Returns: Complete CSS class name

## Supported Tailwind Colors

The system supports all standard Tailwind colors:
`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`