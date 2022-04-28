export default function Footer() {
  return (
    <div className="mb-4 text-center text-slate-600  dark:text-slate-200">
      <p className="text-sm ">
        Made with <span className="text-[#db2929]">❤️ </span>
        by{" "}
        <a
          href="/"
          className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text font-semibold text-transparent"
        >
          {"<raf />"}
        </a>
      </p>
    </div>
  );
}
