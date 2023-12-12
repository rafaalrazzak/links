"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import RiIcons from "./RiIcons";
import Tooltip from "./Tooltip";

type BaseCardProps = {
  title: string;
  url: string;
  icon: string;
};

type CardProps = {
  i: number;
  title: string;
  description: string;
} & BaseCardProps;

type CardSocialProps = BaseCardProps;

const variants = {
  visible: (i: number) => ({
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

export function Card({ url, i, title, description, icon }: CardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "flex w-full items-center rounded-2xl bg-gradient-to-r from-white/10 via-white/30 to-white/10 p-px text-white animate-border relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-rose-100/10"
      }
    >
      <motion.div
        initial="hidden"
        animate="visible"
        custom={i}
        variants={variants}
        className="flex flex-1 items-center justify-between gap-2 bg-black rounded-2xl p-3"
      >
        {icon && (
          <div className="rounded-full border bg-gradient-to-br  p-2  border-primary-700  from-primary-700  to-primary-800 ">
            <RiIcons icon={icon} className="h-5 w-5" />
          </div>
        )}

        <div className="flex flex-col text-center">
          <h2 className="font-semibold ">{title}</h2>
          <p className="text-xs font-light ">{description}</p>
        </div>

        <div>
          <HiExternalLink className="h-5 w-5" />
        </div>
      </motion.div>
    </Link>
  );
}

export function CardSocial({ title, icon, url }: CardSocialProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Tooltip title={title} position="bottom">
        <RiIcons icon={icon} size={20} />
      </Tooltip>
    </Link>
  );
}
