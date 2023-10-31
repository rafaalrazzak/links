import Image from "next/image";

import logo from "@/assets/logo-bg.svg";

export function Header() {
  return (
    <div className="relative mt-4">
      <img
        className="h-48 w-screen object-cover rounded-2xl"
        src="https://storage-dev.tako.id/creator/03bbb553-ceff-4909-9ac9-6c4872d0f720/banner.png?ref=p5cc_17364.png"
      />

      <Image
        src={logo}
        alt="logo"
        width="100"
        height="100"
        className="rounded-full border-4 border-black absolute -bottom-8 left-4"
      />
    </div>
  );
}
