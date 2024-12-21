// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $about from "./routes/about.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $art_galleries_index from "./routes/art/galleries/[gallery].tsx";
import * as $art_index from "./routes/art/index.tsx";
import * as $art_octagon_calculator from "./routes/art/octagon-calculator.tsx";
import * as $art_octagon from "./routes/art/octagon.tsx";
import * as $art_procedural_sketch_ from "./routes/art/procedural/[sketch].tsx";
import * as $coding_index from "./routes/coding/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $HeaderMobile from "./islands/HeaderMobile.tsx";
import * as $LoadAwareImage from "./islands/LoadAwareImage.tsx";
import * as $OctagonCalculator from "./islands/OctagonCalculator.tsx";
import * as $ProcessingSketch from "./islands/ProcessingSketch.tsx";
import * as $ResponsiveHeader from "./islands/ResponsiveHeader.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/about.tsx": $about,
    "./routes/api/joke.ts": $api_joke,
    "./routes/art/galleries/index.tsx": $art_galleries_index,
    "./routes/art/index.tsx": $art_index,
    "./routes/art/octagon-calculator.tsx": $art_octagon_calculator,
    "./routes/art/octagon.tsx": $art_octagon,
    "./routes/art/procedural/[sketch].tsx": $art_procedural_sketch_,
    "./routes/coding/index.tsx": $coding_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/HeaderMobile.tsx": $HeaderMobile,
    "./islands/LoadAwareImage.tsx": $LoadAwareImage,
    "./islands/OctagonCalculator.tsx": $OctagonCalculator,
    "./islands/ProcessingSketch.tsx": $ProcessingSketch,
    "./islands/ResponsiveHeader.tsx": $ResponsiveHeader,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
