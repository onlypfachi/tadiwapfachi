"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component hasn't mounted yet, return null to avoid SSR issues
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2 p-1 rounded-md">
      <SunIcon
        className={`h-4 w-4 ${theme === "dark" ? "text-white" : "text-black"}`}
      />
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-labelledby="theme-switch-label"
      />
      <MoonIcon
        className={`h-4 w-4 ${theme === "dark" ? "text-white" : "text-black"}`}
      />
      <span id="theme-switch-label" className="sr-only">
        Toggle theme
      </span>
    </div>
  );
};

export default ThemeSwitch;
