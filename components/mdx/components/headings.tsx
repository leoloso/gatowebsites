import clsx from "clsx";
import Link from "next/link";

export const H1 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h1 className='flex whitespace-pre-wrap' id={`${id}`} {...rest}>
        <Link href={`#${id}`} className='group relative border-none lg:-ml-2 lg:pl-2'>
          <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
            ​<span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </span>
          </span>
          {children}
        </Link>
      </h1>
    );
  }
  return <h1 id={`${id}`} {...rest} />;
};

export const H2 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h2 className='flex whitespace-pre-wrap' id={`${id}`} {...rest}>
        <Link href={`#${id}`} className='group relative border-none lg:-ml-2 lg:pl-2'>
          <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
            ​<span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </span>
          </span>
          {children}
        </Link>
      </h2>
    );
  }
  return <h2 id={`${id}`} {...rest} />;
};

export const H3 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h3 className='flex whitespace-pre-wrap' id={`${id}`} {...rest}>
        <Link href={`#${id}`} className='group relative border-none lg:-ml-2 lg:pl-2'>
          <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
            ​<span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </span>
          </span>
          {children}
        </Link>
      </h3>
    );
  }
  return <h3 id={`${id}`} {...rest} />;
};

export const H4 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h4 className='flex whitespace-pre-wrap' id={`${id}`} {...rest}>
        <Link href={`#${id}`} className='group relative border-none lg:-ml-2 lg:pl-2'>
          <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
            ​<span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </span>
          </span>
          {children}
        </Link>
      </h4>
    );
  }
  return <h4 id={`${id}`} {...rest} />;
};

export const H5 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h5 className='flex whitespace-pre-wrap' id={`${id}`} {...rest}>
        <Link href={`#${id}`} className='group relative border-none lg:-ml-2 lg:pl-2'>
          <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
            ​<span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </span>
          </span>
          {children}
        </Link>
      </h5>
    );
  }
  return <h5 id={`${id}`} {...rest} />;
};

export const H6 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h6 className='flex whitespace-pre-wrap' id={`${id}`} {...rest}>
        <Link href={`#${id}`} className='group relative border-none lg:-ml-2 lg:pl-2'>
          <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
            ​<span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </span>
          </span>
          {children}
        </Link>
      </h6>
    );
  }
  return <h6 id={`${id}`} {...rest} />;
};