import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [color, setColor] = useState("light");

  const toggleColor = () => {
    setColor(color === "light" ? "dark" : "light");
  };

  const value = {
    color,
    toggleColor
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };