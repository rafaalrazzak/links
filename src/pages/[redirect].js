import client from "@/graphcms/client";
import REDIRECT from "@/graphcms/redirect";

export async function getServerSideProps(ctx) {
  const { redirect } = ctx.query;

  let r = {
    name: "link",
    url: "/",
  };

  const { data } = await client.query({
    query: REDIRECT,
  });

  const { redirects } = data;

  redirects.forEach(({ name, url }) => {
    r = {
      name,
      url,
    };
  });

  const { name, url } = r;

  if (redirect !== name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: url,
      permanent: false,
    },
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  return <></>;
}
