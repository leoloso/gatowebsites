'use client'

import { useState } from 'react'
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react'

export interface DropdownInterface {
  options: Array<
    {
      id: number,
      value: string
    }
  >
}

export default function FullWidthDropdown({options}: DropdownInterface) {

  const [selected, setSelected] = useState<number>(0)

  return (
    <Menu as="div" className="relative inline-flex w-full">
      {({ open }) => (
        <>
          <MenuButton className="btn w-full justify-between min-w-[11rem] bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-700/60 hover:border-blue-300 dark:hover:border-blue-600 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100" aria-label="Select option">
            <span className="flex items-center">
              <span>{options[selected].value}</span>
            </span>
            <svg className="shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500" width="11" height="7" viewBox="0 0 11 7">
              <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
            </svg>
          </MenuButton>
          <Transition
            as="div"
            className="z-10 absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1"
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <MenuItems className="font-medium text-sm text-gray-600 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700/60 focus:outline-none">
              {options.map((option, optionIndex) => (
                <MenuItem key={optionIndex}>
                  {({ active }) => (
                    <button
                      className={`flex items-center text-left justify-between w-full py-2 px-3 cursor-pointer ${active ? 'bg-gray-50 dark:bg-gray-700/20' : ''} ${option.id === selected && 'text-blue-300'}`}
                      onClick={() => { setSelected(option.id) }}
                    >
                      <span>{option.value}</span>
                      <svg className={`shrink-0 mr-2 fill-current text-blue-300 ${option.id !== selected && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                        <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                      </svg>
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  )
}