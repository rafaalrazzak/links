export default function Footer() {
  return (
      <div className="flex-end sticky inset-x-0 bottom-0 flex justify-center">
        <div className="my-4 text-center text-primary-600  dark:text-primary-200 ">
          <p className="text-sm">
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
      </div>
  );
}
