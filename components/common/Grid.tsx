import classNames from "@classnames";
import { JSX } from "preact";

export default function Grid(
  { children, className }: {
    children: JSX.Element | JSX.Element[];
    className?: string;
  },
): JSX.Element {
  return (
    <div
      class={classNames(
        "grid grid-cols-4 gap-x-3 xl:gap-x-6 xl:grid-cols-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
