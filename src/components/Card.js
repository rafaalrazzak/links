import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
export default function Card({link, i, title, subtitle, cover}) {

  const variants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 50
      },
    }),
    hidden: { opacity: 0, y: 200 }
  }

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer" key={link}>
        <motion.div className="Card four columns"
          
          initial="hidden"
          animate="visible"
          custom={i}
          variants={variants}>
          <Image className="cover" src={cover} alt={title} />
          <div className="data">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </motion.div>
      </a>
    </>
  )
}