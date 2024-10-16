import clsx from "clsx"

export default function ModalVideoTitle({
  title,
  extraClassname,
}: {
  title?: string
  extraClassname?: string,
}) {
  return (
    <>
      {!! title && (
        <p
          className={clsx("absolute bottom-0 text-slate-300 mb-4 sm:text-lg md:text-xl sm:mb-8 md:mb-12", extraClassname)}
          // data-aos="fade-down"
          // data-aos-delay="200"
        >
            {title}
        </p>
      )}
    </>
  )
}