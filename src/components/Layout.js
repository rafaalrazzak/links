import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bg from "@/components/Bg";
export default function Layout({ children, headTitle, headLogo }) {
  return (
    <div className="mx-auto max-w-md h-screen  px-4 items-center justify-center">
      <Header title={headTitle} logo={headLogo} />
      <Bg />
      <Toaster />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
