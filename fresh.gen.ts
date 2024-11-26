// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $HeaderDesktop from "./islands/HeaderDesktop.tsx";
import * as $HeaderMobile from "./islands/HeaderMobile.tsx";
import * as $LoadAwareImage from "./islands/LoadAwareImage.tsx";
import * as $ResponsiveHeader from "./islands/ResponsiveHeader.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/HeaderDesktop.tsx": $HeaderDesktop,
    "./islands/HeaderMobile.tsx": $HeaderMobile,
    "./islands/LoadAwareImage.tsx": $LoadAwareImage,
    "./islands/ResponsiveHeader.tsx": $ResponsiveHeader,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
