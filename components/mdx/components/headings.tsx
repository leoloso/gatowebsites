import clsx from "clsx";
import Link from "next/link";

export const H1 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <span className='group flex items-center'>
        <h1 id={`${id}`} {...rest}>{children}</h1>
        <Link href={`#${id}`} className='hidden group-hover:inline not-prose scroll-smooth text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link>
      </span>
    );
  }
  return <h1 id={`${id}`} {...rest} />;
};

export const H2 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <span className='group flex items-center'>
        <h2 id={`${id}`} {...rest}>{children}</h2>
        <Link href={`#${id}`} className='hidden group-hover:inline not-prose scroll-smooth text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link>
      </span>
    );
  }
  return <h2 id={`${id}`} {...rest} />;
};

export const H3 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <span className='group flex items-center'>
        <h3 id={`${id}`} {...rest}>{children}</h3>
        <Link href={`#${id}`} className='hidden group-hover:inline not-prose scroll-smooth text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link>
      </span>
    );
  }
  return <h3 id={`${id}`} {...rest} />;
};

export const H4 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <span className='group flex items-center'>
        <h4 id={`${id}`} {...rest}>{children}</h4>
        <Link href={`#${id}`} className='hidden group-hover:inline not-prose scroll-smooth text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link>
      </span>
    );
  }
  return <h4 id={`${id}`} {...rest} />;
};

export const H5 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <span className='group flex items-center'>
        <h5 id={`${id}`} {...rest}>{children}</h5>
        <Link href={`#${id}`} className='hidden group-hover:inline not-prose scroll-smooth text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link>
      </span>
    );
  }
  return <h5 id={`${id}`} {...rest} />;
};

export const H6 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <span className='group flex items-center'>
        <h6 id={`${id}`} {...rest}>{children}</h6>
        <Link href={`#${id}`} className='hidden group-hover:inline not-prose scroll-smooth text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link>
      </span>
    );
  }
  return <h6 id={`${id}`} {...rest} />;
};