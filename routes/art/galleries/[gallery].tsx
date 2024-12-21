import FramedArt from "@components/common/FramedArt.tsx";
import Seo from "@components/Seo.tsx";
import { artPieces } from "@config/ArtConfig.ts";
import type { PageProps } from "$fresh/server.ts";

export default function GalleriesIndex({ params, url }: PageProps) {
  const galleryName = params.gallery.toLowerCase();
  const filteredArt = artPieces.filter((piece) => 
    piece.galleries.map(g => g.toLowerCase()).includes(galleryName)
  );

  return (
    <>
      <Seo url={url.toString()} templateTitle={`${galleryName} Gallery`} />
      <div id="Galleries" class="grid grid-cols-2 gap-4">
        {filteredArt.map((piece) => (
          <FramedArt
            key={piece.slug}
            src={`/art/collections/${piece.url}`}
            title={piece.title}
            media={piece.media}
            width={piece.width}
            height={piece.height}
            artist="Bruce Kroeze"
          />
        ))}
      </div>
    </>
  );
}
