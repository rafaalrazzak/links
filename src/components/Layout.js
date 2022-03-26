import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gradient from "@/components/Gradient";
export default function Layout({ children, headTitle, headLogo }) {
  return (
    <div className="lg:mx-24">
      <Header title={headTitle} logo={headLogo} />
      <div className="justify-center">
        <Gradient />
        <div className="flex flex-wrap">{children}</div>
      </div>
      <div
        className="flex-end fixed inset-x-0 bottom-0
             flex
             justify-center"
      >
        <Footer />
      </div>
    </div>
  );
}
