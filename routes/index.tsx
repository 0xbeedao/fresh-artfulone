import Biography from "@components/homepage/Biography.tsx";
import Hero from "@components/homepage/Hero.tsx";
import WhatIdo from "@components/homepage/WhatIdo.tsx";
import Seo from "@components/Seo.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function Home({ url }: PageProps) {
  return (
    <>
      <Seo url={url.toString()} templateTitle="Home" />
      <Hero />
      <Biography />
      <WhatIdo />
    </>
  );
}

/*
<Hero />
      <Biography />
      <WhatIdo />
      <Skill />
      <ListProject posts={[]} />
      <ListSnippet posts={[]} />
      /*
*/
