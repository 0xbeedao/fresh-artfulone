export interface ItemSnippetProps {
  title?: string;
  tags?: string[];
  description?: string;
}

export interface ProjectProps {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  bannerImage: string;
  date: string;
  url?: string;
}

export interface ProjectPostProps {
  key: string;
  frontmatter: ProjectProps;
}

export interface SnippetPostProps {
  key: string;
  frontmatter: {
    title: string;
    description: string;
    tags: string[];
  };
}

export interface SnippetProps {
  posts: Array<SnippetPostProps>;
}

export type TBaseFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TPostFrontMatter = TBaseFrontMatter & {
  date: string;
  lang: "id" | "en";
  tags: Array<string>;
  category: string;
};
