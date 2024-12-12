import Button from "@components/buttons/Button.tsx";
import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import { ProjectPostProps } from "@components/portfolio/types.d.ts";
import HomeIcon from "@icons.church/mdi/home";

import ProjectPost from "./ProjectPost.tsx";

export default function ListProject({ posts }: { posts: ProjectPostProps[] }) {
  const postList = <>{posts.map((p) => <ProjectPost {...p} />)}</>;
  return (
    <Section name="project-list" className="mt-20 xl:mt-36">
      <Grid className="w-full">
        <div class="col-span-5">
          <h2 class="text-5xl font-bold dark:text-gray-100 text-gray-900">
            Featured Project
          </h2>
        </div>
        {postList}
        <div class="col-span-2 my-4 xl:my-0">
          <Button variant="primary" className="flex items-center">
            <>
              <HomeIcon className="h-4 w-4 mr-2" /> See More
            </>
          </Button>
        </div>
      </Grid>
    </Section>
  );
}
