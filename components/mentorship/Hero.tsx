import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import IconifyIcon from "@components/icons/IconifyIcon.tsx";
import type { JSX } from "preact";

export default function Hero(): JSX.Element {
  return (
    <Section name="hero-mentorship" className="w-full pt-6 xl:pt-[200px]">
      <Grid>
        <div class="col-span-full xl:col-span-5 flex flex-col">
          <h1 class="text-white text-2xl text-center mb-4 xl:mb-10 xl:text-5xl  font-bold">
            Mentorship
          </h1>
          <hr class="text-gray-400 my-2 block xl:hidden" />
          <p class="text-sm xl:text-lg text-gray-300 mb-2 xl:mb-5 mt-4 xl:mt-0">
            Menghabiskan banyak waktu untuk belajar{" "}
            <span class="text-leaf-500 xl:underline">sendiri</span>{" "}
            dan tetap merasa{" "}
            <span class="text-leaf-500 xl:underline">stuck</span>?
          </p>
          <div class="flex items-center">
            <div class="h-[77px] w-[5px] bg-gradient-hr mr-4 hidden xl:block">
            </div>
            <p class="text-sm xl:text-lg text-gray-300 mb-2 xl:mb-0">
              Mentorship Frontend ini menjadi jawaban atas permasalahanmu.
              Karena disini, kamu bakal merasakan mentoring yang lebih personal
            </p>
          </div>
        </div>
        <div class="hidden xl:flex flex-col  py-5 pl-9 pr-2 col-span-full xl:col-span-7 xl:col-start-6">
          <div class="bg-zinc-800 rounded-xl py-5 space-y-5 xl:space-y-0 flex flex-col xl:flex-row px-0 xl:px-10 gap-0 xl:gap-6">
            <div class="flex flex-col  pl-[34px] xl:px-0 pr-1 relative ">
              <div class="flex">
                <p class="text-4xl mr-3">😀</p>
                <h3 class="text-white font-semibold text-lg break-words">
                  Minggu Pertama
                </h3>
              </div>
              <p class="text-gray-300 text-sm mt-4">
                Membahas dasar dari website seperti tag atribut dan element.
              </p>
              <div class="absolute top-[15%] -left-7 text-[40px] block xl:hidden">
                😃{" "}
              </div>
            </div>
            <div class="flex flex-col  pl-[34px] xl:px-0 pr-1 relative ">
              <div class="flex">
                <p class="text-4xl mr-3">😗</p>
                <h3 class="text-white font-semibold text-lg break-words">
                  Minggu Kedua
                </h3>
              </div>
              <p class="text-gray-300 text-sm mt-4">
                Membahas seputar Pengembangan website - SDLC dasar.
              </p>
              <div class="absolute top-[15%] -left-7 text-[40px] block xl:hidden">
                😃{" "}
              </div>
            </div>
            <div class="flex flex-col  pl-[34px] xl:px-0 pr-1 relative ">
              <div class="flex">
                <p class="text-4xl mr-3">🥰</p>
                <h3 class="text-white font-semibold text-lg break-words">
                  Minggu Ketiga
                </h3>
              </div>
              <p class="text-gray-300 text-sm mt-4">
                Membahas seputar konsep layoung seperti flexbox dan grid.
              </p>
              <div class="absolute top-[15%] -left-7 text-[40px] block xl:hidden">
                😃{" "}
              </div>
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
