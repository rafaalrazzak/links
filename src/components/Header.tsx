import Image from "next/image";

import logo from "@/assets/logo-bg.svg";

export function Header() {
  return (
    <div className="relative -mx-4 -mt-4 sm:mx-0 sm:mt-0 ">
      <img
        className=" object-cover sm:rounded-2xl"
        src="https://pbs.twimg.com/profile_banners/868649772596330497/1670133956/1500x500"
      />

      <img
        src={logo.src}
        alt="logo"
        className="w-16 h-16 lg:w-[80px] lg:h-[80px] rounded-full border-4 border-black absolute -bottom-10 md:-bottom-6 lg:-bottom-8 left-4"
      />
    </div>
  );
}
