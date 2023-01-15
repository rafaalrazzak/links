import {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import clsx from "clsx";
import {HiOutlineClipboardCopy, HiOutlineShare, HiCheck} from "react-icons/hi";
import Link from "next/link";
import siteMetadata from "@/data/siteMetadata";
import {decode} from "@/libs/utils/url";
import {getMeta} from "@/libs/utils/getMeta";

export default function LinkCard({link, className}){
	const baseUrl = "https://l.rafaar.me/";
	const [isCopied, setIsCopied] = useState(false);

	const handleIsCopy = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000)
	}


	const handleShare = async() => {
		if(navigator.share){
			const jsonRes = await getMeta(link.url)

			const shareObj = {
				title: jsonRes.title || "Share Url",
				text: jsonRes.description || "</raf>",
				url: `${siteMetadata.siteUrl}/${link.name}`
			}

			navigator
					.share(shareObj)
					.catch((error) => {
						console.error('Error sharing', error, shareObj)
					})
		} else{
			alert("Your browser doesn't support this feature")
		}
	}

	return (
			<div className={clsx("px-4 py-2 rounded-lg shadow-sm ", className)}>
				<div className="text-teal-500 flex justify-between">
					<Link href={link.name}>
						<h1 className=" hover:underline font-bold cursor-pointer">
							/{link.name}
						</h1>
					</Link>
					<div className="inline-flex space-x-1">

						<button className="p-2 hover:bg-primary-200 rounded-lg">
							{isCopied ? (
											<HiCheck className="text-green-500"/>) :
									<CopyToClipboard text={baseUrl + link.name} onCopy={() => handleIsCopy()}>
										<HiOutlineClipboardCopy className="text-gray-500 hover:text-gray-700 cursor-pointer"/>
									</CopyToClipboard>}
						</button>

						{navigator.share && <button onClick={handleShare} className="p-2 hover:bg-primary-200 rounded-lg">
							<HiOutlineShare className="text-gray-500 hover:text-gray-700 cursor-pointer"/>
						</button>}

					</div>
				</div>

				<CopyToClipboard text={decode(link.url)}>
					<p className="text-xs text-primary-500 break-all">
						{decode(link.url)}
					</p>
				</CopyToClipboard>

			</div>)
}