import { JSX } from "preact";
import clsx from 'clsx';

export function Container({ children, className }: { children: JSX.Element | JSX.Element[]; className?: string }): JSX.Element {
  return (
    <div className={clsx('max-w-screen-sm w-full px-6 sm:px-4 mx-auto xl:max-w-screen-xl', className)}>
        {children}
    </div>
  );
}
