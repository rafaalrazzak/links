import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@/components/Layout";
const Person = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>Link | {name}</title>
      </Head>

      <Layout>
        <div className=" flex h-screen w-full items-center justify-center">
          <div className="mx-auto text-center font-sans text-lg font-semibold uppercase tracking-widest dark:text-white">
            {name}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Person;
