import client from "@/graphcms/client";
import REDIRECT from "@/graphcms/redirect";

export async function getServerSideProps(ctx) {
  const { redirect } = ctx.query;
  const { data } = await client.query({
    query: REDIRECT,
  });
  const { redirects } = data;
  let redirectUrl;
  console.log(redirects);
  redirects.find(({ name, url }) => {
    if (name === redirect) {
      redirectUrl = url;
    }
  });
  return {
    redirect: {
      destination: redirectUrl ? redirectUrl : "/",
      permanent: false,
    },
    props: {},
  };
}

export default function Reditect() {
  return;
}
