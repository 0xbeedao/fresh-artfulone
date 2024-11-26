import Project from "@components/portfolio/Project.tsx";
import { ProjectPostProps } from "@components/portfolio/types.d.ts";
import type { JSX } from "preact";

export default function ProjectPost(post: ProjectPostProps): JSX.Element {
  const {
    key,
    frontmatter: { title, category, description, tags, bannerImage },
  } = post;
  return (
    <div class="col-span-full" key={key}>
      <Project
        key={key}
        title={title}
        category={category}
        description={description}
        tags={tags}
        bannerImage={bannerImage}
      />
    </div>
  );
}
