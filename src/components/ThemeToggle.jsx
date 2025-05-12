// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      aria-label="Toggle Theme"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
