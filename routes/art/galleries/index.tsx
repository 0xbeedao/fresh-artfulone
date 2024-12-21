import FramedArt from "@components/common/FramedArt.tsx";
import Seo from "@components/Seo.tsx";
import { artPieces } from "@config/ArtConfig.ts";
import type { PageProps } from "$fresh/server.ts";

export default function GalleriesIndex({ url }: PageProps) {
  const art = artPieces.slice(1, 5);
  return (
    <>
      <Seo url={url.toString()} templateTitle="Galleries" />
      <div id="Galleries" class="grid grid-cols-2 gap-4">
        {art.map((piece) => (
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
