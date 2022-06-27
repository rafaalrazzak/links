import {useQuery} from "@apollo/client"
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import items from "@/assets/items";
import { PageSeo } from "@/components/SEO";
import raf from "@/assets/logo-r.svg";
import QUERY from "@/graphcms/query"


export default function Home() {
	
 const { data:url } = useQuery(QUERY);
 

  return (
    <>
      <PageSeo
        title="Links | <raf />"
        description="a simple website for any social media link"
      />


      <Layout headTitle="< raf />" headLogo={raf}>
				{url.map((item, i) => {
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
