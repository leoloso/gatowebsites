import BlackFridayImage from '@/public/assets/icons/black-friday/048-flash-sale-3.svg'
import clsx from 'clsx';
import Image from 'next/image'

export const style1 = 1;
export const style2 = 2;
export const style3 = 3;

export default function BlackFridayBanner({
    applyStyle = style3,
  }: {
    applyStyle?: number,
  }) {
  return (
    <div className="flex items-center justify-center">
        <div>
            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <div className={clsx("relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gradient-to-tr flex text-white", applyStyle === style1 && "from-violet-900 to-indigo-600", applyStyle === style2 && "from-orange-500 to-red-500", applyStyle === style3 && "from-fuchsia-500 to-fuchsia-800")}>
                    <div className="">
                        <p className={clsx("font-bold", applyStyle === style1 && "text-red-500", applyStyle === style2 && "text-black", applyStyle === style3 && "text-yellow-300")}>
                            <span className="flex items-center justify-center">
                                <Image src={BlackFridayImage} width={26} height={26} alt="label" className='mr-2' />
                                <span>
                                    <span>Black Friday Sale</span>
                                    <span className="text-gray-300"> - </span><span className="text-white text-lg">50% off any product!</span>
                                    <span className={clsx("ml-4", applyStyle === style1 && "text-yellow-500", applyStyle === style2 && "text-yellow-300", applyStyle === style3 && "text-amber-300")}> Use discount code: <span className={clsx("text-lg", applyStyle === style1 && "text-yellow-300", (applyStyle === style2 || applyStyle === style3) && "text-white")}>BF2024</span></span>
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
