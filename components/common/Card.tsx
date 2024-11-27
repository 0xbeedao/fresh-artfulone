import classNames from "@classnames";
import { JSX } from "preact";

type CardProps = {
  className?: string;
  //image type
  image: string | JSX.Element;
  title: string;
  caption: string;
  whatIdo?: boolean | undefined;
};

export default function Card(
  { image, title, caption, whatIdo, className }: CardProps,
): JSX.Element {
  return (
    <div
      className={classNames(
        "relative pl-[18px] pr-4 xl:pb-[26px] bg-zinc-800 rounded-xl ml-0 xl:ml-auto text-sm",
        {
          "max-w-[260px] xl:max-w-[655px] pt-[26px] pb-[13px]": whatIdo,
          "w-full py-6": !whatIdo,
        },
        className,
      )}
    >
      <div
        className={classNames(
          "flex flex-col",
          { "xl:flex-col": whatIdo, "xl:flex-row": !whatIdo },
        )}
      >
        <div
          className={classNames(
            "bg-gradient-to-b from-leaf-500 to-ocean-500 rounded-full mx-auto p-[2px] flex-shrink-0",
            {
              "ml-auto h-[56px] w-[56px] xl:h-[72px] xl:w-[72px] -mt-14 xl:-mt-16 xl:mb-4":
                whatIdo,
              "ml-auto h-[56px] w-[56px] xl:h-[72px] xl:w-[72px] -mt-14 xl:-ml-14":
                !whatIdo,
            },
          )}
        >
          <div className="bg-zinc-800 rounded-full w-full h-full flex items-center justify-center">
            {image}
          </div>
        </div>
        <div
          className={classNames(
            "flex flex-col px-0",
            { "xl:px-5": whatIdo, "xl:px-5 xl:justify-center": !whatIdo },
          )}
        >
          <h4
            className={classNames(
              "text-white text-sm leading-6 xl:leading-normal mt-2 xl:mt-0 text-center font-bold",
              {
                "xl:text-base xl:text-center": whatIdo,
                "xl:text-3xl xl:mb-2 xl:text-left": !whatIdo,
              },
            )}
          >
            {title}
          </h4>
          <p
            className={classNames(
              "text-gray-300 text-center xl:text-left text-sm leading-6 xl:leading-normal",
              { "xl:text-sm xl:text-center": whatIdo, "xl:text-lg": !whatIdo },
            )}
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}
