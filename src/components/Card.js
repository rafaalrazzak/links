import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
export default function Card({ link, i, title, subtitle, cover }) {

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
const variantsBg = {
		visible: i => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.3,
				ease: "easeIn",
				type: "spring",
				stiffness: 100
			},
		}),
		hidden: { opacity: 0, y: 200 }
	}
	return (
		<>
			<div className="my-10 m-auto mb-6 h-auto w-full" key={link}>


				<motion.div className="relative bg-slate-200  p-6 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-md dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg m-6 "
					initial="hidden"
					animate="visible"
					custom={i}
					variants={variantsBg}>
					<a href={link} target="_blank" rel="noopener noreferrer" >
						<motion.div

							initial="hidden"
							animate="visible"
							custom={i}
							variants={variants}>
							<Image className="w-full object-cover rounded-lg h-24" src={cover} alt={title} />
							<div className="mt-1">
								<h2 className="text-md font-medium">{title}</h2>
								<p className="text-sm font-light">{subtitle}</p>
							</div>
						</motion.div>
					</a>
				</motion.div>
			</div>
		</>
	)
}