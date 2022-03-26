import SunIcon from "@/components/Icons/SunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Header({ title, logo }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const isDark = theme == "dark";
  const handleSwitchTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative box-border flex w-full items-center justify-between p-6 font-semibold">
      <div className="float-left box-border flex w-full items-center">
        <Image src={logo} alt="logo" width="40" height="40" />
        <h2 className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text px-3 text-xl font-bold text-transparent">
          {title}
        </h2>
      </div>

      <button
        className="flex h-8 w-20 cursor-pointer select-none items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-400 text-center text-base text-white no-underline drop-shadow-xl"
        onClick={handleSwitchTheme}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
