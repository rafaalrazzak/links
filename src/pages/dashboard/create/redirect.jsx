import { toast } from "react-hot-toast";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Layout from "@/components/Layout";
import { PageSeo } from "@/components/SEO";
import Form from "@/components/Form";
import Input from "@/components/Input";
import REDIRECT from "@/graphcms/mutation/redirect";

export default function CreateRedirect() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [createRedirect, { data, error }] = useMutation(REDIRECT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRedirect({
      variables: {
        name,
        url,
      },
    });

    if (error) {
      toast.error("Something wrong...");
    }
    if (data) {
      toast.success("Urls has been saved..");
      setName("");
      setUrl("");
    }
  };

  return (
    <Layout headTitle="< raf /> | Add Redirect Url">
      <PageSeo
        title="Create Redirect Url | raf"
        description="shorting url to redirect url"
      />
      <div className="mx-auto flex max-w-lg">
        <Form title="Add Redirect Url" onSubmit={handleSubmit}>
          <Input
            required
            label="Name"
            placeholder="example"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            type="url"
            label="Url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form>
      </div>
    </Layout>
  );
}
