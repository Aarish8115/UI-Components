import { createContext, useContext, ReactNode, useState } from 'react';
import { ThemeOptions, TailwindColorName } from './types';

interface ThemeContextType {
  themeOptions: ThemeOptions;
  setThemeOptions: (options: ThemeOptions) => void;
  getColorName: (semanticColor: string, shade?: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialThemeOptions?: ThemeOptions;
}

export const ThemeProvider = ({ children, initialThemeOptions = {} }: ThemeProviderProps) => {
  const [themeOptions, setThemeOptions] = useState<ThemeOptions>(initialThemeOptions);

  const getColorName = (semanticColor: string, shade: string = '500'): string => {
    const colorValue = themeOptions[semanticColor];
    
    if (!colorValue) {
      // If semantic color is not defined, return the semantic name as-is
      return `${semanticColor}-${shade}`;
    }

    // Check if it's a hex color (starts with #)
    if (colorValue.startsWith('#')) {
      // For hex colors, return the semantic name
      return `${semanticColor}-${shade}`;
    }

    // Check if it's a valid Tailwind color name
    const tailwindColors: TailwindColorName[] = [
      'slate', 'gray', 'zinc', 'neutral', 'stone',
      'red', 'orange', 'amber', 'yellow', 'lime', 'green',
      'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo',
      'violet', 'purple', 'fuchsia', 'pink', 'rose'
    ];

    if (tailwindColors.includes(colorValue as TailwindColorName)) {
      // For Tailwind color names, we want to return the semantic name
      // but the CSS generation should map it to the actual Tailwind color
      return `${semanticColor}-${shade}`;
    }

    // Default case: return semantic name
    return `${semanticColor}-${shade}`;
  };

  return (
    <ThemeContext.Provider value={{ themeOptions, setThemeOptions, getColorName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};