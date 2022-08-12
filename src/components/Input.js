export default function Input({ label, ...props }) {
  return (
    <>
      <label
        className="text-sm text-primary-700 dark:text-primary-100"
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        className="focus:outline-secondary-600 dark:focus:outline-secondary-500 flex w-full rounded-lg bg-primary-300/50 py-2 px-4 text-sm text-primary-700 outline-none transition-all duration-300 ease-out placeholder:text-sm focus:outline-1 focus:drop-shadow-sm 
      dark:bg-primary-800/50 dark:text-primary-100 dark:focus:outline-1"
        {...props}
      />
    </>
  );
}
