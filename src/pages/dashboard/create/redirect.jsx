import { useState } from "react";
import { toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRandom } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import REDIRECT from "@/graphcms/mutation/redirect";
import Layout from "@/components/Layout";
import { PageSeo } from "@/components/SEO";
import Form from "@/components/Form";
import Input from "@/components/Input";
import generateRandomString from "@/libs/utils/generateRandomString";

export default function CreateRedirect() {
  const [name, setName] = useState(generateRandomString());
  const [url, setUrl] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [createRedirect, { error, loading }] = useMutation(REDIRECT);
  const baseUrl = "https://l.rafaar.me/";
  const handleSubmit = async (e) => {
    const encodeUrl = encodeURIComponent(url);
    e.preventDefault();
    try {
      await createRedirect({
        variables: {
          name,
          url: encodeUrl,
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
          <button
            onClick={() => setName(generateRandomString())}
            className="transition-color my-2 flex w-full flex-row items-center justify-center space-x-1 rounded-lg border border-primary-400/20 bg-primary-300/50 py-2 text-sm font-semibold text-primary-700 shadow-sm duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-700/20 dark:bg-primary-800/50 dark:text-primary-100"
            type="button"
          >
            Random
            <FaRandom className="mx-1 text-lg" />
          </button>
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
          <div className="flex w-full items-center justify-between gap-x-2 rounded-lg bg-primary-200/50 px-4 py-2 text-sm text-teal-500">
            <Link href={result} className="rounded-lg bg-primary-200 p-2">
                <HiExternalLink />
            </Link>
            <span className="flex truncate">{result}</span>
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
