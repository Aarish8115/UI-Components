import React from 'react';
import { ThemeProvider, useGenerateColorPalettes } from './hooks';

/**
 * Example component demonstrating the semantic color theming system
 * This shows how semantic colors can reference Tailwind colors or use hex values
 */
const ThemeExample: React.FC = () => {
  const { palettes, cssClasses } = useGenerateColorPalettes();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Semantic Color Theme Example</h2>
      
      {/* Inject the generated CSS */}
      <style dangerouslySetInnerHTML={{ __html: cssClasses }} />
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Generated CSS Classes (first 5 rules):</h3>
        <pre style={{ 
          background: '#f5f5f5', 
          padding: '10px', 
          fontSize: '12px',
          overflow: 'auto',
          maxHeight: '150px'
        }}>
          {cssClasses.split('\n').slice(0, 5).join('\n')}
        </pre>
      </div>

      <div>
        <h3>Visual Examples:</h3>
        
        {/* Example 1: Semantic color referencing Tailwind color */}
        <div 
          className="bg-brand-500 text-white" 
          style={{ 
            padding: '10px', 
            margin: '10px 0', 
            borderRadius: '4px' 
          }}
        >
          Brand Color (semantic 'brand' → Tailwind 'red' → red-500 color)
        </div>
        
        {/* Example 2: Hex color */}
        <div 
          className="bg-accent-500 text-black" 
          style={{ 
            padding: '10px', 
            margin: '10px 0', 
            borderRadius: '4px' 
          }}
        >
          Accent Color (semantic 'accent' → hex '#f2ff00')
        </div>
        
        {/* Example 3: Another semantic color */}
        <div 
          className="bg-secondary-600 text-white" 
          style={{ 
            padding: '10px', 
            margin: '10px 0', 
            borderRadius: '4px' 
          }}
        >
          Secondary Color (semantic 'secondary' → Tailwind 'blue' → blue-600 color)
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Generated Palettes Structure:</h3>
        <pre style={{ 
          background: '#f5f5f5', 
          padding: '10px', 
          fontSize: '12px',
          overflow: 'auto',
          maxHeight: '200px'
        }}>
          {JSON.stringify(palettes, null, 2)}
        </pre>
      </div>
    </div>
  );
};

/**
 * App wrapper with theme configuration
 * Demonstrates how to set up the theming system
 */
export const ThemeExampleApp: React.FC = () => {
  // Example theme configuration showing both use cases:
  // 1. Semantic colors referencing Tailwind colors
  // 2. Semantic colors using hex values
  const themeOptions = {
    brand: 'red',        // Will generate bg-brand-500 inheriting from red-500
    accent: '#f2ff00',   // Will generate bg-accent-500 with hex color
    secondary: 'blue'    // Will generate bg-secondary-600 inheriting from blue-600
  };

  return (
    <ThemeProvider initialThemeOptions={themeOptions}>
      <ThemeExample />
    </ThemeProvider>
  );
};

export default ThemeExampleApp;