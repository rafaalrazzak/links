import { redirect as NextRedirect } from "next/navigation";

import { getClient } from "@/graphcms/client";
import { SINGLE } from "@/graphcms/redirect";

export const revalidate = 30;

export default async function RedirectPage({
  params: { redirect },
}: {
  params: {
    redirect: string;
  };
}) {
  const {
    data: { redirects },
  } = await getClient().query({
    query: SINGLE,
    variables: {
      name: redirect,
    },
  });

  const redirectUrl = redirects[0]?.url || "/";

  NextRedirect(redirectUrl);

  return <>Redirect...</>;
}
