import { useState } from "react";
import { toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { useMutation } from "@apollo/client";
import Layout from "@/components/Layout";
import { PageSeo } from "@/components/SEO";
import Form from "@/components/Form";
import Input from "@/components/Input";
import REDIRECT from "@/graphcms/mutation/redirect";
import Link from "next/link";

export default function CreateRedirect() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [createRedirect, { data, error, loading }] = useMutation(REDIRECT);
  const baseUrl = "https://l.rafaar.me/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRedirect({
        variables: {
          name,
          url,
        },
      });
      if (!error) {
        toast.success("Url has been shorter");
        setResult(baseUrl + name);
        setName("");
        setUrl("");
      }
      if (loading) {
        setIsLoading(true);
      }
    } catch (error) {
      toast.error(`\"${name}\" already exists`);
    }
  };

  return (
    <Layout headTitle="Short Url">
      <PageSeo
        title="Short url | raf"
        description="shorting url to redirect url"
      />
      <div className="mx-auto flex max-w-lg flex-col">
        <Form title="Short Url" onSubmit={handleSubmit} disabled={isLoading}>
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
        {result && (
          <div className="flex w-full items-center gap-x-2 rounded-lg bg-primary-200/50 px-4 py-2 text-sm text-teal-500">
            <Link href={result}>
              <a className="rounded-lg bg-primary-200 p-2">
                <HiExternalLink />
              </a>
            </Link>
            <span className="flex-1">{result}</span>
            <CopyToClipboard
              text={result}
              onCopy={() => {
                toast.success("Copied to clipboard");
              }}
            >
              <button
                aria-label="Copy"
                className="rounded-lg bg-primary-200 p-2"
              >
                <MdContentCopy size={13} />
              </button>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </Layout>
  );
}
