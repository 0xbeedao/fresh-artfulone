import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import clsx from 'clsx';

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: JSX.Element | string;
};

export function Button({ children, variant, ...rest}: ButtonProps): JSX.Element {

  return (
    <button
      {...rest}
      disabled={!IS_BROWSER || rest.disabled}
      className={clsx(
        'py-2 px-4 rounded text-sm sm:text-tiny font-bold hover:text-primary-400 animated-underline',
        'border ',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark-200 text-gray-300 border-dark-200 hover:bg-dark-100 hover:text-gray-200 hover:border-dark-100':
            variant === 'primary',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark':
            variant === 'secondary',
        },
        rest.className
      )}
    >
      {children}
    </button>
  );
}
