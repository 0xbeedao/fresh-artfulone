import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import SearchIcon from "@icons.church/heroicons-solid/search";
import { JSX } from "preact";

import { SnippetProps } from "../portfolio/types.d.ts";
import ItemSnippet from "./ItemSnippet.tsx";

export default function ListSnippet({ posts }: SnippetProps): JSX.Element {
  return (
    <Section name="list-snippet">
      <Grid className="pt-5 gap-y-5 xl:gap-y-0">
        <div class="hidden xl:block dark:text-gray-100 text-gray-900  col-span-full mb-6">
          Search code snippet
        </div>
        <label class="block col-span-full relative">
          <input
            type="text"
            class="mt-1 block w-full bg-zinc-700 rounded-lg px-4 py-2 xl:py-4 xl:px-6 placeholder-gray-500 text-sm xl:mb-7 xl:mt-0 "
            placeholder="Type your favorite snippet ..."
          />
          <SearchIcon class="h-5 w-5 text-gray-300 absolute right-4 top-3 xl:top-5 xl:right-6" />
        </label>
        <div class="col-span-full grid xl:grid-cols-2 gap-x-7 gap-y-8">
          {posts.map((post: any, index: number) => {
            //extract slug and frontmatter
            const { slug, frontmatter } = post;
            //extract frontmatter properties
            const { title, tags, description } = frontmatter;

            //JSX for individual blog listing
            return (
              <ItemSnippet
                key={index}
                title={title}
                tags={tags}
                description={description}
              />
            );
          })}
        </div>
      </Grid>
    </Section>
  );
}
