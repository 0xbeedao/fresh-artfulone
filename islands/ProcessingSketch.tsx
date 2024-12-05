import type { JSX } from "preact/jsx-runtime";

type ProcessingSketchProps = {
  sketch: string;
};

export default function ProcessingSketch(
  { sketch }: ProcessingSketchProps,
): JSX.Element {
  return (
    <div>
      <script type="application/javascript" src={sketch} defer />
    </div>
  );
}
