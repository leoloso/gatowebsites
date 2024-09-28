import Image from 'next/image'
import clsx from "clsx";
import GraphQLLogo from '@/public/assets/external-logos/graphql-logo.svg'
import { SnippetMdx } from "./mdx/snippet-mdx";
import { getSnippet } from "@/utils/content/snippet";

export default function UseCasesSlide1() {
  const codeBSnippet = getSnippet('use-cases/ask-for-what-you-want')
  const codeCSnippet = getSnippet('use-cases/get-predictable-results')
  return (
    <div
      className={clsx(
        "flex-wrap gap-14 justify-center items-center flex max-sm:flex-col",
        "[&_h3]:text-white [&_h3]:text-2xl max-lg:[&_h3]:text-center",
        "[&_pre]:!bg-transparent [&_pre]:ring-0 [&_pre_span]:text-[--shiki-dark]",
        "[&_h3]:font-extralight",
        "[&_code]:whitespace-pre-wrap" /* fix scroll on mobile for code-blocks */,
      )}
    >
      <div className="max-md:grow max-xl:w-full flex flex-col items-center gap-2">
        {/* <GraphQLLogo className="w-24" /> */}
        <Image className="w-24" src={GraphQLLogo} width={150} height={150} alt="GraphQL logo" />
        <h1 className="text-[#E10098] text-3xl">GraphQL</h1>
      </div>

      <div>
        <h3>Ask for what you want</h3>
        <SnippetMdx code={codeBSnippet.body.code} />
      </div>

      <div>
        <h3>Get predictable results</h3>
        <SnippetMdx code={codeCSnippet.body.code} />
      </div>
    </div>
  )
}