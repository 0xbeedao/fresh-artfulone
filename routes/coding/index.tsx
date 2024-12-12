import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function CodingIndex({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl xl:pt-[10px]">
      <Seo url={url.toString()} templateTitle="Coding" />
      <h1 class="dark:text-gray-100 text-gray-900 text-3xl font-semibold mt-20">
        Coding Projects
      </h1>
      <p class="mt-3">
        My coding projects are all available from{" "}
        <UnstyledLink
          href="https://github.com/0xbeedao"
          className="underline"
        >
          my github profile.
        </UnstyledLink>
      </p>
      <p class="mt-3">
        My latest interesting project has been doing some exploration of AI
        using freely available tools, using as little code as possible. Python
        and Gradio for the win there!
        <div class="mt-3 dark:bg-zinc-700 bg-zinc-300  p-3 rounded-lg">
          <UnstyledLink
            className="underline block"
            href="https://huggingface.co/spaces/BruceDev/superhero-generator"
          >
            AI Superhero Name &amp; Background Generator
          </UnstyledLink>
          This app explores using two different LLMs to generate superheroes. My
          intent is to add more &ldquo;Mood&rdquo; and genre settings, and to
          generate a much more detailed background which at least has some
          internal consistency.
        </div>
      </p>
    </div>
  );
}
