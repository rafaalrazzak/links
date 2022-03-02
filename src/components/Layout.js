import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div className="flex flex-wrap">{children}</div>
			<Footer />
		</>
	)
}