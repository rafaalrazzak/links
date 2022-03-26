import Head from "next/head";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { alas } from "@/assets/items";
import logoAlas from "@/assets/logo-alas.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Links | Al - Asiyah</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
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
