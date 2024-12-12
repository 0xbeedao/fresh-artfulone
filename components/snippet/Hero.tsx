import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import { JSX } from "preact";

export default function Hero(): JSX.Element {
  return (
    <Section name="snippet" className="pt-6 xl:pt-[200px]">
      <Grid>
        <div class="col-span-full">
          <h2 class="text-5xl font-bold dark:text-gray-100 text-gray-900 xl:mb-4">
            Code Snippet
          </h2>
        </div>
      </Grid>
    </Section>
  );
}
