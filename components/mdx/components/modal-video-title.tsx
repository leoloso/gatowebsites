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
        <p className={clsx("absolute bottom-0 text-slate-300 mb-4 sm:text-lg sm:mb-12", extraClassname)} data-aos="fade-down" data-aos-delay="400">{title}</p>
      )}
    </>
  )
}