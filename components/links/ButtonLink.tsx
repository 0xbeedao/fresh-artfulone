import classNames from "@classnames";

import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink.tsx";

type ButtonLinkProps = {
  variant?: "primary" | "secondary";
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={classNames(
        "py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline",
        "border border-gray-600",
        "focus:outline-none focus-visible:text-primary-400",
        {
          "bg-dark dark:text-gray-100 text-gray-900": variant === "primary",
          "bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark":
            variant === "secondary",
        },
        className,
      )}
    >
      {children}
    </UnstyledLink>
  );
}
