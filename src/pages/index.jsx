import { useEffect, useMemo } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { PageSeo } from "@/components/SEO";
import raf from "@/assets/logo-bg.svg";
import client from "@/graphcms/client";
import QUERY from "@/graphcms/query";

export async function getServerSideProps(ctx) {
  const clientUrl = ctx.query.r;
  const {
    data: { urls },
  } = await client.query({
    query: QUERY,
  });

  if (clientUrl) {
    return {
      redirect: {
        destination: decodeURIComponent(clientUrl),
        permanent: true,
      },
    };
  }

  return {
    props: { urls },
  };
}

export default function Home({ urls }) {

  return (
    <div className="relative">
      <PageSeo
        title="Links | raf"
        description="a simple website for any social media link"
      />
      <Layout headTitle="rafaalrazzak" headLogo={raf}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {urls?.map((item, i) => {
            return (
              <Card
                key={item.id}
                i={i}
                title={item.title}
                subtitle={item.description}
                link={encodeURIComponent(item.url)}
                icon={item.icon}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
}
