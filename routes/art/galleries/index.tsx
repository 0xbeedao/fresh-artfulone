import GalleryLink from "@components/links/GalleryLink.tsx";
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
      pieces: artPieces.filter(piece => 
        piece.galleries.map(g => g.toLowerCase()).includes(gallery)
      ),
    }));

  return (
    <>
      <Seo url={url.toString()} templateTitle="Art Galleries" />
      <div class="flex flex-col space-y-4">
        <h1 class="text-3xl font-bold">Art Galleries</h1>
        <div class="grid grid-cols-2 gap-4">
          {galleries.map(({ name, count, pieces }) => {
            const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
            const maxWidth = 200;
            const scale = maxWidth / randomPiece.width;
            const thumbnailWidth = Math.round(randomPiece.width * scale);
            const thumbnailHeight = Math.round(randomPiece.height * scale);

            return (
              <GalleryLink
                key={name}
                name={name}
                count={count}
                thumbnail={{
                  src: `/art/collections/${randomPiece.url}`,
                  width: thumbnailWidth,
                  height: thumbnailHeight,
                  alt: randomPiece.title,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
