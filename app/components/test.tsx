"use client";

import { useTheme } from "./themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: "10px", fontSize: "1rem" }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
