import classNames from "@classnames";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";

const LINKS = [
  { href: "/about", text: "About" },
  // { href: "/art", text: "Art" },
  // { href: "/portfolio", text: "Coding" },
  // { href: "/writing", text: "Writing" },
];
export default function HeaderDesktop(): JSX.Element {
  if (!IS_BROWSER) {
    return <></>;
  }

  const [offset, setOffset] = useState(0);

  /**
   * Adds a little effect to the scroll, making the line disappear when
   * scrolling down and reappear when scrolling up
   */
  useEffect(() => {
    const onScroll = () => setOffset(self.window.scrollY);

    self.window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      self.window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      id="header-desktop"
      class={classNames(
        "fixed top-0 right-0 left-0  bg-dark z-10",
        { "shadow-md": offset !== 0 },
      )}
    >
      <header
        class={classNames(
          "max-w-screen-xl px-[70px] mx-auto flex flex-col text-white  transition-all",
          { "pt-7 pb-1": offset !== 0 },
          { "pt-[32px] pb-[12px]": offset === 0 },
        )}
      >
        <div
          class={classNames(
            "flex justify-between items-center transition-all",
            { "mb-4": offset !== 0 },
            { "mb-8": offset === 0 },
          )}
        >
          <UnstyledLink href="/">
            <p class="font-bold text-2xl">Bruce</p>
          </UnstyledLink>
          {LINKS.map(({ href, text }) => (
            <UnstyledLink
              className="aria-[current]:text-white text-gray-500"
              href={href}
            >
              {text}
            </UnstyledLink>
          ))}
        </div>
        <hr
          class={classNames(
            "transition-all border-[#4D4D4D]",
            { "invisible": offset !== 0 },
            { "visible": offset === 0 },
          )}
        />
      </header>
    </nav>
  );
}
