import Link from "next/link";

import Card from "@/components/Card";
import RiIcons from "@/components/RiIcons";

import { getClient } from "@/graphcms/client";
import query from "@/graphcms/query";

export default async function Page() {
  const {
    data: { urls },
  } = await getClient().query({
    query: query,
  });

  // const socialLinks = urls.filter((item) => item.type === "social");
  // const projects = urls.filter((item) => item.type === "project");

  // console.log(socialLinks);

  return (
    <main className="flex flex-col gap-4 w-full">
      {/* <div className="flex gap-4 items-center justify-center">
          {socialLinks.map(({url, title, icon}) => (
            <Link key={title} href={url}>
               <RiIcons icon={icon} className="h-8 w-8" />
            </Link>
          ))}
        </div> */}

      {urls.map((item, i) => {
        return (
          <Card
            key={item.id}
            i={i}
            title={item.title}
            subtitle={item.description}
            link={item.url}
            icon={item.icon}
          />
        );
      })}
    </main>
  );
}
