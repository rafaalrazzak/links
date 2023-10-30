import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bg from "@/components/Bg";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  headTitle?: string;
  headLogo?: string;
}

function Layout({ children, headTitle, headLogo }: LayoutProps) {
  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col items-center justify-between px-4 gap-4">
      <Header title={headTitle} logo={headLogo} />
      <Bg />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
