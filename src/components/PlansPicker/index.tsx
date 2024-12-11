import { forwardRef, LegacyRef, ReactNode } from "react";
import Icon, { IconName } from "../Icon";
import { EmblaViewportRefType } from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import "./embla.css";

export type Plan = {
  itemKey: "profit" | "spot" | "light";
  label: string;
  icon: IconName;
  children?: ReactNode;
};

type PlanItemProps = Plan & {
  isSelected?: boolean;
  onSelectItem?: () => void;
  bordered?: boolean;
  hasBackground?: boolean;
  isDark?: boolean;
};

const mapKeyToLabel = (key: PlanItemProps["itemKey"]) => {
  return String(key).charAt(0).toUpperCase() + String(key).slice(1);
};

const PlanItem = ({
  itemKey,
  label,
  isSelected = false,
  onSelectItem,
  hasBackground = true,
  isDark = false,
}: PlanItemProps) => {
  const defaultClassName =
    "plans__embla__slide !min-w-[inherit] tablet:w-[360px] desktop:w-[360px] flex flex-col gap-6";
  const notSelectedClassName = "opacity-0 desktop:opacity-100";

  const defaultContainerClassName =
    "relative w-full flex gap-6 items-center gap-4 py-4 px-3 rounded-2xl";
  const selectedContainerClassName = isDark ? "!bg-white" : "!bg-black";
  const notBorderedContainerClassName = isDark
    ? "bg-[#FFFFFF03]"
    : hasBackground
    ? "bg-white"
    : "bg-grey-lightest-50";

  return (
    <button
      className={[
        defaultClassName,
        isSelected ? "" : notSelectedClassName,
      ].join(" ")}
      onClick={() => {
        onSelectItem?.();
      }}
      key={label}
    >
      <div
        className={
          isSelected
            ? [
                defaultContainerClassName,
                selectedContainerClassName,
                notBorderedContainerClassName,
              ].join(" ")
            : [defaultContainerClassName, notBorderedContainerClassName].join(
                " "
              )
        }
      >
        <div
          className={[
            "w-[50px] h-[50px] flex items-center justify-center rounded-lg",
            hasBackground ? "bg-grey-light" : "bg-white",
            isSelected ? "!bg-secondary" : isDark ? "!bg-[#FFFFFF10]" : "",
          ].join(" ")}
        >
          <Icon
            iconName="taxes-machine"
            className={[
              isSelected && isDark ? "!text-black" : "text-white",
              !isDark ? "!text-black" : "",
            ].join(" ")}
          />
        </div>
        <div className="flex flex-col items-start">
          <span
            className={[
              "font-light text-sm text-gray-dark",
              isSelected ? "text-white" : "",
              isDark ? "text-white" : "",
              isDark && isSelected ? "!text-gray-dark" : "",
            ].join(" ")}
          >
            Plano
          </span>
          <span
            className={[
              "text-lg text-black font-bold",
              isSelected ? "text-white" : "",
              isDark ? "text-white" : "",
              isDark && isSelected ? "!text-gray-dark" : "",
            ].join(" ")}
          >
            {mapKeyToLabel(itemKey)}
          </span>
        </div>
        {isSelected && (
          <div className="hidden desktop:block absolute bg-secondary rounded-tl rounded-br rounded-bl-lg rounded-tr-2xl py-[2px] px-[5px] top-[-15px] left-[75px]">
            <span className="text-black font-semibold text-xs">
              Selecionado
            </span>
          </div>
        )}
      </div>
    </button>
  );
};

type PlanPickerProps = {
  emblaRef?: EmblaViewportRefType;
  emblaApi?: EmblaCarouselType;
  items: Array<Plan>;
  selectedIndex: number;
  bordered?: boolean;
  hasBackground?: boolean;
  isDark?: boolean;
  onSelectItem?: (selectedIndex: number) => void;
  renderItem?: (item: Plan, index: number) => ReactNode;
};

const PlanPicker = forwardRef<EmblaViewportRefType, PlanPickerProps>(
  (
    {
      emblaApi,
      items = [],
      selectedIndex = 1,
      onSelectItem,
      bordered,
      hasBackground = true,
      renderItem,
      isDark = false,
    },
    emblaRef
  ) => {
    const { onPrevButtonClick, onNextButtonClick } =
      usePrevNextButtons(emblaApi);

    return (
      <div className="flex flex-col items-center w-full px-0 pb-6">
        <div className="flex flex-row items-center w-full gap-4">
          <button className="desktop:hidden" onClick={onPrevButtonClick}>
            <div className="border border-gray-divider-1 px-5 py-8 rounded-xl	bg-white">
              <Icon iconName="chevron-left" />
            </div>
          </button>
          <div className="plans__embla">
            <div
              className="plans__embla__viewport"
              ref={emblaRef as LegacyRef<HTMLDivElement> | undefined}
            >
              <div className="plans__embla__container desktop:flex flex-row justify-between">
                {items.map((item, index) => {
                  return (
                    <div
                      className="min-w-full desktop:min-w-max"
                      key={item.itemKey}
                    >
                      <PlanItem
                        {...item}
                        bordered={bordered}
                        isSelected={index === selectedIndex}
                        onSelectItem={() => onSelectItem?.(index)}
                        hasBackground={hasBackground}
                        isDark={isDark}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button className="desktop:hidden" onClick={onNextButtonClick}>
            <div className="border border-gray-divider-1 px-5 py-8 rounded-xl	bg-white">
              <Icon iconName="chevron-right" color="black" />
            </div>
          </button>
        </div>

        <div className="plans__embla__container flex flex-row w-full gap-1 desktop:px-0 justify-between pt-4">
          {items.map((item, index) => {
            const isSelected = index === selectedIndex;

            if (!!renderItem) {
              return renderItem(item, index);
            }

            return (
              <div
                key={`belowSection_${item.itemKey}`}
                className={[
                  "plans__embla__slide w-full tablet:w-[360px] desktop:w-[360px] desktop:min-w-max mx-[66px] desktop:mx-0 desktop:!px-3 desktop:min-w-[270px] flex flex-row justify-center desktop:justify-start items-center gap-2 rounded-xl py-3.5",
                  bordered ? "border" : "border-0",
                  isSelected
                    ? "border-black"
                    : "hidden desktop:flex border-0 border-grey-light",
                ].join(" ")}
              >
                <div
                  className={
                    isSelected
                      ? "bg-secondary p-1.5 rounded"
                      : "bg-grey-light p-1.5 rounded"
                  }
                >
                  <Icon iconName={item.icon} className="text-black" />
                </div>
                <p className="text-black text-xs">
                  Receba <strong>{item.label}</strong>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

PlanPicker.displayName = "PlanPicker";

export default PlanPicker;
