import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import IconifyIcon from "@components/icons/IconifyIcon.tsx";
import { JSX } from "preact";

export default function Weeks(): JSX.Element {
  return (
    <Section name="weeks" className="block xl:hidden">
      <Grid>
        <div class="flex flex-col  py-5 pl-9 pr-2 col-span-full">
          <div class="bg-zinc-800 rounded-xl py-5 space-y-5">
            <div class="flex flex-col  pl-[34px] pr-1 relative ">
              <h3 class="dark:text-gray-100 text-gray-900 font-semibold text-lg">
                Minggu Pertama
              </h3>
              <p class="text-gray-300 text-sm mt-4">
                Membahas dasar dari website seperti tag atribut dan
                element.{" "}
              </p>
              <div class="absolute top-[15%] -left-7 text-[40px]">😃</div>
            </div>
            <div class="flex flex-col  pl-[34px] pr-1 relative ">
              <h3 class="dark:text-gray-100 text-gray-900 font-semibold text-lg">
                Minggu Pertama
              </h3>
              <p class="text-gray-300 text-sm mt-4">
                Membahas dasar dari website seperti tag atribut dan
                element.{" "}
              </p>
              <div class="absolute top-[15%] -left-7 text-[40px]">😃</div>
            </div>
            <div class="flex flex-col  pl-[34px] pr-1 relative ">
              <h3 class="dark:text-gray-100 text-gray-900 font-semibold text-lg">
                Minggu Pertama
              </h3>
              <p class="text-gray-300 text-sm mt-4">
                Membahas dasar dari website seperti tag atribut dan
                element.{" "}
              </p>
              <div class="absolute top-[15%] -left-7 text-[40px]">😃</div>
            </div>
          </div>
          <button class="bg-zinc-800 px-6 py-3 text-gray-300 flex items-center leading-6 rounded-xl mt-4">
            <IconifyIcon icon="heroicons-solid:menu" className="h-5 w-5 mr-5" />
            Baca Selengkapnya
          </button>
        </div>
      </Grid>
    </Section>
  );
}
