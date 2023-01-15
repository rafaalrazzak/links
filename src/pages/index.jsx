import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { PageSeo } from "@/components/SEO";
import raf from "@/assets/logo-bg.svg";
import client from "@/graphcms/client";
import QUERY from "@/graphcms/query";

export async function getServerSideProps(ctx) {
  const clientUrl = ctx.query.r;
  const {data: {urls}} = await client.query({
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {urls?.map((item, i) => {
            return (
                <Card
                    key={item.id}
                    i={i}
                    title={item.title}
                    subtitle={item.description}
                    link={encodeURIComponent(item.url)}
                    cover={item.thumbnail.url}
                    cW={item.thumbnail.width}
                    cH={item.thumbnail.height}
                />
            );
          })}
        </div>
      </Layout>
    </div>
  );
}
