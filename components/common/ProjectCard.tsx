import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { JSX } from "preact";

type ProjectCardProps = {
  imgSrc: string;
  imgAlt: string;
  linkHref: string;
  linkText: string;
};

export default function ProjectCard({
  imgSrc,
  imgAlt,
  linkHref,
  linkText,
}: ProjectCardProps): JSX.Element {
  return (
    <div class="mt-3 dark:bg-zinc-700 bg-zinc-300 p-3 rounded-lg flex items-center">
      <img src={imgSrc} alt={imgAlt} height="240" width="240" />
      <UnstyledLink href={linkHref} className="underline ml-3">
        {linkText}
      </UnstyledLink>
    </div>
  );
}
