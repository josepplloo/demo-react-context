import React, { useState } from 'react';

export const themes = {
  light: {
    foreground: 'rebeccapurple',
    background: 'white'
  },
  dark: {
    foreground: 'white',
    background: 'rebeccapurple'
  }
};

export const ThemeContext = React.createContext();

export const useTheme = () => {
  const [mode, setMode] = useState(themes.light);

  const toggleMode = () => { 
    if (mode === themes.light) {
      setMode(themes.dark);
    } else {
      setMode(themes.light);
    }
  };

  return [mode, toggleMode]
};
