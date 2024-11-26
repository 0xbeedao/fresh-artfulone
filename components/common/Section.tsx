import classNames from "@classnames";
import { JSX } from "preact";

interface SectionProps {
  name: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Section({ name, children, className }: SectionProps) {
  return (
    <section
      id={name}
      class={classNames(
        "w-full px-6 sm:px-10 max-w-md sm:max-w-2xl mx-auto xl:max-w-screen-xl",
        className,
      )}
    >
      {children}
    </section>
  );
}
