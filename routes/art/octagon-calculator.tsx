import Seo from "@components/Seo.tsx";
import OctagonCalculator from "@islands/OctagonCalculator.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function OctagonCalculatorPage({ url }: PageProps) {
  return (
    <div class="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl xl:pt-[10px]">
      <Seo url={url.toString()} templateTitle="Octagon Calculator" />
      <h1 class="dark:text-gray-100 text-gray-900 text-3xl font-semibold mt-20">
        Octagonal Sculptural Materials Calculator
      </h1>
      <p class="mt-2">
        Made with the assistance of Claude.ai, which was so good and helpful
        that I subscribed.
      </p>
      <div class="mt-4 dark:bg-zinc-700 bg-zinc-300 rounded-xl p-6">
        <OctagonCalculator />
      </div>
    </div>
  );
}
