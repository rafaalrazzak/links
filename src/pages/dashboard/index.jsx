import {useLinks} from "@/context/links";
import LinkCard from "../../components/LinkCard";
import Link from "next/link";
import {HiPlus} from "react-icons/hi";


function Loading(){
	return (
			<div className="flex justify-center items-center h-full ">
				<p className="text-2xl">Loading...</p>
			</div>);
}

export default function Dashboard(){
	const {links} = useLinks()

	return (
			<div className="p-4 flex flex-col gap-3 max-w-md mx-auto">

				<div className="inline-flex justify-between items-center ">
					<h1 className="text-3xl font-bold text-teal-500">Tautan Saya</h1>
					<Link href="/dashboard/create/redirect">
						<HiPlus className="text-3xl bg-teal-500 text-white p-1 rounded-lg cursor-pointer"/>
					</Link>
				</div>

				<div className="flex justify-between">
					<div className="flex flex-col flex-1 gap-3 items-center shadow-sm rounded-lg px-4 py-2">
						<h1 className="text-sm">Total Tuatan</h1>
						<p className="text-xl font-bold text-teal-500">{links.length}</p>
					</div>
				</div>

				{links.loading ? (
						<div className="flex justify-center items-center">
							<Loading/>
						</div>) : (

						links?.map((link) => (
								<LinkCard key={link.id} link={link} className="my-1"/>)))}


			</div>);
}