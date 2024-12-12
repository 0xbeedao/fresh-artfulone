import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { headerLinks } from "@config/SiteConfig.ts";
import type { JSX } from "preact";

export default function HeaderDesktop(): JSX.Element {
  return (
    <nav
      id="header-desktop"
      class="fixed top-0 right-0 left-0  dark:bg-gray-900 bg-gray-100 z-10"
    >
      <header class="max-w-screen-xl px-[70px] mx-auto flex flex-col dark:text-gray-100 text-gray-900 transition-all pt-[32px] pb-[12px]">
        <div class="flex justify-between items-center transition-all mb-2 pb-2">
          <UnstyledLink
            href="/"
            className="text-gray-500 dark:text-gray-400 font-bold text-xl aria-[current]:text-active"
          >
            Bruce
          </UnstyledLink>
          {headerLinks.map(({ href, text }) => (
            <UnstyledLink
              className="text-gray-500 dark:text-gray-400 aria-[current]:font-bold aria-[current]:text-active"
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
