import { JSX } from "preact";

interface LabelIconProps {
    name?: string;
    imgSrc?: string;
  }
  
  export default function LabelIcon({ name, imgSrc }: LabelIconProps): JSX.Element {
    return (
      <label
        htmlFor={name}
        className='bg-white rounded-sm flex items-center justify-center h-6 w-6'
      >
        <img src={imgSrc} className='h-4 w-4' alt={name} />
      </label>
    );
  };
  