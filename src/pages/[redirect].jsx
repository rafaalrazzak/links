import client from "@/graphcms/client";
import {SINGLE} from "@/graphcms/redirect";
import {decode} from "@/libs/utils/url";

export async function getServerSideProps(ctx){
  const {redirect} = ctx.query;

  const {data: {redirects}} = await client.query({
    query: SINGLE, variables: {
      name: redirect
    }
  })

  const redirectUrl = decode(redirects.length > 0 ? redirects[0]?.url : "/");


  return {
    redirect: {
      destination: redirectUrl, permanent: false,
    }, props: {},
  };
}

export default function Redirect(){
  return <>Redirecting...</>;
}
