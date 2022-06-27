import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { PageSeo } from "@/components/SEO";
import raf from "@/assets/logo-r.svg";
import client from "@/graphcms/client";
import QUERY from "@/graphcms/query";

export async function getServerSideProps(ctx) {
  const url = ctx.query.r;

  const { data } = await client.query({
    query: QUERY,
  });

  if (url) {
    return {
      redirect: {
        destination: url,
        permanent: false,
      },
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <>
      <PageSeo
        title="links | raf"
        description="a simple website for any social media link"
      />

      <Layout headTitle="< raf />" headLogo={raf}>
        {data?.urls.map((item, i) => {
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
    </>
  );
}
