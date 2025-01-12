import Button from "@/components/Button";
import Featured from "@/components/Featured";
import Icon, { IconName } from "@/components/Icon";
import Separator from "@/components/Separator";
import {
  MachineItem,
  MachineKey,
  MachineProductItem,
  mapSVGByMachineKey,
  products,
  useMachineInformation,
} from "@/hooks/useMachineInformation";
import { LegacyRef, useCallback, useMemo } from "react";
import PlanPicker, { Plan } from "@/components/PlansPicker";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import ContainerWithSimpleQuotes from "@/containers/ContainerWithSimpleQuotes";
import Image from "next/image";
import { lightTaxes, profitTaxes, spotTaxes } from "@/utils/taxes";

type MachineCardProps = MachineItem & {
  buttonCopy?: string;
  link?: string;
};

const MachineCard = ({
  itemKey,
  title,
  currValue,
  featured,
  disabledProducts,
  buttonCopy = "Pedir agora",
  link = "/",
}: MachineCardProps) => {
  const MachineImage = mapSVGByMachineKey(itemKey);

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
    <div className="relative w-full drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)] rounded-2xl rounded-tl-[48px] rounded-br-[48px] tablet:w-[373px] px-8 desktop:w-[373px] flex flex-col bg-white drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)]">
      <div className="flex items-center justify-center h-[250px]">
        <Image
          className="flex self-center"
          alt={`${itemKey}-image`}
          src={MachineImage}
        />
      </div>
      <Separator className="mb-3 tablet:mb-6 desktop:mb-6" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <span className="text-xl desktop:text-2xl text-black font-extrabold">
            {title}
          </span>
          {featured && <Featured />}
        </div>
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
              className="flex flex-row items-center gap-4"
            >
              <div className="bg-white">
                <Icon iconName={isChecked ? "check" : "uncheck"} />
              </div>
              <span
                className={"text-sm tablet:text-base text-gray-dark ".concat(
                  !isChecked ? "line-through text-black opacity-50" : ""
                )}
              >
                {label}
              </span>
            </li>
          )
        )}
      </ul>

      <Button type="primary" className="my-9" href={link}>
        {buttonCopy}
        <Icon
          iconName="chevron-right"
          className="text-black group-hover:text-secondary"
        />
      </Button>
    </div>
  );
};

type SelectItemProps = {
  itemKey: "profit" | "spot" | "light";
  icon: IconName;
  label: string;
  isSelected?: boolean;
  link?: string;
  onSelectItem?: (key: SelectItemProps["itemKey"]) => void;
};

const items: Array<SelectItemProps> = [
  {
    itemKey: "spot",
    icon: "one-day",
    label: "um dia depois",
    link: "https://afiliados.facilitypay.com.br/checkout/3ad884d0-d58d-4adc-b1e2-61dcb97d47e0",
  },
  {
    itemKey: "profit",
    icon: "one-day",
    label: "um dia depois",
    link: "https://afiliados.facilitypay.com.br/checkout/e9e55358-6155-4e06-992c-4d85dc26cc8c",
  },
  {
    itemKey: "light",
    icon: "one-day",
    label: "um dia depois",
    link: "https://afiliados.facilitypay.com.br/checkout/57bfc785-60fb-482a-8798-c3923a2f0643",
  },
];

type Prices = {
  black: {
    [key in MachineKey]: number;
  };
  normal: {
    [key in MachineKey]: number;
  };
};

type Taxes = {
  debit: number;
  credit: number;
  credit12x: number;
};

const machinePricesInformation: {
  [key in SelectItemProps["itemKey"]]: Prices;
} = {
  profit: {
    black: {
      mini: 179.91,
      pro: 359.91,
      smart: 422.91,
    },
    normal: {
      mini: 247.9,
      pro: 447.9,
      smart: 547.9,
    },
  },
  spot: {
    black: {
      mini: 179.91,
      pro: 359.91,
      smart: 422.91,
    },
    normal: {
      mini: 247.9,
      pro: 447.9,
      smart: 547.9,
    },
  },
  light: {
    black: {
      mini: 93.9,
      pro: 287.9,
      smart: 377.9,
    },
    normal: {
      mini: 138.9,
      pro: 324.9,
      smart: 419.9,
    },
  },
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

const mapKeyToLabel = (key: SelectItemProps["itemKey"]) => {
  return String(key).charAt(0).toUpperCase() + String(key).slice(1);
};

type ChooseMachineProps = {
  isDark?: boolean;
  buttonCopy?: string;
  hasBackground?: boolean;
};

const ChooseMachine = ({ isDark = false, buttonCopy }: ChooseMachineProps) => {
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
  const { machines } = useMachineInformation();

  const currentMachinePrice = useMemo(() => {
    const machinePriceInformation = machinePricesInformation[selectedItem];

    return machinePriceInformation;
  }, [selectedItem]);

  const renderItem = useCallback(
    (item: Plan, index: number) => {
      const isSelected = index === selectedIndex;

      return (
        <div
          key={`belowSection_${item.itemKey}`}
          className={[
            "min-w-full px-[66px] desktop:px-0 desktop:min-w-[270px]",
            isSelected ? "" : "hidden desktop:block",
          ].join(" ")}
        >
          <div
            className={[
              "flex flex-row items-center gap-2 px-3 py-3.5 border-b border-description-15",
            ].join(" ")}
          >
            <div
              className={
                isSelected
                  ? "bg-secondary p-1.5 rounded"
                  : "bg-grey-light p-1.5 rounded"
              }
            >
              <Icon
                iconName={item.icon}
                className={isSelected ? "text-black" : "text-grey-light"}
              />
            </div>
            <p className="text-black text-xs">
              Receba <strong>{item.label}</strong>
            </p>
          </div>

          <div
            className={[
              "flex flex-row items-center gap-2 rounded-xl px-3 py-3.5",
            ].join(" ")}
          >
            <div
              className={
                isSelected
                  ? "bg-secondary p-1.5 rounded"
                  : "bg-grey-light p-1.5 rounded"
              }
            >
              <Icon
                iconName="promo"
                className={isSelected ? "text-black" : "text-description"}
              />
            </div>
            <p className="text-black text-xs">
              <strong>Taxas</strong> do plano {mapKeyToLabel(item.itemKey)}:
            </p>
          </div>
          <div className="flex flex-row items-center px-3">
            <span className="text-black text-xs border-r border-description-55 pr-1">
              Crédito: <strong>{taxesInformation[item.itemKey].credit}%</strong>
            </span>
            <span className="text-black text-xs border-r border-description-55 pl-1 pr-1">
              Débito: <strong>{taxesInformation[item.itemKey].debit}%</strong>
            </span>
            <span className="text-black text-xs pl-1">
              Crédito 12x:{" "}
              <strong>{taxesInformation[item.itemKey].credit12x}%</strong>
            </span>
          </div>
        </div>
      );
    },
    [selectedIndex]
  );

  const sectionClassName = useMemo(() => {
    const defaultClassName =
      "relative max-w-full min-h-[105vh] tablet:px-20 desktop:px-20 py-20 rounded-[32px] mb-[40px] desktop:mb-0";
    const className = isDark
      ? "bg-[#171717]"
      : "bg-gradient-to-r from-grey-light to-[#D5DFE7]";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  const iconContainerClassName = useMemo(() => {
    const defaultClassName =
      "bg-primary-dark flex items-center justify-center rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]";
    const className = isDark ? "bg-secondary" : "";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  const titleClassName = useMemo(() => {
    const defaultClassName =
      "text-2xl tablet:text-3xl desktop:text-4xl text-dark-blue-heading text-center font-bold";
    const className = isDark ? "text-white" : "";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  return (
    <ContainerWithSimpleQuotes id="choose-machine" shouldQuotesBeInverted>
      <div className={sectionClassName}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center self-center gap-4 py-6">
            <div className={iconContainerClassName}>
              <Icon iconName="target" />
            </div>
            <span className={titleClassName}>
              Escolha a maquininha certa para o seu negócio
            </span>

            <span className="text-base text-center desktop:text-lg pt-8 text-description">
              Selecione um dos <strong>planos</strong> para ver os valores das
              maquininhas:
            </span>
          </div>

          <PlanPicker
            items={items}
            ref={emblaRef as LegacyRef<EmblaViewportRefType> | undefined}
            emblaApi={emblaApi}
            selectedIndex={selectedIndex}
            onSelectItem={setSelectedIndex}
            bordered
            renderItem={renderItem}
          />

          <div className="flex px-8 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 flex-row justify-center justify-items-center items-center gap-10 tablet:pt-[60px] desktop:pt-[32px]">
            {machines.map((machine) => {
              const prevPrice = currentMachinePrice.normal[machine.itemKey];
              const currentPrice = currentMachinePrice.black[machine.itemKey];
              const currentLink = items[selectedIndex]?.link;

              return (
                <MachineCard
                  key={machine.itemKey}
                  {...machine}
                  link={currentLink}
                  buttonCopy={buttonCopy}
                  currValue={currentPrice}
                  prevValue={prevPrice}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ContainerWithSimpleQuotes>
  );
};

export default ChooseMachine;
