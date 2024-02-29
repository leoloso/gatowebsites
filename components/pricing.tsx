import AppConfig from "@/app/app.config"
import PricingTier from "./pricing-tier"
import PricingGroup from "./pricing-group"
import PricingItem from "./pricing-item"

export default function Pricing() {
  return (
    <div className="relative">
      {/* Blurred shape */}
      <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-purple-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none">
        {/* Pricing toggle */}
        <div className="px-6 flex flex-col justify-end">
          &nbsp;
        </div>
        {/* Pro price */}
        <PricingTier
          name='Pro'
          price={24}
          description='Everything at your fingertips.'
          buttonLabel="Purchase"
          buttonURL={AppConfig.urls.shopPurchaseVariation1}
        />
        {/* Team price */}
        <PricingTier
          name='Team'
          price={49}
          description='Everything at your fingertips.'
          buttonLabel="Purchase"
          buttonURL={AppConfig.urls.shopPurchaseVariation2}
          highlight={true}
        />
        {/* Enterprise price */}
        <PricingTier
          name='Enterprise'
          price={79}
          description='Everything at your fingertips.'
          buttonLabel="Purchase"
          buttonURL={AppConfig.urls.shopPurchaseVariation3}
        />
        {/* # Usage */}
        <PricingGroup columns={3} name="Usage" />
        {/* Domains */}
        <PricingItem
          columns={3}
          name="Domains"
          ticks={[true, true, true]}
          contents={[
            <span>4 <span className="md:hidden">Domains</span></span>,
            <span>Unlimited <span className="md:hidden">Domains</span></span>,
            <span>Unlimited <span className="md:hidden">Domains</span></span>,
          ]}
        />
        {/* # Features */}
        <PricingGroup columns={3} name="Features" />
        {/* Custom Connection */}
        <PricingItem
          columns={3}
          name="Custom Connection"
          ticks={[true, true, true]}
          contents={[
            <span><span className="md:hidden">Custom Connection</span></span>,
            <span><span className="md:hidden">Custom Connection</span></span>,
            <span><span className="md:hidden">Custom Connection</span></span>,
          ]}
        />
        {/* # Support */}
        <PricingGroup columns={3} name="Support" />
        {/* Premium Support */}
        <PricingItem
          columns={3}
          name="Premium Support"
          ticks={[false, true, true]}
          contents={[
            <span><span className="md:hidden">Premium Support</span></span>,
            <span><span className="md:hidden">Premium Support</span></span>,
            <span><span className="md:hidden">Premium Support</span></span>,
          ]}
        />
      </div>
    </div>
  )
}