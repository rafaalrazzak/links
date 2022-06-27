import clsx from "clsx";
import styles from "../css/bg.module.css";
export default function Bg() {
  return (
    <div
      className={clsx(
        "absolute inset-0 -z-10 min-h-screen bg-primary-50 bg-fixed bg-center bg-no-repeat dark:bg-[#0B1120]",
        styles.beams
      )}
    >
      <div className="absolute inset-0 bg-[url(/bg/grid.svg)] bg-fixed bg-center opacity-70 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url(/bg/grid-dark.svg)]"></div>
      <div
        className="absolute inset-0 bg-primary-900/[0.04] bg-[bottom_1px_center] dark:border-b dark:border-primary-100/5 dark:bg-primary-400/[0.05] dark:bg-bottom"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />
    </div>
  );
}
