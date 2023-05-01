import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function Header({ title, logo }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";
  const handleSwitchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="sticky top-0 z-50  items-center justify-between py-4 font-semibold ">
      <div className="flex flex-1 items-center justify-between rounded-2xl bg-primary-100/40 p-3 outline outline-1 outline-primary-300 backdrop-blur-xl dark:bg-primary-800/40 dark:outline-primary-800">
        {logo && (
          <Image
            src={logo}
            alt="logo"
            width="36"
            height="36"
            className="rounded-full"
          />
        )}

        <h2 className="flex items-center gap-1 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text px-3  font-bold text-transparent">
          {title}
          <MdVerified className="inline-block text-xs text-blue-500" />
        </h2>

        <button
          className="flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-400 text-center text-base text-white no-underline "
          onClick={handleSwitchTheme}
        >
          {isDark ? <RiSunFill /> : <RiMoonFill />}
        </button>
      </div>
    </div>
  );
}
