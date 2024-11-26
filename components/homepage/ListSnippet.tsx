import Button from "@components/buttons/Button.tsx";
import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import { SnippetPostProps } from "@components/portfolio/types.d.ts";
import MenuIcon from "@icons.church/gridicons/menu";
import type { JSX } from "preact";

import SnippetPost from "./SnippetPost.tsx";

export default function ListSnippet(
  { posts }: { posts: SnippetPostProps[] },
): JSX.Element {
  const postList: JSX.Element = <>{posts.map((p) => <SnippetPost {...p} />)}</>;
  return (
    <Section name="list-snippet " className="mt-20">
      <Grid className="gap-y-6">
        <div class="col-span-full">
          <h2 class="text-5xl font-bold text-white ">Code Snippet</h2>
        </div>
        {postList}
        <div class="col-span-full sm:col-span-2 my-4 sm:my-0">
          <Button variant="primary" className="flex items-center">
            <>
              {" "}
              <MenuIcon className="h-4 w-4 mr-2" /> See More
            </>
          </Button>
        </div>
      </Grid>
    </Section>
  );
}
