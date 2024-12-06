import Footer from "@components/layout/Footer.tsx";
import HeaderDesktop from "@components/layout/HeaderDesktop.tsx";
import { Head, Partial } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { JSX } from "preact";

// for testing
export function HeadlessLayout(
  { Component }: PageProps,
) {
  return (
    <>
      <div class="layout" id="Headless">
        <Partial key="main" name="main">
          <main>
            <Component />
          </main>
        </Partial>
      </div>
      <Footer />
    </>
  );
}

export default function Layout(
  { Component }: PageProps,
): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="layout w-full" id="full">
        <HeaderDesktop />
        <main
          id="main"
          class="px-[70px] max-w-md mx-auto xl:max-w-screen-xl w-full pt-12 xl:pt-[20px] mt-[52px]"
        >
          <Partial key="main" name="main">
            <Component />
          </Partial>
        </main>
        <Footer />
      </div>
    </>
  );
}
