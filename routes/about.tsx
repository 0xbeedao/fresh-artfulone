import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function Home({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl xl:pt-[10px]">
      <Seo url={url.toString()} templateTitle="About" />
      <h1 class="dark:text-gray-100 text-gray-900 text-3xl font-semibold mt-20">
        About This Site
      </h1>
      <p class="mt-2">
        This site is built with:
        <ul class="list-disc list-inside">
          <li>
            <UnstyledLink
              href="https://deno.com"
              className="dark:text-orange-300 text-orange-700 underline"
            >
              Deno
            </UnstyledLink>{" "}
            - A fast, more secure version of Node that has many tools built in.
            It's a joy to use and even nicer to deploy with.
          </li>
          <li>
            <UnstyledLink
              className="underline text-sky-700 dark:text-sky-500"
              href="https://deno.dev"
            >
              Deno Deploy
            </UnstyledLink>{" "}
            - A free-for-personal-use deployment framework.
          </li>
          <li>
            <UnstyledLink
              className="dark:text-leaf-500 text-green-600 underline"
              href="https://fresh.deno.dev"
            >
              Fresh
            </UnstyledLink>{" "}
            - A Deno based framework which uses Preact under the covers and
            features an island-based SSR design.
          </li>
          <li>
            <UnstyledLink
              className="text-violet-500 underline"
              href="https://tailwindcss.com"
            >
              TailwindCSS
            </UnstyledLink>{" "}
            - New to me but so fast and useful.
          </li>
        </ul>
      </p>
    </div>
  );
}
