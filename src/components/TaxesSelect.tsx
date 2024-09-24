import { useMemo, useState } from "react";
import Icon, { IconName } from "./Icon";

type SelectItemProps = {
  itemKey: "now" | "one-day" | "30-days";
  icon: IconName;
  label: string;
  isSelected?: boolean;
  onSelectItem?: (key: SelectItemProps["itemKey"]) => void;
};

const SelectItem = ({
  itemKey,
  icon,
  label,
  isSelected = false,
  onSelectItem,
}: SelectItemProps) => {
  const defaultClassName =
    "w-56 flex my-2 mx-2 py-4 rounded-full flex-row justify-center items-center gap-4";
  const selectedClassName = "bg-white";

  return (
    <button
      className={
        isSelected
          ? [defaultClassName, selectedClassName].join(" ")
          : defaultClassName
      }
      onClick={() => {
        onSelectItem?.(itemKey);
      }}
      key={label}
    >
      <Icon iconName={icon} />
      <p className="text-gray-dark text-base font-semibold">{label}</p>
    </button>
  );
};

type SelectProps = {
  selectedItem: SelectItemProps["itemKey"];
  setSelectedItem: (selectedItem: SelectItemProps["itemKey"]) => void;
};

const items: Array<SelectItemProps> = [
  {
    itemKey: "now",
    icon: "clock",
    label: "Na hora",
  },
  {
    itemKey: "one-day",
    icon: "one-day",
    label: "Um dia depois",
  },
  {
    itemKey: "30-days",
    icon: "30-days",
    label: "Em 30 dias",
  },
];

const Select = ({ selectedItem, setSelectedItem }: SelectProps) => {
  return (
    <div className="max-w-full tablet:max-w-[700px] desktop:max-w-[700px] flex flex-row justify-center bg-grey-light rounded-full">
      {items.map(({ itemKey, ...rest }) => {
        const isSelected = itemKey === selectedItem;

        return (
          <SelectItem
            key={itemKey}
            {...rest}
            itemKey={itemKey}
            isSelected={isSelected}
            onSelectItem={setSelectedItem}
          />
        );
      })}
    </div>
  );
};

type Taxes = {
  debit: number;
  credit: number;
  credit12x: number;
};

const taxesInformation: { [key in SelectItemProps["itemKey"]]: Taxes } = {
  now: {
    debit: 2.96,
    credit: 2.96,
    credit12x: 9.28,
  },
  "one-day": {
    debit: 3.12,
    credit: 3.12,
    credit12x: 11,
  },
  "30-days": {
    debit: 3.36,
    credit: 3.36,
    credit12x: 14.5,
  },
};

const TaxesSelect = () => {
  const [selectedItem, setSelectedItem] =
    useState<SelectItemProps["itemKey"]>("now");

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
      <Select selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      <div className="flex flex-col w-full grid grid-cols-1 tablet:grid-cols-2 justify-items-center desktop:grid-cols-3 flex-row items-center gap-10 pt-[60px]">
        {taxes.map(({ label, tax }) => (
          <div
            className="flex w-full flex-row tablet:flex-col desktop:flex-col gap-4 items-center tablet:items-start desktop:items-start w-80 bg-white gap-2 pl-8 pt-8 pb-10 rounded-3xl drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)]"
            key={label}
          >
            <div className="flex items-center justify-center bg-secondary w-[60px] h-[60px] rounded-full">
              <Icon iconName="card" />
            </div>
            <div>
              <p className="text-base text-grey-light-text">{label}</p>
              <p className="text-4xl font-extrabold text-dark-blue-heading">
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
