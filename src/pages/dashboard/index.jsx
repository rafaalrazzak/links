import { useLinks } from "@/context/links";
import LinkCard from "../../components/LinkCard";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";

function Loading() {
  return (
    <div className="flex h-full items-center justify-center ">
      <p className="text-2xl">Loading...</p>
    </div>
  );
}

export default function Dashboard() {
  const { links } = useLinks();

  return (
    <div className="mx-auto flex max-w-md flex-col gap-3 p-4">
      <div className="inline-flex items-center justify-between ">
        <h1 className="text-3xl font-bold text-teal-500">Tautan Saya</h1>
        <Link href="/dashboard/create/redirect">
          <HiPlus className="cursor-pointer rounded-lg bg-teal-500 p-1 text-3xl text-white" />
        </Link>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-1 flex-col items-center gap-3 rounded-lg px-4 py-2 shadow-sm">
          <h1 className="text-sm">Total Tuatan</h1>
          <p className="text-xl font-bold text-teal-500">{links.length}</p>
        </div>
      </div>

      {links.loading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        links?.map((link) => (
          <LinkCard key={link.id} link={link} className="my-1" />
        ))
      )}
    </div>
  );
}
