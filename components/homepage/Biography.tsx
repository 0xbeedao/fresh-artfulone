import { JSX } from "preact";

import Grid from "../common/Grid.tsx";
import Section from "../common/Section.tsx";

export default function Biography(): JSX.Element {
  return (
    <Section name="biography" className="pt-7 block xl:hidden">
      <Grid className="w-full items-center">
        <h1 class="dark:text-gray-100 text-gray-900 col-span-full text-xl text-center">
          Biography
        </h1>
        <div class="col-span-full">
          <p class="text-sm mt-3 dark:text-gray-200 text-gray-900 leading-6 font-inter tracking-wide">
            I am a software engineer with a passion for web development and I'm
            currently excited about <span class="text-ocean-500">Deno</span>
            , <span class="text-sky-500">Fresh</span> and&nbsp;
            <span class="text-leaf-500">Generative AI</span>.
          </p>
        </div>
      </Grid>
    </Section>
  );
}
