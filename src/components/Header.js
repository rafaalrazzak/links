import SunIcon from '@/components/Icons/SunIcon'
import MoonIcon from '@/components/Icons/MoonIcon'
import logo from '@/assets/logo-r.svg'
import Image from "next/image"
import { useState, useEffect } from "react"
export default function Header() {
	const [theme, setTheme] = useState()

	useEffect(() => {
		setTheme(localStorage.getItem("theme")	)
	}, [])
	useEffect(() => {
		if (theme === "dark") {
			window.document.documentElement.classList.add('dark')
			localStorage.setItem("theme", "dark")
		} else {
			window.document.documentElement.classList.remove('dark')
			localStorage.setItem("theme", "light")
		}
	}, [theme])
	const isDark = theme == "dark";
	const handleSwitchTheme = () => {
		setTheme(isDark ? "light" : "dark")
	}

	return (
		<div className="p-5 font-semibold flex justify-between items-center relative w-full box-border">
			<div className="w-full float-left box-border flex items-center">
				<Image src={logo} alt="logo" width="40" height="40" />
				&nbsp;&nbsp;&nbsp;
        <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
					<b>{"<raf />"}</b>
				</h2>
			</div>


			<button className="text-white cursor-pointer flex text-center no-underline text-base select-none bg-gradient-to-r from-teal-600 to-teal-400 w-24 rounded-full h-8 justify-center items-center drop-shadow-xl" onClick={handleSwitchTheme}>
				{isDark ? <SunIcon /> : <MoonIcon />}
			</button>
		</div>
	)

}