import { useCallback, useReducer } from "react";
import Icon from "./Icon";
import { moneyFormatter } from "@/utils/money";

type InputProps = {
  label?: string;
  value: number;
  onChangeText: (value: number) => void;
};

const Input = ({ label, value, onChangeText }: InputProps) => {
  const initialValue = moneyFormatter.format(value ?? 1000);

  const [formattedValue, setFormattedValue] = useReducer(
    (_: unknown, next: string) => {
      const digits = next.replace(/\D/g, "");
      return moneyFormatter.format(Number(digits) / 100);
    },
    initialValue
  );

  const onChange = useCallback(
    (nextValue: string) => {
      const digits = nextValue.replace(/\D/g, "");
      onChangeText(Number(digits) / 100);
    },
    [onChangeText]
  );

  return (
    <div className="grow w-full tablet:w-[270px] desktop:w-[270px] flex flex-col gap-2">
      {label && <label className="px-6 text-sm text-gray-dark">{label}</label>}
      <div className="relative flex flex-row max-h-[60px] items-center border border-gray-dark rounded-full py-4 px-8">
        <input
          type="text"
          className="text-base font-bold text-black outline-0 outline-none bg-transparent"
          value={formattedValue}
          onChange={(event) => {
            setFormattedValue(event.target.value);
            onChange(event.target.value);
          }}
        />
        <Icon iconName="edit" className="absolute right-8" />
      </div>
    </div>
  );
};

export default Input;
