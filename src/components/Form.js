import { MdSend } from "react-icons/md";
export default function Form({ onSubmit, title, children, disabled }) {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <h1 className="text-sm font-semibold  text-primary-100">{title}</h1>

        {children}

        <button
          disabled={disabled}
          className="transition-color my-2 flex w-full flex-row items-center justify-center space-x-1 rounded-lg border py-2 text-sm font-semibold shadow-sm duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50  border-primary-700/20  bg-primary-800/50  text-primary-100"
          type="submit"
        >
          Submit
          <MdSend className="mx-1 text-lg" />
        </button>
      </form>
    </div>
  );
}
