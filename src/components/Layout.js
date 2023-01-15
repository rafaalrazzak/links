import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bg from "@/components/Bg";
export default function Layout({ children, headTitle, headLogo }) {
  return (
    <div className="lg:mx-24">
      <Header title={headTitle} logo={headLogo} />
      <Bg />
      <Toaster />
      <div className="mx-auto flex flex-wrap items-center justify-center">{children}</div>
        <Footer />
    </div>
  );
}
