import clsx from "clsx";
import Link from "next/link";

export const H1 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h1 id={`${id}`} {...rest}><span className='group'>{children}<Link href={`#${id}`} className='hidden group-hover:inline not-prose text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link></span></h1>
    );
  }
  return <h1 id={`${id}`} {...rest} />;
};

export const H2 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h2 id={`${id}`} {...rest}><span className='group'>{children}<Link href={`#${id}`} className='hidden group-hover:inline not-prose text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link></span></h2>
    );
  }
  return <h2 id={`${id}`} {...rest} />;
};

export const H3 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h3 id={`${id}`} {...rest}><span className='group'>{children}<Link href={`#${id}`} className='hidden group-hover:inline not-prose text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link></span></h3>
    );
  }
  return <h3 id={`${id}`} {...rest} />;
};

export const H4 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h4 id={`${id}`} {...rest}><span className='group'>{children}<Link href={`#${id}`} className='hidden group-hover:inline not-prose text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link></span></h4>
    );
  }
  return <h4 id={`${id}`} {...rest} />;
};

export const H5 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h5 id={`${id}`} {...rest}><span className='group'>{children}<Link href={`#${id}`} className='hidden group-hover:inline not-prose text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link></span></h5>
    );
  }
  return <h5 id={`${id}`} {...rest} />;
};

export const H6 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <h6 id={`${id}`} {...rest}><span className='group'>{children}<Link href={`#${id}`} className='hidden group-hover:inline not-prose text-slate-300 dark:text-slate-500 hover:no-underline hover:text-slate-300 hover:dark:text-slate-400 ml-2'>#</Link></span></h6>
    );
  }
  return <h6 id={`${id}`} {...rest} />;
};