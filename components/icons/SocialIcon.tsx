import classNames from "@classnames";
import GithubIcon from "@icons.church/mdi/github";
import LinkedinIcon from "@icons.church/mdi/linkedin";
import TwitterIcon from "@icons.church/ri/twitter-x-fill";
import type { JSX } from "preact/jsx-runtime";

interface SocialProps {
  icon: string;
  className: string;
}

const SOCIAL_ICONS: Record<
  string,
  (props: JSX.SVGAttributes<SVGElement>) => JSX.Element
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

export default function SocialIcon({ icon, className }: SocialProps) {
  const Icon = SOCIAL_ICONS[icon];
  return <Icon className={classNames(className, "hover:text-orange-500")} />;
}
