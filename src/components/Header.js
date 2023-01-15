import {useState, useEffect} from "react";
import {MdVerified} from "react-icons/md";
import SunIcon from "@/components/Icons/SunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import Image from "next/image";

export default function Header({title, logo}){
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark"){
      window.document.documentElement.classList.add("dark");
    } else{
      window.document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";
  const handleSwitchTheme = () => setTheme(theme === "dark" ? "light" : "dark");


  return (
      <div className="sticky z-50 top-0 box-border flex w-full items-center justify-between p-6 font-semibold ">
        <div
            className="bg-primary-100/40 backdrop-blur-xl flex justify-between flex-1 p-3 rounded-full items-center dark:bg-primary-800/40">

          {logo && (
              <Image
                  src={logo}
                  alt="logo"
                  width="40"
                  height="40"
                  className="rounded-full"
              />)}

          <h2 className="bg-gradient-to-r from-teal-600 gap-1 flex items-center to-teal-400 bg-clip-text px-3  font-bold text-transparent">
            {title}
            <MdVerified className="inline-block text-blue-500 text-xs"/>
          </h2>

          <button
              className="flex h-10 w-12 cursor-pointer select-none items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-400 text-center text-base text-white no-underline "
              onClick={handleSwitchTheme}
          >
            {isDark ? <SunIcon/> : <MoonIcon/>}
          </button>
        </div>
      </div>);
}
