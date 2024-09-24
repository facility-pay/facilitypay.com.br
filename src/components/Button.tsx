import { PropsWithChildren, useMemo } from "react";
import Icon from "./Icon";

type ButtonProps = PropsWithChildren & {
  type: "primary" | "secondary";
  width?: number | string;
  className?: string;
  isDark?: boolean;
  shouldRenderChevron?: boolean;
};

const Button = ({
  type,
  width,
  children,
  isDark = false,
  shouldRenderChevron = false,
  className,
}: ButtonProps) => {
  const typeClassName = useMemo(() => {
    if (type === "primary") {
      return isDark
        ? "bg-black border border-secondary hover:bg-secondary"
        : "bg-secondary hover:bg-black";
    }

    return "bg-white border hover:bg-black";
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
      "flex flex-row items-center justify-center gap-2 rounded-lg rounded-br-3xl font-semibold py-4 text-base min-w-28 max-w-80 ";

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

  return (
    <button className={classNames}>
      {children}
      {shouldRenderChevron && <Icon iconName="chevron-right" />}
    </button>
  );
};

export default Button;
