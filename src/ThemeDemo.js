import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeDemo() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="section">
      <h2>5. Context API</h2>

      <p>
        Current Theme: <strong>{theme.toUpperCase()}</strong>
      </p>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Toggle Dark Theme" : "☀️ Toggle Light Theme"}
      </button>

      <p>
        The theme is shared globally without passing props through every
        component.
      </p>
    </section>
  );
}

export default ThemeDemo;
