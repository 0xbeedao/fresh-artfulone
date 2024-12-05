import classNames, { ClassValue } from "classNames";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with classNames full feature */
export default function classNamesm(...classes: ClassValue[]) {
  return twMerge(classNames(...classes));
}
