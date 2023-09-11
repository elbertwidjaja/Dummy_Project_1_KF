import { createContext, useContext, useState } from "react";

// Create a context for the dark theme
const DarkThemeContext = createContext("light");

// Create a custom hook to access the context
export function useDarkTheme() {
  return useContext(DarkThemeContext);
}

// Create a DarkThemeProvider component
export function DarkThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  // Define a CSS class name based on the darkTheme state
  const themeClassName = darkTheme
    ? "styles.dark_theme "
    : "styles.light_theme";

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      <div className={themeClassName}>{children}</div>
    </DarkThemeContext.Provider>
  );
}
