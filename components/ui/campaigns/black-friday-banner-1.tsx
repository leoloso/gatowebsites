import BlackFridayImage from '@/public/assets/icons/black-friday/048-flash-sale-3.svg'
import Image from 'next/image'

export default function BlackFridayBanner1() {
  return (
    <div className="flex items-center justify-center">
        <div>
            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <div role="alert" className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gradient-to-tr from-violet-900 to-indigo-900 text-white flex">
                    <div className="">
                        <p className="font-bold text-red-500">
                            <span className="flex items-center justify-center">
                                <Image src={BlackFridayImage} width={24} height={24} alt="label" className='mr-1' />
                                <span>
                                    <span>Black Friday Sale</span>
                                    <span className="text-gray-300"> - </span><span className="text-white">50% off any product!</span>
                                    <span className="ml-4 text-yellow-500"> Use discount code: <span className="text-yellow-300">BF2025</span></span>
                                    <span className="ml-4 text-gray-300 font-normal text-sm">Until Nov 29th</span>
                                </span>
                            </span>
                        </p>
                    </div>
                    {/* <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 !absolute top-3 right-3" type="button">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                    </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}