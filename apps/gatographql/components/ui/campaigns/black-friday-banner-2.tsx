import BlackFridayImage from '@gato/public/assets/icons/black-friday/048-flash-sale-3.svg'
import Image from 'next/image'

export default function BlackFridayBanner2() {
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
                            Here today deal
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            50% off any product!
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            Get any Gato GraphQL extension for only half the price. That includes the “All Extensions” bundle, any single extension, and the Long Term Deals (pay once at a discount, and enjoy forever).
                        </p>
                        <span
                            className="font-sans text-xs font-bold text-center text-red-500 uppercase align-middle"
                        >
                            Ends Nov 29th
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
