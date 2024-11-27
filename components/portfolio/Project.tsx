import Grid from "@components/common/Grid.tsx";
import ArrowUpIcon from "@icons.church/heroicons-solid/arrow-up";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { JSX } from "preact";

const ImageUnsplash =
  "https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

export default function Project({
  title,
  category,
  description,
  tags,
  bannerImage,
}: ProjectProps): JSX.Element {
  const tagsList: { [key: string]: any } = {
    tailwindcss: "/icon/tailwind.svg",
    react: "/icon/react.svg",
    nextjs: "/icon/nextjs.svg",
    nodejs: "/icon/nodejs.svg",
    javascript: "/icon/javascript.svg",
    typescript: "/icon/typescript.svg",
    chakraui: "/icon/chakraui.svg",
  };
  return (
    <Grid className="gap-y-14 pt-5">
      <div class="col-span-full">
        <div class="flex flex-col xl:flex-row xl:gap-x-[30px]">
          <h2 class="t-white text-2xl mb-3 font-bold block xl:hidden">
            {title}
          </h2>
          <h6 class="text-gray-200 text-base mb-[14px] font-bold block xl:hidden font-inter">
            {category}
          </h6>
          <div class="w-full h-auto mb-5 xl:w-5/12">
            <div class="bg-zinc-800 relative flex flex-col px-4">
              <button class="h-6 w-6 lg:h-9 lg:w-9 flex items-center justify-center rounded bg-zinc-700 mt-2 lg:mt-4 ml-auto">
                <ArrowUpIcon className="h-4 w-4 lg:h-5 lg:aspect-w-9 transform rotate-45 text-gray-100" />
              </button>
              <div class="flex flex-col px-2 h-72 overflow-hidden">
                <div class="flex space-x-2 ">
                  {tags.map((tag, index) => (
                    <label
                      htmlFor="logo"
                      class="bg-white rounded-sm flex items-center justify-center h-6 w-6"
                      key={index}
                    >
                      <img
                        src={tagsList[tag]}
                        class="h-4 w-4"
                        alt="Tailwind Logo"
                      />
                    </label>
                  ))}
                </div>
                <div class="relative mt-8 overflow-hidden h-full">
                  {
                    /* <Image
                    src={bannerImage || ImageUnsplash}
                    alt='unsplash'
                    layout='fill'
                    width={228}
                    height={158}
                  /> */
                  }
                  <div class="absolute top-0 left-0 right-0">
                    <LoadAwareImage
                      imgClassName="object-cover"
                      useSkeleton
                      className="w-[452px]"
                      src={bannerImage || ImageUnsplash}
                      width="452"
                      height="280"
                      alt="Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col xl:w-5/12">
            <h6 class="text-gray-200 font-bold mb-5 font-inter hidden xl:block lg:mt-4">
              {category}
            </h6>
            <h3 class="text-white text-5xl mb-7 lg:mb-2 font-sora font-bold hidden xl:block">
              {title}
            </h3>
            <p class="text-gray-200 text-sm lg:text-lg font-inter leading-6 lg:leading-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Grid>
  );
}
