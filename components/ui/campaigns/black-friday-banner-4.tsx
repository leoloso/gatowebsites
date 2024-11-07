import BlackFridayImage from '@/public/assets/icons/black-friday/042-sale-4.svg'
import Image from 'next/image'

export default function BlackFridayBanner4() {
  return (
    <div className="flex items-center justify-center">
        <div>
            <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                        <Image
                            src={BlackFridayImage}
                            alt="Gato GraphQL logo"
                            width={375} height={375}
                            className="object-cover w-full h-full"
                        />
                        {/* <!-- Black Friday Mega Offer --> */}
                        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-xl">
                        <h2 className="text-4xl font-bold text-center"> Black Friday <br /> 
                        <span className="text-red-500"> 50% Off</span>
                        </h2>
                        
                        </div>
                        {/* <!-- End Black Friday Mega Offer --> */}
                    </div>
                    <div className="p-6">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-500 uppercase">
                        Startups
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Lyft launching cross-platform service this week
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                        </p>
                        <a className="inline-block" href="#">
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Buy Now
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                            </svg>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
