import ProjectCard from "@components/common/ProjectCard.tsx";
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
      <ProjectCard
        imgSrc="/art/glass-octagon-window-thumb.jpg"
        imgAlt="Glass Octagon"
        linkHref="/art/octagon"
        linkText="Octagonal Sculpture and Materials Calculator"
      />
      <ProjectCard
        imgSrc="/art/lotus.png"
        imgAlt="Lotus"
        linkHref="/art/procedural/lotus"
        linkText="Animated Digital Lotus"
      />
      <ProjectCard
        imgSrc="/art/lines-with-patterns.png"
        imgAlt="Lines with Patterns"
        linkHref="/art/procedural/lines-with-patterns"
        linkText="Lines with Patterns"
      />
      <ProjectCard
        imgSrc="/art/sawtooth.png"
        imgAlt="Sawtooth"
        linkHref="/art/procedural/sawtooth"
        linkText="Sawtooth"
      />
    </div>
  );
}
