import SectionHeader from './section-header'
import Image from 'next/image'
import Particles from './particles'
import Logo from '@/public/assets/GatoGraphQL-logo-face.png'
import ComparisonTargetBg01 from '@/public/assets/theme/customer-bg-01.png'
import ComparisonTargetBg02 from '@/public/assets/theme/customer-bg-02.png'
import ComparisonTargetBg03 from '@/public/assets/theme/customer-bg-03.png'
import ComparisonTargetBg04 from '@/public/assets/theme/customer-bg-04.png'
import FromLogoImg01 from '@/public/assets/automator/logos/gravity-forms-icon.svg'
import FromLogoImg02 from '@/public/assets/automator/logos/learndash.svg'
import FromLogoImg03 from '@/public/assets/automator/logos/woocommerce.svg'
import FromLogoImg04 from '@/public/assets/automator/logos/wpforms-icon.svg'
import ToLogoImg01 from '@/public/assets/automator/logos/airtable-icon.svg'
import ToLogoImg02 from '@/public/assets/automator/logos/hubspot-icon.svg'
import ToLogoImg03 from '@/public/assets/automator/logos/zapier-icon.svg'
import ToLogoImg04 from '@/public/assets/automator/logos/mailchimp-bg-icon.svg'
import Highlighter, { HighlighterItem02 } from './highlighter'

export default function Features07() {
  const automationEntries = [
    {
      backgroundImg: ComparisonTargetBg01,
      fromLogoImg: FromLogoImg01,
      toLogoImg: ToLogoImg01,
      desc: 'Gravity Forms to AirTable'
    },
    {
      backgroundImg: ComparisonTargetBg02,
      fromLogoImg: FromLogoImg02,
      toLogoImg: ToLogoImg02,
      desc: 'LearnDash to HubSpot'
    },
    {
      backgroundImg: ComparisonTargetBg03,
      fromLogoImg: FromLogoImg03,
      toLogoImg: ToLogoImg03,
      desc: 'WooCommerce to Zapier'
    },
    {
      backgroundImg: ComparisonTargetBg04,
      fromLogoImg: FromLogoImg04,
      toLogoImg: ToLogoImg04,
      desc: 'WPForms to Mailchimp'
    },
  ]
  return (
    <section className="relative">

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Blurred shape */}
        <div className="absolute top-0 right-0 blur-2xl opacity-70 pointer-events-none -z-10 rotate-[90deg] lg:mr-24" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">

          {/* Section header */}
          <SectionHeader
            leading='GraphQL as automator'
            title="Automate everything"
            description="Execute a GraphQL persisted query to deal with admin tasks and content workflows."
          />

          {/* Icons with text */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-xs mx-auto md:max-w-none -m-5">
            {/* Block #1 */}
            <div className="text-center p-5">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-slate-200" d="M9.423 12.278H.87L11.614.458l-1.037 7.264h8.553L8.386 19.542l1.037-7.264Zm-6.293-1h7.447l-.74 5.18 7.033-7.736H9.423l.74-5.18-7.033 7.736Z" opacity=".8" />
                </svg>
              </div>
              <div className="font-bold text-slate-100 mb-1">Trigger on hooks</div>
              <p className="text-sm text-slate-400">Whenever an action hook is triggered, execute your GraphQL query.</p>
            </div>
            {/* Block #2 */}
            <div className="text-center p-5">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <g fill="none" fillRule="nonzero" opacity=".8">
                    <path className="fill-slate-600" d="M11.5 1h1v4h-1V1ZM23 11.5v1h-4v-1h4ZM12.5 23h-1v-4h1v4ZM1 12.5v-1h4v1H1Z" />
                    <path className="fill-slate-200" d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Zm0-1c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                  </g>
                </svg>
              </div>
              <div className="font-bold text-slate-100 mb-1">Trigger by WP-Cron</div>
              <p className="text-sm text-slate-400">Schedule to execute a task every hour, day, week or custom time amount.</p>
            </div>
            {/* Block #3 */}
            <div className="text-center p-5">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24">
                  <g fill="none" fillRule="nonzero" opacity=".8">
                    <path className="fill-slate-600" d="M14.416 3.527C13.841 4.39 13.5 5.242 13.5 6a1.5 1.5 0 1 0 3 0c0-.758-.34-1.61-.916-2.473A8.962 8.962 0 0 0 15 2.748c-.2.239-.398.5-.584.78ZM17.5 6a2.5 2.5 0 1 1-5 0c0-.992.41-2.015 1.084-3.027a9.979 9.979 0 0 1 1.062-1.327L15 1.293l.354.353a9.979 9.979 0 0 1 1.062 1.326C17.091 3.986 17.5 5.009 17.5 6ZM6 6.5c-1.374 0-2.5-1.055-2.5-2.375 0-.243.043-.492.125-.746.176-.548.523-1.108.99-1.672A9.774 9.774 0 0 1 5.677.62L6 .344l.323.275a9.774 9.774 0 0 1 1.061 1.089c.468.563.815 1.123.991 1.671.082.254.125.503.125.746C8.5 5.445 7.374 6.5 6 6.5Zm-.615-4.154c-.393.474-.678.933-.808 1.339-.051.16-.077.307-.077.44C4.5 4.877 5.164 5.5 6 5.5s1.5-.623 1.5-1.375c0-.133-.026-.28-.077-.44-.13-.406-.415-.865-.808-1.34A8.746 8.746 0 0 0 6 1.682c-.21.205-.42.43-.615.665Z" />
                    <path className="fill-slate-200" d="M9.483 14.562A6.495 6.495 0 0 1 15 11.5h4.5v.5a8.5 8.5 0 0 1-8.5 8.5H9.5v3h-1v-7H7A6.5 6.5 0 0 1 .5 10v-.5H4c2.89 0 5.26 2.23 5.483 5.062Zm-.485.938H8.5v1h.174a6.45 6.45 0 0 1 .324-1Zm.502 4H11a7.5 7.5 0 0 0 7.484-7H15A5.5 5.5 0 0 0 9.5 18v1.5Zm-1-4V15A4.5 4.5 0 0 0 4 10.5H1.522A5.5 5.5 0 0 0 7 15.5h1.5Z" />
                  </g>
                </svg>
              </div>
              <div className="font-bold text-slate-100 mb-1">Invoke external services</div>
              <p className="text-sm text-slate-400">Communicate with cloud-based services to synchronize state.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="pb-12 md:pb-20 border-b border-slate-800">
        {/* Images */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-0">
          <Highlighter className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:-mx-5">
            {automationEntries.map((automationEntry, index) => (
              <div key={index}>
                <HighlighterItem02>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="absolute inset-0 -z-10" quantity={3} />
                    <div className="flex items-center justify-center">
                      <Image className="w-full h-full aspect-video object-cover" src={automationEntry.backgroundImg} width={352} height={220} alt="Automation Target Background" aria-hidden="true" />
                      <div className="absolute flex items-center justify-center -mt-4">
                        <Image src={automationEntry.fromLogoImg} width={50} height={50} alt="Automation From Logo" />
                        <div className="sm:text-lg md:text-xl lg:text-2xl text-center font-medium font-inter antialiased text-slate-100 tracking-tight mx-2 sm:mx-4">
                          →
                        </div>
                        <div className="sm:max-w-[75px] md:max-w-[75px]">
                          <Image src={Logo} width={75} height={75} alt="Automation Gato GraphQL Logo" />
                        </div>
                        <div className="sm:text-lg md:text-xl lg:text-2xl text-center font-medium font-inter antialiased text-slate-100 tracking-tight mx-2 sm:mx-4">
                          →
                        </div>
                        <Image src={automationEntry.toLogoImg} width={50} height={50} alt="Automation To Logo" />
                      </div>
                      <div className="absolute bottom-0 mb-1 text-center text-sm font-medium font-inter antialiased bg-slate-900/70 text-slate-300 tracking-tight px-2">
                        {automationEntry.desc}
                      </div>
                    </div>
                  </div>
                </HighlighterItem02>
              </div>
            ))}
          </Highlighter>
        </div>
      </div>

    </section>
  )
}