export const sidebarDocTopicSVG1 = 1;
export const sidebarDocTopicSVG2 = 2;
export const sidebarDocTopicSVG3 = 3;

function getDocTopicSidebarSVG1() {
  return (
    <svg className="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-blue-400"
        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
      />
      <path
        className="fill-white dark:fill-slate-800"
        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
      />
      <path
        className="fill-blue-600"
        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
      />
    </svg>
  )
}

function getDocTopicSidebarSVG2() {
  return (
    <svg className="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-purple-400"
        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
      />
      <path
        className="fill-white dark:fill-slate-800"
        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
      />
      <path
        className="fill-purple-600"
        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
      />
    </svg>
  )
}

function getDocTopicSidebarSVG3() {
  return (
    <svg className="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-sky-400"
        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
      />
      <path
        className="fill-white dark:fill-slate-800"
        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
      />
      <path
        className="fill-sky-600"
        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
      />
    </svg>
  )
}

export default function SidebarDocTopicSVG({
  name,
  svgOption = sidebarDocTopicSVG1
}: {
  name: string
  svgOption?: number
}) {
  return (
    <>
      {svgOption === sidebarDocTopicSVG1 && (
        getDocTopicSidebarSVG1()
      )}
      {svgOption === sidebarDocTopicSVG2 && (
        getDocTopicSidebarSVG2()
      )}
      {svgOption === sidebarDocTopicSVG3 && (
        getDocTopicSidebarSVG3()
      )}
      <span>{name}</span>
    </>
  )
}
