import UnstyledLink from "@components/links/UnstyledLink.tsx";
import Seo from "@components/Seo.tsx";
import { artPieces } from "@config/ArtConfig.ts";
import type { PageProps } from "$fresh/server.ts";

export default function GalleriesIndex({ url }: PageProps) {
  // Get unique galleries and their counts
  const galleryStats = artPieces.reduce((acc, piece) => {
    piece.galleries.forEach(gallery => {
      const normalizedGallery = gallery.toLowerCase();
      acc[normalizedGallery] = (acc[normalizedGallery] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Convert to array and sort alphabetically
  const galleries = Object.entries(galleryStats)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([gallery, count]) => ({
      name: gallery,
      count,
    }));

  return (
    <>
      <Seo url={url.toString()} templateTitle="Art Galleries" />
      <div class="flex flex-col space-y-4">
        <h1 class="text-3xl font-bold">Art Galleries</h1>
        <div class="grid grid-cols-2 gap-4">
          {galleries.map(({ name, count }) => (
            <UnstyledLink
              key={name}
              href={`/art/galleries/${name}`}
              className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div class="flex justify-between items-center">
                <span class="capitalize">{name}</span>
                <span class="text-gray-500">({count} pieces)</span>
              </div>
            </UnstyledLink>
          ))}
        </div>
      </div>
    </>
  );
}
