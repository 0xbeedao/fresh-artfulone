import classNames from "@classnames";
import { JSX } from "preact";

export type UnstyledLinkProps = {
  children: JSX.Element | JSX.Element[] | string;
  openNewTab?: boolean;
  className?: string;
} & JSX.HTMLAttributes<HTMLAnchorElement>;

export default function UnstyledLink({
  children,
  href,
  openNewTab = false,
  className,
  ...rest
}: UnstyledLinkProps) {
  if ((!openNewTab) || isNewTabRef(href as string)) {
    return (
      <a {...rest} href={href} class={className}>
        {children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      class={classNames(
        className,
        "hover:text-orange-500",
      )}
    >
      {children}
    </a>
  );
}

function isNewTabRef(href: string) {
  console.log(
    "is tab ref",
    href,
    !href.startsWith("/") && !href.startsWith("#"),
  );
  return !href.startsWith("/") && !href.startsWith("#");
}
