import { LegacyRef, useMemo } from "react";
import Icon, { IconName } from "./Icon";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import PlanPicker from "./PlansPicker";

type SelectItemProps = {
  itemKey: "express" | "profit" | "spot" | "light";
  icon: IconName;
  label: string;
  isSelected?: boolean;
  onSelectItem?: (key: SelectItemProps["itemKey"]) => void;
};

const items: Array<SelectItemProps> = [
  {
    itemKey: "express",
    icon: "on-time",
    label: "na hora",
  },
  {
    itemKey: "profit",
    icon: "one-day",
    label: "um dia depois",
  },
  {
    itemKey: "spot",
    icon: "one-day",
    label: "um dia depois",
  },
  {
    itemKey: "light",
    icon: "one-day",
    label: "um dia depois",
  },
];

type Taxes = {
  debit: number;
  credit: number;
  credit12x: number;
};

const taxesInformation: { [key in SelectItemProps["itemKey"]]: Taxes } = {
  express: {
    debit: 1.39,
    credit: 3.51,
    credit12x: 10.55,
  },
  profit: {
    debit: 1.45,
    credit: 3.29,
    credit12x: 9.48,
  },
  spot: {
    debit: 0.99,
    credit: 2.99,
    credit12x: 11.18,
  },
  light: {
    debit: 1.39,
    credit: 3.2,
    credit12x: 10.12,
  },
};

const mapIndexToItemKey = (index: number): SelectItemProps["itemKey"] => {
  const indexAsAString = index.toString();

  switch (indexAsAString) {
    case "0":
      return "express";
    case "1":
      return "profit";
    case "2":
      return "spot";
    case "3":
      return "light";
    default:
      return "express";
  }
};

const TaxesSelect = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: false,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
  });

  const { selectedIndex, setSelectedIndex } = useSelectedIndex(emblaApi);
  const selectedItem = mapIndexToItemKey(selectedIndex);

  const taxes = useMemo(() => {
    const currentTaxInformation = taxesInformation[selectedItem];

    return Object.keys(currentTaxInformation).map((key) => {
      const value = currentTaxInformation?.[key as keyof Taxes];

      const label =
        key === "debit"
          ? "Débito"
          : key === "credit"
          ? "Crédito"
          : "Crédito em 12 vezes";

      return {
        label,
        tax: `${value.toString().replace(".", ",")}%`,
      };
    });
  }, [selectedItem]);

  return (
    <div className="flex flex-col items-center">
      <PlanPicker
        items={items}
        ref={emblaRef as LegacyRef<EmblaViewportRefType> | undefined}
        emblaApi={emblaApi}
        selectedIndex={selectedIndex}
        onSelectItem={setSelectedIndex}
        bordered
        hasBackground={false}
      />
      <div className="flex flex-col w-full grid grid-cols-1 tablet:grid-cols-2 justify-items-center desktop:grid-cols-3 flex-row items-center gap-10 pt-[60px]">
        {taxes.map(({ label, tax }) => (
          <div
            className="flex w-full flex-row tablet:flex-col desktop:flex-col gap-4 items-center tablet:items-start desktop:items-start w-80 bg-white gap-2 pl-8 pt-8 pb-10 rounded-3xl drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)]"
            key={label}
          >
            <div className="flex items-center justify-center bg-black w-[60px] h-[60px] rounded-full">
              <Icon iconName="card" />
            </div>
            <div>
              <p className="text-sm desktop:text-lg text-grey-light-text">
                {label}
              </p>
              <p className="text-3xl desktop:text-4xl font-extrabold text-black">
                {tax}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxesSelect;
