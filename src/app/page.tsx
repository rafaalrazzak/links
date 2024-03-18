import React from "react";
import NextLink from "next/link";

import { passions } from "@/constants";
import { Card, CardSocial } from "@/components/Card";
import { Header } from "@/components/Header";
import { getClient } from "@/graphcms/client";
import query from "@/graphcms/query";
import { LinkQuery, Link } from "@/types/link";

function filterItemsByType(items: Link[], type: string) {
  return items.filter((item) => item.type === type);
}

export const dynamic = "force-dynamic";

export default async function Page() {
  const {
    data: { urls },
  } = (await getClient().query({ query })) as LinkQuery;

  const socialLinks = filterItemsByType(urls, "social");
  const projects = filterItemsByType(urls, "project");

  return (
    <>
      <Header
        cover={"https://cdn.kita.blue/rafaar%2Fheader-cover.jpg"}
        avatar
      />
      <main className="flex w-full flex-col gap-8">
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Rafa Al Razzak</h1>
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
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((props) => (
              <CardSocial key={props.id} {...props} />
            ))}
          </div>
        </section>
        {projects.map((item, i) => (
          <Card key={item.id} i={i} {...item} />
        ))}
      </main>
    </>
  );
}
