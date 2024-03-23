import Link from "next/link";

export const H1 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Link href={`#${id}`} className='group'>
        <h1 id={`${id}`} {...rest}>{children}<span className='hidden group-hover:inline text-slate-300 dark:text-slate-500 ml-2'>#</span></h1>
      </Link>
    );
  }
  return <h1 id={`${id}`} {...rest} />;
};

export const H2 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Link href={`#${id}`} className='group'>
        <h2 id={`${id}`} {...rest}>{children}<span className='hidden group-hover:inline text-slate-300 dark:text-slate-500 ml-2'>#</span></h2>
      </Link>
    );
  }
  return <h2 id={`${id}`} {...rest} />;
};

export const H3 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Link href={`#${id}`} className='group'>
        <h3 id={`${id}`} {...rest}>{children}<span className='hidden group-hover:inline text-slate-300 dark:text-slate-500 ml-2'>#</span></h3>
      </Link>
    );
  }
  return <h3 id={`${id}`} {...rest} />;
};

export const H4 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Link href={`#${id}`} className='group'>
        <h4 id={`${id}`} {...rest}>{children}<span className='hidden group-hover:inline text-slate-300 dark:text-slate-500 ml-2'>#</span></h4>
      </Link>
    );
  }
  return <h4 id={`${id}`} {...rest} />;
};

export const H5 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Link href={`#${id}`} className='group'>
        <h5 id={`${id}`} {...rest}>{children}<span className='hidden group-hover:inline text-slate-300 dark:text-slate-500 ml-2'>#</span></h5>
      </Link>
    );
  }
  return <h5 id={`${id}`} {...rest} />;
};

export const H6 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Link href={`#${id}`} className='group'>
        <h6 id={`${id}`} {...rest}>{children}<span className='hidden group-hover:inline text-slate-300 dark:text-slate-500 ml-2'>#</span></h6>
      </Link>
    );
  }
  return <h6 id={`${id}`} {...rest} />;
};