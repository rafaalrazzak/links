import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bg from "@/components/Bg";

interface LayoutProps {
  children: React.ReactNode;
  headTitle: string;
  headLogo: string;
}

const Layout: React.FC<LayoutProps> = ({ children, headTitle, headLogo }) => {
  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col items-center justify-between px-4 gap-4">
      <Header title={headTitle} logo={headLogo} />
      <Bg />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
