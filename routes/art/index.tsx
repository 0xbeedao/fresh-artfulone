import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function ArtIndex({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl pt-10 xl:pt-[120px]">
      <Seo url={url.toString()} templateTitle="About" />
      <h1 class="text-white text-3xl font-semibold mt-20">Art Projects</h1>
      <p class="mt-2">
        I do lots of different types of art, but lately I've been most
        interested in doing sculptures and castings. Lately, my favorite is to
        use concrete and glass.
      </p>
      <p class="mt-2">
        I'll add more projects here as I write them up, but for now, enjoy my
        {" "}
        <UnstyledLink href="/art/octagon" className="underline">
          Octagonal Sculpture and Materials Calculator
        </UnstyledLink>
      </p>
    </div>
  );
}
