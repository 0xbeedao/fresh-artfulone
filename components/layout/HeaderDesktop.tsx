import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { headerLinks } from "@config/SiteConfig.ts";
import type { JSX } from "preact";

export default function HeaderDesktop(): JSX.Element {
  return (
    <nav
      id="header-desktop"
      class="fixed top-0 right-0 left-0 bg-dark z-10"
    >
      <header class="max-w-screen-xl px-[70px] mx-auto flex flex-col text-white transition-all pt-[32px] pb-[12px]">
        <div class="flex justify-between items-center transition-all mb-8">
          <UnstyledLink href="/">
            <p class="font-bold text-2xl">Bruce</p>
          </UnstyledLink>
          {headerLinks.map(({ href, text }) => (
            <UnstyledLink
              className="aria-[current]:text-white text-gray-500 [aria-current]:text-white"
              href={href}
            >
              {text}
            </UnstyledLink>
          ))}
        </div>
        <hr class="transition-all border-[#4D4D4D] visible" />
      </header>
    </nav>
  );
}
