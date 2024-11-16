import { useAppComponentProvider } from '@gato/app/appcomponent-provider'

export default function Footer() {
  const AppComponent = useAppComponentProvider()
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {AppComponent.footer.menu}
        </div>

      </div>
    </footer>
  )
}
