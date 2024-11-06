

export default function BlackFridayBanner3() {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <div>
            <div
              role="alert"
              className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white flex"
              // style="opacity: 1;"
            >
                <div className="shrink-0">
                    🎁
                </div>
                <div className="ml-3 mr-12">
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium">Black Friday Special Offers:</p>
                    <ul className="mt-2 ml-2 list-inside list-disc">
                    <li>Massive discounts up to 70% off!</li>
                    <li>Exclusive deals on electronics, fashion, home goods, and more!</li>
                    <li>Free shipping on orders over $50.</li>
                    <a href="#" className="absolute inset-y-0 right-0 flex items-center px-4 py-2 bg-red-600 text-white rounded-l-lg">
                        <p className="text-sm font-bold">Shop Now - Limited Time Offer!</p>
                    </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
