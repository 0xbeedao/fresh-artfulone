import Section from "@components/common/Section.tsx";
import { JSX } from "preact";

import Project from "./Project.tsx";
import type { PortfolioProps } from "./types.d.ts";

export default function ListProject({ posts }: PortfolioProps): JSX.Element {
  return (
    <Section name="list-project">
      {posts.map((post: any, index: number) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, category, date, bannerImage, tags, description } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <Project
            key={index}
            title={title}
            category={category}
            description={description}
            tags={tags}
            bannerImage={bannerImage}
          />
        );
      })}
    </Section>
  );
}
