import DefaultLink from "next/link";
import { PropsWithChildren } from "react";

type LinkProps = PropsWithChildren & {
  href: string;
};

const Link = ({ children, href }: LinkProps) => {
  return (
    <DefaultLink
      className="flex flex-row items-center text-center gap-4 underline text-sm text-gray-dark"
      href={href}
    >
      {children}
    </DefaultLink>
  );
};

export default Link;
