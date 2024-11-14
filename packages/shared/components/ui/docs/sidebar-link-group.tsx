import { useState } from 'react'

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, openGroup: boolean) => React.ReactNode
  open: boolean
}

export default function SidebarLinkGroup({
  children,
  open
}: SidebarLinkGroupProps) {
  const [openGroup, setOpenGroup] = useState<boolean>(open)

  const handleClick = () => {
    setOpenGroup(!openGroup);
  }  

  // clicking on prev/next will recalculate the "open" state
  // then, open the group when clicking on prev/next for some doc
  return (
    children(handleClick, open || openGroup)
  )
}
