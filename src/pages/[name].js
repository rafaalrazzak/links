import { useRouter } from 'next/router'
import Head from "next/head"
import Layout from "@/components/Layout"
const Person = () => {
	const router = useRouter()
	const { name } = router.query

	return (
		<>
			<Head>
				<title>Link | {name}</title>
			</Head>

			<Layout>
				<div className=" flex justify-center items-center w-full h-screen" >
					<div className="text-center font-semibold text-lg font-sans uppercase mx-auto tracking-widest dark:text-white" >
						{name}
						</div>
					</div>
								</Layout>
		</>
					)
						}
						
export default Person