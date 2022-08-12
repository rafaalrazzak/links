export default function Form({ onSubmit, title, children, disabled }) {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <h1 className="text-sm text-primary-700 dark:text-primary-100">
          {title}
        </h1>

        {children}

        <button
          disabled={disabled}
          className="transition-color my-2 flex w-full flex-row items-center justify-center space-x-1 rounded-lg border border-primary-400/20 bg-primary-300/50 py-2 text-primary-700 shadow-sm duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-700/20 dark:bg-primary-800/50 dark:text-primary-100"
          type="submit"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
