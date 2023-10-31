import { Toaster } from "react-hot-toast";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col items-center  justify-around px-4 gap-4">
      <Header />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
}
