import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Card({ link, i, title, subtitle, cover }) {
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
    <>
      <div className="flex w-full flex-col md:w-1/2 lg:w-1/3">
        <div className="m-8 rounded-lg p-6 outline outline-primary-400/10 backdrop-blur-xl transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-primary-100/50 hover:drop-shadow-sm hover:backdrop-blur-lg dark:bg-primary-700/50 dark:text-primary-200 dark:outline-primary-300/10 dark:backdrop-blur-lg dark:hover:drop-shadow-md">
          <a
            href={`?r=https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              custom={i}
              variants={variants}
            >
              <Image
                className="w-full rounded-lg object-cover"
                width={350}
                height={120}
                src={cover}
                alt={title}
              />
              <div className="mt-1">
                <h2 className="text-md font-semibold transition-all">
                  {title}
                </h2>
                <p className="text-sm font-light">{subtitle}</p>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </>
  );
}
