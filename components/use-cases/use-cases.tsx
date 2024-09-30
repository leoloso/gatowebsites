"use client";

import Particles from '../particles'
import { useState, Fragment } from "react";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import UseCasesSlide1 from './slide-1';
import UseCasesSlide2 from './slide-2';
import UseCasesSlide3 from './slide-3';

const tabs = [
  {
    title: "Code performant apps",
    description: "Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less.",
  },
  {
    title: "Build headless sites",
    description: "Use WordPress as the CMS to manage data, and your JavaScript framework of choice to render the site.",
  },
  {
    title: "Speed up creating Gutenberg blocks",
    description: "Ship Gutenberg blocks faster, by avoiding creating REST controllers to feed them data.",
  },
];

export default function UseCases() {

  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={10} />
        </div>

        <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} vertical>
          {/* <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20"> */}
          <div className="pt-16 pb-12 md:pt-32 md:pb-20 border-b border-slate-800">
            <div className="flex flex-col items-center justify-between md:flex-row md:gap-8 lg:gap-16 pb-8">
              {/* Left content */}
              <div className="shrink-0 md:w-[500px] [&_>*]:pl-7">
                <span className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                  Standard use cases
                </span>
                <div className="relative mb-6 border-l overflow-hidden [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.400/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,_transparent,_theme(colors.purple.500/.5)_25%,_theme(colors.purple.500)_50%,_theme(colors.purple.500/.5)_75%,_transparent)] after:opacity-0">
                  <div className="mb-4">
                    <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                      Expose WordPress data via GraphQL
                    </h2>
                    <p className="text-purple-200/65">
                      Gato GraphQL is a plugin for WordPress, that implements the GraphQL specification.
                    </p>
                  </div>

                  {/* Buttons */}
                  <TabList className="space-y-2">
                    {tabs.map((tab, index) => (
                      <Tab key={index} as={Fragment}>
                        <button
                          className={`-mx-2 flex gap-2 p-2 text-left transition-opacity focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-purple-300 ${selectedTab !== index ? "opacity-50 hover:opacity-70" : ""}}`}
                        >
                          <svg
                            className={`shrink-0 ${selectedTab !== index ? "fill-gray-600" : "fill-purple-500"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                          >
                            <path d="m14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z" />
                          </svg>
                          <span>
                            <span className="font-medium text-gray-200">
                              {tab.title}
                            </span>
                            <span className="text-gray-600"> - </span>
                            <span className="text-slate-400">
                              {tab.description}
                            </span>
                          </span>
                        </button>
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>

              {/* Right content */}
              <TabPanels className="shrink-0 md:w-[540px]" data-aos="fade-up">
                <div className="relative flex flex-col">
                  {tabs.map((tab, index) => (
                    <Transition
                      key={index}
                      as="div"
                      show={selectedTab === index}
                      className={`transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:absolute data-[enter]:data-[closed]:-translate-y-6 data-[leave]:data-[closed]:translate-y-12 data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-300`}
                      unmount={false}
                      appear={true}
                    >
                      <TabPanel static={true}>
                        <div className='w-[540px] h-[520px] flex items-center justify-center'>
                          { index === 0 && (
                            <UseCasesSlide1 />
                          )}
                          { index === 1 && (
                            <UseCasesSlide2 />
                          )}
                          { index === 2 && (
                            <UseCasesSlide3 />
                          )}
                        </div>
                      </TabPanel>
                    </Transition>
                  ))}
                </div>
              </TabPanels>
            </div>
          </div>
        </TabGroup>
      </div>
    </section>
  )
}