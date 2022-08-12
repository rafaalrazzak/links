import client from "@/graphcms/client";
import REDIRECT from "@/graphcms/redirect";

export async function getServerSideProps(ctx) {
  const { redirect } = ctx.query;
  const { data } = await client.query({
    query: REDIRECT,
  });
  const { redirects } = data;
  let redirectUrl;
  redirects.forEach(({ name, url }) => {
    if (redirect === name) {
      redirectUrl = url;
    }
  });

  return {
    redirect: {
      destination: redirectUrl ? redirectUrl : "/",
      permanent: false,
    },
    props: {}, // will be passed to the page component as props
  };
}

export default function Reditect() {
  return <></>;
}
