import classNames from "@classnames";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import ArchiveIcon from "@icons.church/heroicons-solid/archive";
import BookmarkIcon from "@icons.church/heroicons-solid/bookmark";
import ChatIcon from "@icons.church/heroicons-solid/chat";
import ClipboardCheckIcon from "@icons.church/heroicons-solid/clipboard-check";
import CodeIcon from "@icons.church/heroicons-solid/code";
import CurrencyDollarIcon from "@icons.church/heroicons-solid/currency-dollar";
import DotsVerticalIcon from "@icons.church/heroicons-solid/dots-vertical";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function HeaderMobile() {
  if (!IS_BROWSER) {
    return <></>;
  }

  const [isMore, setIsMore] = useState(false);
  return (
    <div
      id="header-mobile"
      class={classNames(
        "fixed top-0 transition-all  bg-black right-0 left-0 z-20",
        { "h-[152px]": isMore },
        { "h-[76px]": !isMore },
      )}
    >
      <div class="grid grid-cols-4 gap-4 pl-[18px] pr-[19px] pt-[17px] pb-4 max-w-screen-sm mx-auto">
        <UnstyledLink href="/" className="flex flex-col items-center">
          <ClipboardCheckIcon class="h-5 w-5 aria-[current]:text-white text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Home
          </p>
        </UnstyledLink>
        <UnstyledLink className="flex flex-col items-center" href="/mentorship">
          <ClipboardCheckIcon class="h-5 w-5 aria-[current]:text-white text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Mentorship
          </p>
        </UnstyledLink>
        <UnstyledLink className="flex flex-col items-center" href="/portofolio">
          <ArchiveIcon class="h-5 w-5 aria-[current]:text-white text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Portfolio
          </p>
        </UnstyledLink>
        <UnstyledLink
          href={isMore ? "/snippet" : ""}
          className="flex flex-col items-center"
          onClick={() => setIsMore(!isMore)}
        >
          {isMore
            ? (
              <CodeIcon class="h-5 w-5 aria-[current]:text-white text-gray-500" />
            )
            : <DotsVerticalIcon class="h-5 w-5 text-gray-500" />}
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            {isMore ? "Snippet" : "More"}
          </p>
        </UnstyledLink>
      </div>
      <div class="grid grid-cols-4 gap-4 pl-[18px] pr-[19px] pt-[17px] pb-4">
        <UnstyledLink href="/support" className="flex flex-col items-center">
          <CurrencyDollarIcon class="h-5 w-5 text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Support
          </p>
        </UnstyledLink>
        <UnstyledLink
          href="https://blog.cerita-faldi.xyz/"
          className="flex flex-col items-center"
        >
          <BookmarkIcon class="h-5 w-5 text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Blog
          </p>
        </UnstyledLink>
        <UnstyledLink href="/contact" className="flex flex-col items-center">
          <ChatIcon class="h-5 w-5 text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Contact
          </p>
        </UnstyledLink>
        <div
          className="flex flex-col items-center"
          onClick={() => setIsMore(!isMore)}
        >
          <DotsVerticalIcon class="h-5 w-5 text-gray-500" />
          <p class="text-sm mt-1 aria-[current]:text-white text-gray-500">
            Less
          </p>
        </div>
      </div>
    </div>
  );
}
