import clsx from "clsx";
export default function Bg() {
  return (
    <div
      className={clsx(
        "fixed inset-0 -z-10 min-h-screen bg-fixed bg-center bg-no-repeat bg-[#0B1120] beams",
      )}
    >
      <div className="fixed inset-0 bg-fixed bg-center opacity-70 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-[url(/bg/grid-dark.svg)]"></div>
      <div
        className="fixed inset-0 border-b border-primary-100/5 bg-primary-400/[0.05] bg-bottom"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />
    </div>
  );
}
