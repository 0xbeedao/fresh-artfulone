import UnstyledLink from "./UnstyledLink.tsx";
import type { JSX } from "preact";

type GalleryLinkProps = {
  name: string;
  count: number;
  thumbnail: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export default function GalleryLink({ name, count, thumbnail }: GalleryLinkProps): JSX.Element {
  return (
    <UnstyledLink
      href={`/art/galleries/${name}`}
      className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <div class="flex flex-col space-y-2">
        <div class="flex justify-between items-center">
          <span class="capitalize">{name}</span>
          <span class="text-gray-500">({count} pieces)</span>
        </div>
        <img
          src={thumbnail.src}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={thumbnail.alt}
          class="object-contain mx-auto"
        />
      </div>
    </UnstyledLink>
  );
}
