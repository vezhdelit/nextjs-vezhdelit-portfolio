"use client";
import React from "react";
import { useTheme } from "next-themes";
import Icons from "./Icons";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => setHasMounted(true));
  if (!hasMounted) return null;
  return (
    <div>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-zinc-100 p-2 rounded-xl text-black"
        >
          <Icons.sun />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-zinc-100 p-2 rounded-xl"
        >
          <Icons.moon className="fill-black stroke-transparent" />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitch;
