import React from 'react'
import SunIcon from '@/components/Icons/SunIcon'
import MoonIcon from '@/components/Icons/MoonIcon'
import logo from '@/assets/logo-r.svg'
import Image from "next/image"

export default function Header() {
return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <Image src={logo} alt="logo" width="40" height="40" />
  &nbsp;&nbsp;&nbsp;
        <h2>
  <b>{"<raf />"}</b>
        </h2>
      </div>
    </div>
  )
}