import clsx from "clsx";

interface AlertProps {
  type: string
  children: React.ReactNode
}

export default function Alert({ type, ...props }: AlertProps) {

  const alertClassnames = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-800 border-green-500 dark:bg-green-900 dark:border-green-600';
      default:
      // case 'error':
        return 'bg-red-800 border-red-500 dark:bg-red-900 dark:border-red-600';
    }
  }

  const typeIcon = (type: string) => {
    switch (type) {
      case 'success':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-green-600 stroke-current shrink-0 h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
      // case 'error':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-red-600 stroke-current shrink-0 h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  }

  return (
    <div className={clsx("text-sm p-4 border rounded", alertClassnames(type))}>
      <div className="flex items-start">
        {typeIcon(type)}
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}