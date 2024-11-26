import { SnippetPostProps } from "@components/portfolio/types.d.ts";
import type { JSX } from "preact";

import ItemSnippet from "../snippet/ItemSnippet.tsx";

export default function SnippetPost(post: SnippetPostProps): JSX.Element {
  const { key, frontmatter: { title, tags, description } } = post;
  return (
    <div key={key} class="col-span-full sm:col-span-6">
      <ItemSnippet
        title={title}
        tags={tags}
        description={description}
      />
    </div>
  );
}
