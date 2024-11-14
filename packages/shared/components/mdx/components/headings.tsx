import clsx from "clsx";
import { TsHeading } from "./Heading";

function Heading({
  headingLevel,
  id,
  children,
  className = '',
  hidden = false,
  ...props
}: {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
  id: string,
  children: React.ReactNode,
  className?: string,
  hidden?: boolean,
}) {
  return (
    <TsHeading
      headingLevel={headingLevel}
      className={clsx('flex whitespace-pre-wrap', className)}
      id={id}
      {...props}
    >
      <a
        className={clsx('group relative border-none', hidden ? 'sr-only' : 'lg:-ml-2 lg:pl-2')}
        href={`#${id}`}
      >
        <div className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
          &#8203;
          <div
            className={clsx(
              'flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10',
              'dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200'
            )}
          >
            <svg width="12" height="12" fill="none" aria-hidden="true">
              <path
                d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {children}
      </a>
    </TsHeading>
  )
}

export const H1 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Heading headingLevel='h1' id={`${id}`} {...rest}>{children}</Heading>
    );
  }
  return <h1 id={`${id}`} {...rest} />;
};

export const H2 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Heading headingLevel='h2' id={`${id}`} {...rest}>{children}</Heading>
    );
  }
  return <h2 id={`${id}`} {...rest} />;
};

export const H3 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Heading headingLevel='h3' id={`${id}`} {...rest}>{children}</Heading>
    );
  }
  return <h3 id={`${id}`} {...rest} />;
};

export const H4 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Heading headingLevel='h4' id={`${id}`} {...rest}>{children}</Heading>
    );
  }
  return <h4 id={`${id}`} {...rest} />;
};

export const H5 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Heading headingLevel='h5' id={`${id}`} {...rest}>{children}</Heading>
    );
  }
  return <h5 id={`${id}`} {...rest} />;
};

export const H6 = ({ id, children, ...rest }: { id?: string, children?: React.ReactNode }) => {
  if (id) {
    return (
      <Heading headingLevel='h6' id={`${id}`} {...rest}>{children}</Heading>
    );
  }
  return <h6 id={`${id}`} {...rest} />;
};