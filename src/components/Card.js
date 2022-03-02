import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
export default function Card({ link, i, title, subtitle, cover, id }) {

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
			<div className="w-full md:w-1/2 lg:w-1/3 flex flex-col" key={id}>
				<div className="p-6 transition ease-in-out delay-150 duration-300 rounded-lg m-8 hover:bg-slate-100/50 hover:backdrop-blur-lg hover:scale-105 hover:drop-shadow-sm dark:bg-slate-700/50 dark:backdrop-blur-lg dark:text-slate-200 dark:hover:drop-shadow-md backdrop-blur-xl">
					<a href={link} target="_blank" rel="noopener noreferrer" >
						<motion.div

							initial="hidden"
							animate="visible"
							custom={i}
							variants={variants}>
							<Image className="w-full object-cover rounded-lg h-24" src={cover} alt={title} />
							<div className="mt-1">
								<h2 className="transition-all text-md font-semibold">{title}</h2>
								<p className="text-sm font-light">{subtitle}</p>
							</div>
						</motion.div>
					</a>
				</div>
			</div>
		</>
	)
}