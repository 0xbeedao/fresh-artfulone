import type { JSX } from "preact";

type FramedArtProps = {
  title: string;
  media: string;
  artist: string;
  price?: string;
};

export default function FramedArt({
  title,
  media,
  artist,
  price,
}: FramedArtProps): JSX.Element {
  return (
    <div class="art">
      <div class="bg-[#b0a990] dark:bg-primary-500 p-[10%] bg-cover bg-no-repeat border-double border-6 border-[#635c51] shadow-[inset_0_0_0_50px_rgba(244,240,236,0.4),_0_0_0_11px_#202030,_0_0_30px_rgba(0,0,0,0.8)] outline outline-2 outline-[#333]">
        <img
          src="/path/to/image.jpg"
          alt="Art"
          class="w-full h-auto block"
        />
      </div>
      <div
        class={`label mx-auto my-[2em_0_4em] w-2/3 p-2 bg-cover bg-repeat shadow-[5px_5px_10px_#635c51,_0_0_10px_#635c51] dark:bg-primary-600 dark:shadow-[5px_5px_10px_#444,_0_0_10px_#444] bg-[url(/galleries/textured-canvas.jpg)]' : ''}`}
      >
        <div class="title text-lg font-bold">{title}</div>
        <div class="media leading-[1.2em] text-base">{media}</div>
        <div class="artist leading-[1.2em] text-base">{artist}</div>
        <div class="price leading-[1.2em] text-lg">{price}</div>
      </div>
    </div>
  );
}

/*
Original CSS to change to Tailwind CSS

".mat img": {
				boxSizing: "border-box",
				width: "100%; height: auto",
				display: "block",
				padding: "10%",
				backgroundColor: props.colorMode === 'light' ? "#b0a990" : "primary.500",
				backgroundImage: "url(/images/plaster.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				border: "6px double #635c51",
				boxShadow: "0 0 0 50px rgba(244,240,236,0.4) inset, 0 0 0 11px #202030, 0 0 30px rgba(0,0,0,0.8) inset",
				outline: "2px solid #333",
				outlineOffset: "0px",
			},
			".art .label": {
				boxSizing: "border-box",
				margin: "2em auto 4em",
				height: "auto",
				display: "block",
				width: "66%",
				padding: ".5em",
				backgroundImage: props.colorMode === 'light' ? "url(/images/textured-canvas.jpg)" : "",
				backgroundColor: "primary.600",
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				boxShadow: props.colorMode === 'light' ? "5px 5px 10px #635c51, 0 0 10px #635c51" :
					"5px 5px 10px #444, 0 0 10px #444",
				".title": {
					fontSize: "18px",
					fontWeight: "bold",
				},
				".media": {
					lineHeight: "1.2em",
					fontSize: "16px",
				},
				".artist": {
					lineHeight: "1.2em",
					fontSize: "16px",
				},
				".price": {
					lineHeight: "1.2em",
					fontSize: "18px",
				},
			},
*/
