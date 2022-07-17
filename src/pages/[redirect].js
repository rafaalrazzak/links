import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import client from "@/graphcms/client";
import REDIRECT from "@/graphcms/redirect";

// export async function getServerSideProps(ctx) {
//   const { redirect } = ctx.query;

//   let r = {
//     name: "link",
//     url: "/",
//   };

//   const { name, url } = r;

//   if (redirect !== name) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     redirect: {
//       destination: url,
//       permanent: false,
//     },
//     props: {}, // will be passed to the page component as props
//   };
// }

export default function Home() {
  const [r, setR] = useState(null);
  const router = useRouter();
  const clientRoute = router.query.redirect;

  async function getData() {
    await client
      .query({
        query: REDIRECT,
      })
      .then(({ data }) => setR(data.redirects));
  }

  if (r) {
    r.forEach(({ name, url }) => {
      if (clientRoute !== name) {
        router.push("/");
      } else {
        router.push(url);
      }
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return <></>;
}
