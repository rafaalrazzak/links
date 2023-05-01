import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import RiIcons from "./RiIcons";

export default function Card({ link, i, title, subtitle, icon }) {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 50,
      },
    }),
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <Link
      href={`?r=${encodeURIComponent(link)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center rounded-2xl bg-primary-100/40  p-3 outline outline-1 outline-primary-300 backdrop-blur-xl dark:bg-primary-800/40 dark:text-white dark:outline-primary-800"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        custom={i}
        variants={variants}
        className="flex flex-1 items-center justify-between gap-2 "
      >
        {icon && (
          <div className="rounded-full border bg-gradient-to-br from-primary-100 to-primary-200 p-2 dark:border-primary-700 dark:from-primary-700 dark:to-primary-800 ">
            <RiIcons icon={icon} className="h-5 w-5" />
          </div>
        )}

        <div className="flex flex-col text-center">
          <h2 className="font-semibold ">{title}</h2>
          <p className="text-xs font-light ">{subtitle}</p>
        </div>

        <div className="opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 ">
          <HiExternalLink className="h-5 w-5" />
        </div>
      </motion.div>
    </Link>
  );
}
