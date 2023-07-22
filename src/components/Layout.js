import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bg from "@/components/Bg";
export default function Layout({ children, headTitle, headLogo }) {
  return (
    <div className="mx-auto flex h-screen  max-w-xl  flex-col items-center justify-between px-4">
      <Header title={headTitle} logo={headLogo} />
      <Bg />
      <Toaster />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </div>
  );
}
