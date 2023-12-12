import { Toaster } from "react-hot-toast";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Toaster />
      {children}
      <Footer />
    </>
  );
}
