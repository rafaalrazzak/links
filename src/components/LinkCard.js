import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import clsx from "clsx";
import {
  HiOutlineClipboardCopy,
  HiOutlineShare,
  HiCheck,
} from "react-icons/hi";
import Link from "next/link";
import siteMetadata from "@/data/siteMetadata";
import { decode } from "@/libs/utils/url";
import { getMeta } from "@/libs/utils/getMeta";

export default function LinkCard({ link, className }) {
  const baseUrl = "https://l.rafaar.me/";
  const [isCopied, setIsCopied] = useState(false);

  const handleIsCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      const jsonRes = await getMeta(link.url);

      const shareObj = {
        title: jsonRes.title || "Share Url",
        text: jsonRes.description || "</raf>",
        url: `${siteMetadata.siteUrl}/${link.name}`,
      };

      navigator.share(shareObj).catch((error) => {
        console.error("Error sharing", error, shareObj);
      });
    } else {
      alert("Your browser doesn't support this feature");
    }
  };

  return (
    <div className={clsx("rounded-lg px-4 py-2 shadow-sm ", className)}>
      <div className="flex justify-between text-teal-500">
        <Link href={link.name}>
          <h1 className=" cursor-pointer font-bold hover:underline">
            /{link.name}
          </h1>
        </Link>
        <div className="inline-flex space-x-1">
          <button className="rounded-lg p-2 hover:bg-primary-200">
            {isCopied ? (
              <HiCheck className="text-green-500" />
            ) : (
              <CopyToClipboard
                text={baseUrl + link.name}
                onCopy={() => handleIsCopy()}
              >
                <HiOutlineClipboardCopy className="cursor-pointer text-gray-500 hover:text-gray-700" />
              </CopyToClipboard>
            )}
          </button>

          {navigator.share && (
            <button
              onClick={handleShare}
              className="rounded-lg p-2 hover:bg-primary-200"
            >
              <HiOutlineShare className="cursor-pointer text-gray-500 hover:text-gray-700" />
            </button>
          )}
        </div>
      </div>

      <CopyToClipboard text={decode(link.url)}>
        <p className="break-all text-xs text-primary-500">{decode(link.url)}</p>
      </CopyToClipboard>
    </div>
  );
}
