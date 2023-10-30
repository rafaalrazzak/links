export default function Input({ label, ...props }) {
  return (
    <>
      <label className="text-sm   text-primary-100" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="focus:outline-secondary-600  focus:outline-secondary-500 flex w-full rounded-lg  px-4 py-2 text-smoutline-none transition-all duration-300 ease-out placeholder:text-sm  focus:drop-shadow-sm 
       bg-primary-800/50  text-primary-100  focus:outline-1"
        {...props}
      />
    </>
  );
}
