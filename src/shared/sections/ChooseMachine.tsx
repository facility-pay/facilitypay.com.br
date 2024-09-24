import Button from "@/components/Button";
import Featured from "@/components/Featured";
import Icon from "@/components/Icon";
import Separator from "@/components/Separator";
import {
  MachineItem,
  MachineProductItem,
  mapSVGByMachineKey,
  products,
  useMachineInformation,
} from "@/hooks/useMachineInformation";
import { moneyFormatter } from "@/utils/money";
import { useMemo } from "react";

type MachineCardProps = MachineItem & {
  buttonCopy?: string;
};

const MachineCard = ({
  itemKey,
  title,
  prevValue,
  currValue,
  featured,
  disabledProducts,
  buttonCopy = "Pedir agora",
}: MachineCardProps) => {
  const Image = mapSVGByMachineKey(itemKey);

  const productsWithIcons: Array<MachineProductItem & { isChecked: boolean }> =
    useMemo(() => {
      return products.map((product) => {
        if (disabledProducts?.includes(product.itemKey)) {
          return {
            ...product,
            isChecked: false,
          };
        }

        return {
          ...product,
          isChecked: true,
        };
      });
    }, [disabledProducts]);

  return (
    <div className="relative w-full rounded-2xl rounded-tl-[48px] rounded-br-[48px] tablet:w-[373px] px-8 desktop:w-[373px] flex flex-col bg-white drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)]">
      {featured && (
        <div className="absolute right-2 top-2">
          <Featured />
        </div>
      )}
      <div className="flex items-center justify-center h-[250px]">
        <Image className="flex self-center" alt={`${itemKey}-image`} />
      </div>
      <Separator className="mb-3 tablet:mb-6 desktop:mb-6" />
      <div className="flex flex-col gap-4">
        <span className="text-xl text-black font-extrabold">{title}</span>
        <span className="text-base text-black opacity-60 line-through">
          {moneyFormatter.format(prevValue)}
        </span>
        <span className="font-extrabold text-whatsapp text-xl">
          R${" "}
          <span className="text-4xl">
            {currValue?.toFixed(2).replace(".", ",")}
          </span>
        </span>
      </div>
      <Separator className="mt-3 tablet:mt-6 desktop:mt-6 mb-3 tablet:mb-6 desktop:mb-6" />
      <ul className="flex flex-col gap-2">
        {productsWithIcons.map(
          ({ itemKey: productItemKey, isChecked, label }) => (
            <li
              key={`${productItemKey}-${itemKey}`}
              className="flex flex-row items-center gap-3"
            >
              <Icon iconName={isChecked ? "check" : "uncheck"} />
              <span
                className={"text-base text-gray-dark ".concat(
                  !isChecked ? "line-through text-black opacity-50" : ""
                )}
              >
                {label}
              </span>
            </li>
          )
        )}
      </ul>

      <Button type="primary" className="my-9">
        {buttonCopy}
        <Icon iconName="chevron-right" />
      </Button>
    </div>
  );
};

type ChooseMachineProps = {
  isDark?: boolean;
  buttonCopy?: string;
};

const ChooseMachine = ({ isDark = false, buttonCopy }: ChooseMachineProps) => {
  const { machines } = useMachineInformation();

  const sectionClassName = useMemo(() => {
    const defaultClassName =
      "max-w-full min-h-[105vh] px-8 tablet:px-20 desktop:px-20 pb-20 mx-[24px] tablet:mx-[60px] desktop:mx-[60px] my-[48px] rounded-[32px]";
    const className = isDark
      ? "bg-[#171717]"
      : "bg-gradient-to-r from-grey-light to-[#D5DFE7]";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  const iconContainerClassName = useMemo(() => {
    const defaultClassName =
      "bg-primary flex items-center justify-center rounded-full w-[80px] h-[80px]";
    const className = isDark ? "bg-secondary" : "";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  const titleClassName = useMemo(() => {
    const defaultClassName =
      "text-2xl tablet:text-3xl desktop:text-3xl text-dark-blue-heading text-center font-bold";
    const className = isDark ? "text-white" : "";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center self-center gap-4 pt-6">
          <div className={iconContainerClassName}>
            <Icon iconName="machine" />
          </div>
          <span className={titleClassName}>
            Escolha a maquininha certa para o seu negócio
          </span>
        </div>

        <div className="flex grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 flex-row justify-center justify-items-center items-center gap-10 tablet:pt-[60px] desktop:pt-[60px]">
          {machines.map((machine) => (
            <MachineCard
              key={machine.itemKey}
              {...machine}
              buttonCopy={buttonCopy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseMachine;
