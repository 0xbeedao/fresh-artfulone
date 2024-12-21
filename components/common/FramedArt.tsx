import type { JSX } from "preact";

type FramedArtProps = {
  src: string;
  height?: number;
  width?: number;
  title: string;
  media: string;
  artist: string;
  price?: string;
};

export default function FramedArt({
  src,
  title,
  media,
  artist,
  price,
}: FramedArtProps): JSX.Element {
  const frameClass = "bg-[url(/image/plaster.jpg)] " +
    "bg-[#b0a990] dark:bg-[#1f1b12] " +
    "p-[10%] bg-cover bg-no-repeat border-double border-6 " +
    "border-[#635c51] dark:border-[#23201d] " +
    "shadow-[inset_0_0_0_50px_rgba(244,240,236,0.4),_0_0_0_11px_#202030,_0_0_30px_rgba(0,0,0,0.8)] " +
    "dark:shadow-[inset_0_0_0_50px_rgba(60,58,49,0.5),_0_0_0_11px_#23201d,_0_0_30px_rgba(0,0,0,0.8)] " +
    "outline outline-2 mb-2" +
    "outline-[#333] dark:outline-[#23201d]";

  const labelClass =
    "label mx-auto my-[2em_0_4em] w-2/3 p-2 bg-cover bg-repeat " +
    "shadow-[5px_5px_10px_#635c51,_0_0_10px_#635c51] " +
    "dark:bg-primary-600 dark:shadow-[5px_5px_10px_#444,_0_0_10px_#444] " +
    "bg-[url(/image/textured-canvas.jpg)] " +
    "flex flex-col p-4";

  return (
    <div class="mb-2">
      <div class={frameClass}>
        <img
          src={src}
          alt={title}
          class="w-full h-auto block"
        />
      </div>
      <div
        class={labelClass}
      >
        <div class="title text-lg font-bold">{title}</div>
        <div class="media leading-[1.2em] text-base">{media}</div>
        <div class="artist leading-[1.2em] text-base">{artist}</div>
        <div class="price leading-[1.2em] text-lg">{price}</div>
      </div>
    </div>
  );
}

// bg-[url(/image/plaster.jpg)] bg-[#b0a990] dark:bg-[#3c3a31] p-[10%] bg-cover bg-no-repeat border-double border-6 border-[#635c51] dark:border-[#23201d] shadow-[inset_0_0_0_50px_rgba(244,240,236,0.4),_0_0_0_11px_#202030,_0_0_30px_rgba(0,0,0,0.8)] dark:shadow-[inset_0_0_0_50px_rgba(60,58,49,0.4),_0_0_0_11px_#23201d,_0_0_30px_rgba(0,0,0,0.8)] outline outline-2 outline-[#333] dark:outline-[#23201d]

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
