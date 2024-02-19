import { useState } from 'react'

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, openGroup: boolean) => React.ReactNode
  open: boolean,
  key: number
}

export default function SidebarLinkGroup({
  children,
  open,
  key
}: SidebarLinkGroupProps) {
  const [openGroup, setOpenGroup] = useState<boolean>(open)

  const handleClick = () => {
    setOpenGroup(!openGroup);
  }  

  return (
    <li className="mb-1" key={key}>
      {children(handleClick, openGroup)}
    </li>
  )
}
