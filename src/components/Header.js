import SunIcon from '@/components/Icons/SunIcon'
import MoonIcon from '@/components/Icons/MoonIcon'
import logo from '@/assets/logo-r.svg'
import Image from "next/image"
import { useState, useEffect } from "react"
export default function Header() {
  const [theme, setTheme] = useState(undefined)
  useEffect(() => {
    if (theme !== undefined) {
      if (theme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }

  }, [theme])
  const isDark = theme === 'dark'
  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <Image src={logo} alt="logo" width="40" height="40" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>{"<raf />"}</b>
        </h2>
      </div>


      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <SunIcon color="white" /> : <MoonIcon color="white" />}
      </button>
    </div>
  )

}