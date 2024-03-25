import React from 'react'

// @see https://github.com/tailwindlabs/tailwindcss.com/blob/master/src/components/Heading.js
// @see https://kattow.dev/blog/reusable-accessible-headings

// the interface needs to explicitly declare which strings are safe to pass
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

export const TsHeading = ({
  headingLevel = "p",
  children,
  className,
  id,
}: HeadingProps) => {
  const DynamicHeading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement(headingLevel, props, children)
  return <DynamicHeading id={id} className={className}>{children}</DynamicHeading>
}
