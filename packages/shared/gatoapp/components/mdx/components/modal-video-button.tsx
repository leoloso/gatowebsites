import clsx from "clsx"

export default function ModalVideoButton({
  title,
  extraClassname,
}: {
  title?: string
  extraClassname?: string,
}) {
  return (
    <>
      <button className={clsx("absolute group", extraClassname)} aria-label={ title }>
        <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
          <circle className="text-white opacity-90 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
          <path
            className="text-blue-600"
            d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
          />
        </svg>
      </button>
    </>
  )
}