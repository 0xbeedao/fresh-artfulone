import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { JSX } from "preact";

const links = [
  { href: "/", label: "Route" },
  { href: "/", label: "Route" },
];

export default function Nav(): JSX.Element {
  return (
    <nav class="bg-gray-700">
      <ul class="flex items-center justify-between px-8 py-4">
        <li>
          <a href="/">
            <a class="font-bold text-green-400">Home</a>
          </a>
        </li>
        <ul class="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                class="dark:text-gray-100 text-gray-900 hover:text-green-400"
              >
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
