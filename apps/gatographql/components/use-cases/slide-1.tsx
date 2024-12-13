import Image from 'next/image'
import clsx from "clsx";
import GraphQLLogo from '@/public/assets/external-logos/graphql-logo.svg'
import { SnippetMdx } from "gatoapp/components/mdx/snippet-mdx";
import { getSnippet } from "gatoapp/utils/content/snippet";

export default function UseCasesSlide1() {
  const codeBSnippet = getSnippet('use-cases/ask-for-what-you-want')
  const codeCSnippet = getSnippet('use-cases/get-predictable-results')
  return (
    <div
      className={clsx(
        "flex-wrap gap-7 justify-center items-center flex max-sm:flex-col",
        "[&_h3]:h3 [&_h3]:pb-2 [&_h3]:text-xl [&_h3]:text-center [&_h3]:bg-clip-text [&_h3]:text-transparent [&_h3]:bg-gradient-to-r [&_h3]:from-slate-200/60 [&_h3]:via-slate-200 [&_h3]:to-slate-200/60",
        "[&_pre]:!bg-slate-300/10 [&_pre]:ring-0 [&_pre_span]:text-[--shiki-dark]",
        // "[&_h3]:font-extralight",
        "[&_code]:whitespace-pre-wrap" /* fix scroll on mobile for code-blocks */,
      )}
    >
      <div className="max-md:grow max-xl:w-full flex flex-col items-center gap-2">
        <Image className="w-24" src={GraphQLLogo} width={150} height={150} alt="GraphQL logo" />
        <h1 className="text-[#E10098] text-3xl">GraphQL</h1>
      </div>

      <div
        className={clsx(
          "flex-wrap gap-7 justify-center items-center flex",
        )}
      >
        <div>
          <h3>Ask for what you want</h3>
          <SnippetMdx code={codeBSnippet.body.code} />
        </div>

        <div>
          <h3>Get predictable results</h3>
          <SnippetMdx code={codeCSnippet.body.code} />
        </div>
      </div>
    </div>
  )
}