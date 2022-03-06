import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Gradient from "@/components/Gradient"
export default function Layout({ children }) {
   return (
	<>
           <Header title="<raf />" />
           <Gradient />
           <div className="flex flex-wrap">
              {children}
           </div>
           <Footer />
        </>
        )
}
