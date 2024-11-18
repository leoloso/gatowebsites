import FeatureCard from './feature-card'
import { Feature } from 'gatoapp/types/types';
import RadiantGradient from './radial-gradient';
import { StaticImageData } from 'next/image';

export default function UnstyledFeaturesList({
  features,
  showTopbar = true,
  showSearch = false,
  showHeading = true,
  addRadialGradient = false,
  children,
  defaultFeatureIcon,
  bgClassname,
}: {
  features: Array<Feature>,
  showTopbar?: boolean
  showSearch?: boolean
  showHeading?: boolean
  addRadialGradient?: boolean
  children?: React.ReactNode
  defaultFeatureIcon?: StaticImageData,
  bgClassname?: string,
}) {
  return (
    <section className="relative">
      {/* Radial gradient */}
      { addRadialGradient && (
        <RadiantGradient />
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Header */}
          {children}

          {/* Topbar */}
          { showTopbar && (
            <div className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
              {/* Search */}
              { showSearch && (
                <div>
                  <form className="relative flex items-center">
                    <input className="form-input pl-10 bg-transparent rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-9 lg:focus:w-[200px] transition-[width]" type="text" id="features-search" aria-label="Search…" placeholder="Search…" autoComplete="off" />
                    <div className="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                      <svg className="absolute fill-slate-50 mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z" />
                      </svg>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Cards */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => 
                <div key={index} className={`${showHeading ? 'mt-12 md:mt-16' : ''}`}>
                  <div key={index}>
                    <FeatureCard
                      feature={feature}
                      defaultFeatureIcon={defaultFeatureIcon}
                      bgClassname={bgClassname}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

