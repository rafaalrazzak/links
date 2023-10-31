import React from "react";
import NextLink from "next/link";
import { getClient } from "@/graphcms/client";
import query from "@/graphcms/query";
import { passions } from "@/constants";
import { Card, CardSocial } from "@/components/Card";
import { LinkQuery, Link } from "@/types/link";

function filterItemsByType(items: Link[], type: string) {
  return items.filter((item) => item.type === type);
}

export const revalidate = 180;

export default async function Page() {
  const {
    data: { urls },
  } = (await getClient().query({ query })) as LinkQuery;

  const socialLinks = filterItemsByType(urls, "social");
  const projects = filterItemsByType(urls, "project");

  return (
    <main className="flex flex-col gap-8 w-full">
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Rafa Al Razzak</h1>
          <p className="text-sm">
            Frontend Web Developer with experience in{" "}
            {passions.map((passion, index) => (
              <span key={index}>
                <NextLink href={passion.url} className="text-blue-500">
                  {passion.name}
                </NextLink>
                {index < passions.length - 1 && ", "}
              </span>
            ))}
            . Passionate about crafting modern web applications.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          {socialLinks.map((props) => (
            <CardSocial key={props.id} {...props} />
          ))}
        </div>
      </section>
      {projects.map((item, i) => (
        <Card key={item.id} i={i} {...item} />
      ))}
    </main>
  );
}
