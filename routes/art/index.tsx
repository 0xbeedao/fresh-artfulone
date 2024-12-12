import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function ArtIndex({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl xl:pt-[10px]">
      <Seo url={url.toString()} templateTitle="About" />
      <h1 class="dark:text-gray-100 text-gray-900 text-3xl font-semibold mt-20">
        Art Projects
      </h1>
      <p class="mt-2">
        I do lots of different types of art, but lately I've been most
        interested in doing sculptures and castings. Lately, my favorite is to
        use concrete and glass.
      </p>
      <div class="mt-3 dark:bg-zinc-700 bg-zinc-300 p-3 rounded-lg flex items-center">
        <LoadAwareImage
          src="/art/glass-octagon-window-thumb.jpg"
          alt="Glass Octagon"
          height="240"
          width="240"
        />
        <UnstyledLink href="/art/octagon" className="underline ml-3">
          Octagonal Sculpture and Materials Calculator
        </UnstyledLink>
      </div>
      <div class="mt-3 dark:bg-zinc-700 bg-zinc-300  p-3 rounded-lg flex items-center">
        <LoadAwareImage
          src="/art/lotus.png"
          alt="Lotus"
          height="240"
          width="240"
        />
        <UnstyledLink href="/art/procedural/lotus" className="underline ml-3">
          Animated Digital Lotus
        </UnstyledLink>
      </div>
      <div class="mt-3 dark:bg-zinc-700 bg-zinc-300  p-3 rounded-lg flex items-center">
        <LoadAwareImage
          src="/art/lines-with-patterns.png"
          alt="Lines with Patterns"
          height="240"
          width="240"
        />
        <UnstyledLink
          href="/art/procedural/lines-with-patterns"
          className="underline ml-3"
        >
          Lines with Patterns
        </UnstyledLink>
      </div>
    </div>
  );
}
