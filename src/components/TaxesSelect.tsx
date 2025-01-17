import { LegacyRef, useMemo } from "react";
import Icon, { IconName } from "./Icon";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import PlanPicker from "./PlansPicker";
import { lightTaxes, profitTaxes, spotTaxes } from "@/utils/taxes";

type SelectItemProps = {
  itemKey: "profit" | "spot" | "light";
  icon: IconName;
  label: string;
  isSelected?: boolean;
  onSelectItem?: (key: SelectItemProps["itemKey"]) => void;
};

const items: Array<SelectItemProps> = [
  {
    itemKey: "spot",
    icon: "one-day",
    label: "um dia depois",
  },
  {
    itemKey: "profit",
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
  profit: {
    debit: profitTaxes[0],
    credit: profitTaxes[1],
    credit12x: profitTaxes[12],
  },
  spot: {
    debit: spotTaxes[0],
    credit: spotTaxes[1],
    credit12x: spotTaxes[12],
  },
  light: {
    debit: lightTaxes[0],
    credit: lightTaxes[1],
    credit12x: lightTaxes[12],
  },
};

const mapIndexToItemKey = (index: number): SelectItemProps["itemKey"] => {
  const indexAsAString = index.toString();
  switch (indexAsAString) {
    case "0":
      return "spot";
    case "1":
      return "profit";
    case "2":
      return "light";
    default:
      return "profit";
  }
};

const TaxesSelect = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: true,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
    startIndex: 1,
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
