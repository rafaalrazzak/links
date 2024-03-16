import Image from "next/image";

import logo from "@/assets/logo-bg.svg";

export function Header({
  avatar = logo,
  cover,
}: {
  cover: string;
  avatar?: boolean;
}) {
  return (
    <div className="relative -mx-4 -mt-4 sm:mx-0 sm:mt-0">
      <Image
        alt="header image"
        src={cover}
        width={1500}
        height={500}
        className="object-cover rounded-xl w-full"
      />

      {avatar && (
        <Image
          alt="logo"
          src={logo.src}
          width={300}
          height={300}
          className="size-20 lg:w-[80px] lg:h-[80px] rounded-full border-4 border-black absolute -bottom-10 md:-bottom-6 left-4"
        />
      )}
    </div>
  );
}
