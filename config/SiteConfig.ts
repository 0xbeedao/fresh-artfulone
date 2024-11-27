export interface SimpleLink {
  href: string;
  text: string;
}

export const footerLinks: SimpleLink[] = [
  {
    href: "https://raidguild.org/",
    text: "Raid Guild",
  },
  {
    href: "https://www.etsy.com/shop/PioneerMoon",
    text: "Pioneer Moon",
  },
];

export const headerLinks: SimpleLink[] = [
  { href: "/about", text: "About" },
  { href: "/art", text: "Art" },
  // { href: "/portfolio", text: "Coding" },
  // { href: "/writing", text: "Writing" },
];

export interface Social {
  href: string;
  icon: string;
  text: string;
}

export const socials: Social[] = [
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
  {
    href: "https://github.com/0xbeedao",
    icon: "github",
    text: "Github",
  },
];
