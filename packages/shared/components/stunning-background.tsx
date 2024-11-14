import Image from 'next/image'
import Particles from '@gato/components/particles'
import Illustration from '@/public/assets/theme/page-illustration.svg'
import Illustration02 from '@/public/assets/theme/page-illustration-02.svg'

export default function StunningBackground({
  addOpacityLayer = false,
}: {
  addOpacityLayer?: boolean
}) {
  return (
    <>
      {addOpacityLayer && (
        <>
          {/* Illustration 02 */}
          <div className="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
            <Image src={Illustration02} className="max-w-none" width={1440} height={427} alt="Page Illustration 02" priority />
          </div>

          {/* Opacity layer */}
          <div className="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div>
        </>
      )}

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" priority />
      </div>
    </>
  )
}
