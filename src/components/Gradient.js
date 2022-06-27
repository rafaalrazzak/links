export default function Gradient() {
  return (
    <div className="-z-50 flex w-full max-w-lg items-center justify-center overflow-x-hidden md:m-0 md:overflow-x-visible">
      <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-amber-400 opacity-30 mix-blend-multiply blur-3xl filter md:h-96 md:w-96"></div>
      <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-teal-300 opacity-30 mix-blend-multiply blur-3xl filter md:h-96 md:w-96"></div>
      <div className="animation-delay-4000 absolute top-0 h-72 w-72 animate-blob rounded-full bg-pink-500 opacity-30 mix-blend-multiply blur-3xl filter md:h-96 md:w-96"></div>
    </div>
  );
}
