import Layout from "@/components/Layout";
import Card from "@/components/Card";
import items from "@/assets/items";
import { PageSeo } from "@/components/SEO";
import raf from "@/assets/logo-r.svg";

export default function Home() {
  return (
    <>
      <PageSeo
        title="Links | <raf />"
        description="a simple website for any social media link"
      />
      <Layout headTitle="< raf />" headLogo={raf}>
        {items.map((item, i) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              i={i}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              cover={item.image}
            ></Card>
          );
        })}
      </Layout>
    </>
  );
}
