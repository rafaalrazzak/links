import Link from "next/link";

export function Footer() {
  return (
    <div className="flex justify-end">
      <div className="my-4 text-center text-primary-200 ">
        <p className="text-sm">
          Made with <span className="text-[#db2929]">❤️ </span>
          by{" "}
          <Link
            href="/"
            className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text font-semibold text-transparent"
          >
            {"<raf />"}
          </Link>
        </p>
      </div>
    </div>
  );
}
