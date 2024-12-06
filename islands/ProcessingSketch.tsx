import { useMediaQuery } from "@hooks/useMediaQuery.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import type { JSX } from "preact/jsx-runtime";

type ProcessingSketchProps = {
  sketch: string;
};

export default function ProcessingSketch(
  { sketch }: ProcessingSketchProps,
): JSX.Element {
  if (!IS_BROWSER) {
    return <div />;
  }
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 1024px)",
  );
  const isLargeScreen = useMediaQuery("(min-width: 1025px)");

  let width = 800;
  let height = 800;
  let size = "large";

  if (isSmallScreen) {
    width = 300;
    height = 300;
    size = "small";
  } else if (isMediumScreen) {
    width = 600;
    height = 600;
    size = "medium";
  } else if (isLargeScreen) {
    width = 800;
    height = 800;
    size = "large";
  }

  console.table({ size, width, height });

  const fileBaseName = sketch.split("/").pop()?.split(".")[0];
  return (
    <div>
      <canvas
        id={fileBaseName}
        width={width}
        height={height}
        class="justify-center items-center pt-[62px] mx-auto md:mx-0"
      />
      <script type="application/javascript" src={sketch} defer />
    </div>
  );
}
