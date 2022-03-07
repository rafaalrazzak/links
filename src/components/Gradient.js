export default function Gradient() {
	return (
		<div className="mx-auto md:m-0 relative w-full max-w-lg justify-end overflow-x-clip -z-50 md:overflow-x-visible" >
			<div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
			<div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
			<div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
		</div>
	)
}
