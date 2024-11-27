export interface FooterLink {
  href: string;
  text: string;
}

export const footerLinks: FooterLink[] = [
  {
    href: "https://raidguild.org/",
    text: "Raid Guild",
  },
  {
    href: "https://www.etsy.com/shop/PioneerMoon",
    text: "Pioneer Moon",
  },
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
    href: "https://github.com/0xbigbee",
    icon: "github",
    text: "Github",
  },
];
