import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function Home({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl pt-10 xl:pt-[120px]">
      <Seo url={url.toString()} templateTitle="About" />
      <h1 class="text-white text-3xl font-semibold mt-20">About This Site</h1>
      <p class="mt-2">
        This site is built with:
        <ul class="list-disc list-inside">
          <li>
            <span class="text-orange-300">Deno</span>{" "}
            - A fast, more secure version of Node that has many tools built in.
            It's a joy to use and even nicer to deploy with.
          </li>
          <li>
            <span class="text-sky-500">Deno Deploy</span>{" "}
            - A free-for-personal-use deployment framework.
          </li>
          <li>
            <span class="text-leaf-500">Fresh</span>{" "}
            - A Deno based framework which uses Preact under the covers and
            features an island-based SSR design.
          </li>
          <li>
            <span class="text-violet-500">TailwindCSS</span>{" "}
            - New to me but so fast and useful.
          </li>
        </ul>
      </p>
    </div>
  );
}
