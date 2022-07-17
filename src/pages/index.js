import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { PageSeo } from "@/components/SEO";
import raf from "@/assets/logo-bg.svg";
import client from "@/graphcms/client";
import QUERY from "@/graphcms/query";

export async function getServerSideProps(ctx) {
  const clientUrl = ctx.query.r;
  const { data } = await client.query({
    query: QUERY,
  });

  const { urls } = data;

  if (clientUrl) {
    return {
      redirect: {
        destination: clientUrl,
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

      <Layout headTitle="< raf />" headLogo={raf}>
        {urls?.map((item, i) => {
          return (
            <Card
              key={item.id}
              i={i}
              title={item.title}
              subtitle={item.description}
              link={item.url}
              cover={item.thumbnail.url}
              cW={item.thumbnail.width}
              cH={item.thumbnail.height}
            ></Card>
          );
        })}
      </Layout>
    </div>
  );
}
