import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function OctagonPage({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl xl:pt-[10px]">
      <Seo url={url.toString()} templateTitle="About" />
      <h1 class="dark:text-gray-100 text-gray-900 text-3xl font-semibold mt-20">
        Octagonal Sculptures
      </h1>
      <p class="mt-2">
        I spent a lot of the summer of '24 obsessed with octagons. Since I'm a
        programmer, I made a helper tool to assist with the calculations. You
        can find the{" "}
        <UnstyledLink href="/art/octagon-calculator" className="underline">
          Octagon Calculator here
        </UnstyledLink>.
      </p>
      <p class="mt-2">
        Here are a couple I'm proud to show off.
      </p>
      <div class="flex flex-col mt-4 gap-4 w-auto items-center">
        <LoadAwareImage
          layout="fill"
          src="/art/glass-octagon-window.jpg"
          alt="Octagon 1"
          height="797"
          width="600"
        />
        <p>Cutting the glass for this one was tricky!</p>
        <LoadAwareImage
          layout="fill"
          src="/art/octagon-fountain-flowing.jpg"
          alt="Octagon 1"
          height="761"
          width="600"
        />
        <p>
          Running the pipes to make the fountain actually work was much more
          involved than I hoped.
        </p>
      </div>
    </div>
  );
}
