import SocialIcon from "@components/icons/SocialIcon.tsx";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { JSX } from "preact";

export default function Footer(): JSX.Element {
  return (
    <footer class="pb-2 mt-12">
      <main class="flex flex-col items-center pt-6 border-t border-gray-400 dark:border-gray-300 layout">
        <FooterLinks />

        <p class="mt-12 font-medium text-white dark:text-gray-300">
          Reach out
        </p>
        <SocialLinks />

        <p class="mt-8 text-sm text-gray-300 dark:text-gray-300">
          © Bruce Kroeze {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div class="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {footerLinks.map(({ href, text }) => (
        <UnstyledLink
          key={href}
          className="text-sm font-medium rounded-sm text-gray-300 dark:text-gray-300 animated-underline focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
          href={href}
        >
          {text}
        </UnstyledLink>
      ))}
    </div>
  );
}

function SocialLinks() {
  return (
    <div class="flex space-x-4 mb-12 mt-2">
      <div class="flex items-center justify-center"></div>
      {socials.map((social) => (
        <UnstyledLink
          key={social.text}
          className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
          href={social.href}
          openNewTab
        >
          <SocialIcon
            icon={social.icon}
            className="w-6 h-6 my-auto text-gray-300 align-middle transition-colors dark:text-gray-300 hover:text-primary-300 dark:hover:text-primary-300"
          />
        </UnstyledLink>
      ))}
    </div>
  );
}

const footerLinks = [
  {
    href: "https://raidguild.org/",
    text: "Raid Guild",
  },
  {
    href: "https://www.etsy.com/shop/PioneerMoon",
    text: "Pioneer Moon",
  },
];

interface Social {
  href: string;
  icon: string;
  text: string;
}

const socials: Social[] = [
  {
    href: "https://github.com/0xbigbee",
    icon: "github",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/bkroeze/",
    icon: "linkedin",
    text: "Linkedin",
  },
  {
    href: "https://twitter.com/cryptoarchon",
    icon: "twitter",
    text: "Twitter",
  },
];
