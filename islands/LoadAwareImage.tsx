import classNames from "@classnames";
import { JSX } from "preact";
import { useState } from "preact/hooks";

export type LoadAwareImageProps =
  & {
    useSkeleton?: boolean;
    imgClassName?: string;
    blurClassName?: string;
    objectFit?: string;
    alt: string;
  }
  & (
    | { width: string | number; height: string | number }
    | { layout: "fill"; width?: string | number; height?: string | number }
  )
  & JSX.HTMLAttributes<HTMLImageElement>;

/**
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function LoadAwareImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  ...rest
}: LoadAwareImageProps) {
  const [status, setStatus] = useState(
    useSkeleton ? "loading" : "complete",
  );
  const safeClassName = (className ?? "") as string;
  const widthIsSet = safeClassName.includes("w-");

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      class={className}
    >
      <img
        class={classNames(
          imgClassName,
          { ["animate-pulse" + blurClassName]: status === "loading" },
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoad={() => setStatus("complete")}
        {...rest}
      />
    </figure>
  );
}
