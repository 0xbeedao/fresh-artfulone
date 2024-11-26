import classNames from "@classnames";
import { JSX } from "preact";

export default function Container(
  { children, className }: {
    children: JSX.Element | JSX.Element[];
    className?: string;
  },
): JSX.Element {
  return (
    <div
      class={classNames(
        "max-w-screen-sm w-full px-6 sm:px-4 mx-auto xl:max-w-screen-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
