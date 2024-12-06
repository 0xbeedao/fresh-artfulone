import { useMediaQuery } from "@hooks/useMediaQuery.ts";
import HeaderMobile from "@islands/HeaderMobile.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

import HeaderDesktop from "../components/layout/HeaderDesktop.tsx";

export default function ResponsiveHeader(): JSX.Element {
  if (!IS_BROWSER) {
    return <></>;
  }
  console.log("checking desktop");
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  console.log("isDesktop", isDesktop);
  return isDesktop ? <HeaderDesktop /> : <HeaderMobile />;
}
