import { JSX } from 'preact';

export type RichImageProps = JSX.HTMLAttributes<HTMLImageElement> & {
  label?: string;
};

export function RichImage({ label, ...props }: RichImageProps) {
  return (
    <img {...props} alt={label} />
  );
}


