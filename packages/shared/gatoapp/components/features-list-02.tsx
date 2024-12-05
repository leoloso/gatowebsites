import { FeatureProps } from './feature-card'
import { Feature } from 'gatoapp/types/types';
import Image, { StaticImageData } from 'next/image'

export default function FeaturesList02({
  features,
  children,
  featureIcon,
}: {
  features: Array<Feature | FeatureProps>,
  children?: React.ReactNode
  featureIcon?: StaticImageData,
}) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Header */}
          {children}

          {/* Cards */}
          <div>
            <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1] lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-gray-200 [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] md:[&>*]:px-10 md:[&>*]:py-12">
              {features.map((feature, index) => 
                <article key={index}>
                  <h3 className="mb-2 flex items-center space-x-2 font-medium">
                    { featureIcon && (
                      <Image src={featureIcon} width="40" height="40" alt={feature.title} />
                    )}
                    <span>{feature.title}</span>
                  </h3>
                  <p className="text-[15px] text-gray-700">
                    {feature.description}
                  </p>
                </article>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

