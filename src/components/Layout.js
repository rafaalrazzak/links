import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Gradient from "@/components/Gradient"
export default function Layout({ children }) {
	return (
		<>
			<div>
				<Header title="<raf />" />
		    <Gradient />
			<div className="flex flex-wrap">{children}
</div>
			<Footer />
	   </div>
		/div>
		</>
	)
}