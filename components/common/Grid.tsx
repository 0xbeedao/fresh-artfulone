import { JSX } from "preact";
import clsx from 'clsx';

export default function Grid({ children, className }: { children: JSX.Element | JSX.Element[]; className?: string }): JSX.Element {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 gap-x-3 xl:gap-x-6 xl:grid-cols-12',
        className
      )}
    >
      {children}
    </div>
  );
};
