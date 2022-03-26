import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { alas } from "@/assets/items";
import logoAlas from "@/assets/logo-alas.png";

export default function Home() {
  return (
    <>
      <PageSeo
        title="Links | Al-Asiyah"
        description="a simple website for any social media link"
      />
      <Layout headTitle="SMK Al-Asiyah" headLogo={logoAlas}>
        {alas.map((item, i) => {
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
