import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import { JSX } from "preact";

export default function Hero(): JSX.Element {
  return (
    <Section name="portfolio" className="pt-6 xl:pt-[200px] mb-0 xl:mb-20">
      <Grid>
        <div class="col-span-full xl:col-span-5">
          <h1 class="text-white text-2xl xl:text-6xl text-center xl:text-left mb-4 font-normal xl:font-bold">
            Project that i has been <strong class="text-leaf-500">done</strong>
          </h1>
          <hr class="text-gray-400 my-2 block xl:hidden" />
        </div>
        <div class="hidden sm:block col-span-2">
          <div class="w-full h-[168px] relative ml-2">
            <LoadAwareImage
              width={168}
              height={168}
              layout="fill"
              style="{objectFit: cover}"
              src="/image/portfolio/arrow.png"
              alt="Arrow"
            />
          </div>
        </div>
      </Grid>
    </Section>
  );
}
