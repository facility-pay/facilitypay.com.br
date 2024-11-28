import { PropsWithChildren, useMemo } from "react";
import Icon from "./Icon";
import Link from "next/link";

type ButtonProps = PropsWithChildren & {
  type: "primary" | "secondary";
  width?: number | string;
  className?: string;
  isDark?: boolean;
  shouldRenderChevron?: boolean;
  onClick?: VoidFunction;
  href?: string;
};

const Button = ({
  type,
  width,
  children,
  isDark = false,
  href,
  shouldRenderChevron = false,
  className,
  onClick,
}: ButtonProps) => {
  const typeClassName = useMemo(() => {
    if (type === "primary") {
      return isDark
        ? "bg-black border border-secondary hover:bg-secondary"
        : "bg-secondary hover:bg-black";
    }

    return isDark
      ? "bg-[#171717] border border-secondary hover:bg-secondary"
      : "bg-white border border-gray-dark hover:bg-black";
  }, [type, isDark]);

  const widthClassName = useMemo(() => {
    if (width) {
      if (typeof width === "number") {
        return `w-[${width}px]`;
      }

      if (typeof width === "string") {
        if (width === "100%") {
          return "w-full";
        }

        return `w-${width}`;
      }
    }

    return "";
  }, [width]);

  const classNames = useMemo(() => {
    const defaultClassName =
      "group flex flex-row items-center justify-center gap-2 rounded-lg rounded-br-3xl font-semibold py-4 text-sm desktop:text-base min-w-28 max-w-80 ";

    const darkClassName = isDark
      ? "text-secondary hover:text-black"
      : "text-black hover:text-secondary";

    return [
      defaultClassName,
      typeClassName,
      widthClassName,
      darkClassName,
      className ?? "",
    ].join(" ");
  }, [typeClassName, widthClassName, className, isDark]);

  if (!!href) {
    return (
      <Link className={classNames} href={href}>
        {children}
        {shouldRenderChevron && <Icon iconName="chevron-right" />}
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
      {shouldRenderChevron && <Icon iconName="chevron-right" />}
    </button>
  );
};

export default Button;
