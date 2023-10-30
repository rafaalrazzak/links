import { MdVerified } from "react-icons/md";
import Image from "next/image";

import Logo from "@/assets/logo-bg.svg";

export default function Header({ title = "rafaalrazzak", logo }) {
  const defaultLogo = Logo;

  return (
    <div className="sticky top-0 z-50 w-full items-center justify-between py-4 font-semibold ">
      <div className="flex flex-1 items-center justify-center rounded-2xl p-3 outline outline-1  backdrop-blur-xl  bg-primary-800/40  outline-primary-800">
        <Image
          src={logo || defaultLogo}
          alt="logo"
          width="36"
          height="36"
          className="rounded-full"
        />
        <h2 className="flex items-center gap-1 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text px-3  font-bold text-transparent">
          {title}
          <MdVerified className="inline-block text-xs text-blue-500" />
        </h2>
      </div>
    </div>
  );
}
