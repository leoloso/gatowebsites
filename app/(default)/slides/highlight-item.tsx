import WithTitleThumb from '@/components/thumbnails/with-title-thumb'
import slugify from '@sindresorhus/slugify';

export default function HighlightItem({ ...props }) {
  return (
    <header
      id={slugify(props.title)}
      className='aspect-video'
    >
      <WithTitleThumb
        title={props.title}
        titleClassname="h1"
        // extraThumbClassname="rounded-2xl"
        bgClassname="bg-gradient-to-tr from-slate-900 to-blue-900"
      />
    </header>
  )
}
