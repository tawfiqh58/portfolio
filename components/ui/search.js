import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput({
  q,
  handleChange,
  placeholder
}) {
  return (
    <div className="relative">
      <input
        type="text"
        defaultValue={q}
        onChange={handleChange}
        placeholder={placeholder}
        name="q"
        id="q"
        className="w-full rounded-md border px-3 py-2 outline-none focus:border-gray-300 focus:shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:focus:border-white"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}
