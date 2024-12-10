import Separator from "@/components/Separator";
import {
  MachineImages,
  MachineItem,
  MachineKey,
  MachineProductItem,
  products,
  useMachineInformation,
} from "@/hooks/useMachineInformation";
import { moneyFormatter } from "@/utils/money";
import { LegacyRef, useCallback, useMemo } from "react";
import Icon, { IconName } from "@/components/Icon";
import Button from "@/components/Button";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import PlanPicker, { Plan } from "@/components/PlansPicker";
import MachineInformationContainer, {
  MachineInformationContainerProps,
} from "./container";
import Image from "next/image";
import Featured from "@/components/Featured";

type MachineInformationProps = Pick<
  MachineInformationContainerProps,
  "shouldRenderDots" | "shouldRenderQuotesOnTheLeft"
> & {
  machineKey: MachineItem["itemKey"];
  position?: "right" | "left";
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
    itemKey: "profit",
    icon: "one-day",
    label: "um dia depois",
    link: "https://afiliados.facilitypay.com.br/checkout/e9e55358-6155-4e06-992c-4d85dc26cc8c",
  },
  {
    itemKey: "spot",
    icon: "one-day",
    label: "um dia depois",
    link: "https://afiliados.facilitypay.com.br/checkout/3ad884d0-d58d-4adc-b1e2-61dcb97d47e0",
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
      return "profit";
    case "1":
      return "spot";
    case "2":
      return "light";
    default:
      return "profit";
  }
};

const mapKeyToLabel = (key: SelectItemProps["itemKey"]) => {
  return String(key).charAt(0).toUpperCase() + String(key).slice(1);
};

const MachineInformation = ({
  machineKey,
  position = "left",
  ...props
}: MachineInformationProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: false,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
  });

  const { selectedIndex, setSelectedIndex } = useSelectedIndex(emblaApi);
  const selectedItem = mapIndexToItemKey(selectedIndex);
  const { getMachineInformationByKey } = useMachineInformation();

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
            "min-w-full desktop:min-w-[270px] px-[56px] desktop:px-0",
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
                  : "bg-[#FFFFFF10] p-1.5 rounded"
              }
            >
              <Icon
                iconName={item.icon}
                className={isSelected ? "text-black" : "text-white"}
              />
            </div>
            <p className={"text-white text-xs"}>
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
                  : "bg-[#FFFFFF10] p-1.5 rounded"
              }
            >
              <Icon
                iconName="promo"
                className={isSelected ? "text-black" : "text-white"}
              />
            </div>
            <p className="text-white text-xs">
              <strong>Taxas</strong> do plano {mapKeyToLabel(item.itemKey)}:
            </p>
          </div>
          <div className="flex flex-row items-center px-3">
            <span className="text-white text-xs border-r border-description-55 pr-1">
              Crédito: <strong>{taxesInformation[item.itemKey].credit}%</strong>
            </span>
            <span className="text-white text-xs border-r border-description-55 pl-1 pr-1">
              Débito: <strong>{taxesInformation[item.itemKey].debit}%</strong>
            </span>
            <span className="text-white text-xs pl-1">
              Crédito 12x:{" "}
              <strong>{taxesInformation[item.itemKey].credit12x}%</strong>
            </span>
          </div>
        </div>
      );
    },
    [selectedIndex]
  );

  const { title, subtitle, description, strong, allImages, disabledProducts } =
    getMachineInformationByKey(machineKey);

  const {
    ImageFront,
    ImageFrontSmall,
    ImageDiagonal,
    MobileImageFront,
    MobileImageFrontSmall,
    MobileImageDiagonal,
  } = useMemo<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in keyof MachineImages]: any;
  }>(() => {
    return {
      ImageFront: allImages?.ImageFront || null,
      ImageFrontSmall: allImages?.ImageFrontSmall || null,
      ImageDiagonal: allImages?.ImageDiagonal || null,
      MobileImageFront: allImages?.MobileImageFront || null,
      MobileImageFrontSmall: allImages?.MobileImageFrontSmall || null,
      MobileImageDiagonal: allImages?.MobileImageDiagonal || null,
    };
  }, [allImages]);

  const [
    bigMachineImageContainerClassName,
    smallMachineImageContainerClassName,
  ] = useMemo(() => {
    const defaultClassName =
      "relative flex items-center justify-center w-full border border-white-20 rounded-lg rounded-br-2xl tablet:rounded-2xl tablet:rounded-br-[48px]";

    return [
      defaultClassName,
      [
        defaultClassName,
        "w-full overflow-hidden h-[90px] tablet:h-[153px] border border-white-20",
      ].join(" "),
    ];
  }, []);

  const filteredProducts = useMemo<MachineProductItem[]>(() => {
    return products.filter((product) => {
      if (disabledProducts) {
        return disabledProducts?.find(
          (disabledProduct) => disabledProduct !== product.itemKey
        );
      }

      return product;
    });
  }, [disabledProducts]);

  const renderMachineInformation = useCallback(
    (isFeatured?: boolean) => {
      const blackFridayPrice = currentMachinePrice.black[machineKey];
      const previousPrice = currentMachinePrice.normal[machineKey];

      return (
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-row items-center gap-4">
            <span className="text-3xl font-bold text-white">{title}</span>
            {isFeatured && <Featured />}
          </div>
          <span className="text-base font-extrabold text-secondary">
            {subtitle}
          </span>
          <span className="text-base text-white opacity-50 line-through">
            {moneyFormatter.format(previousPrice)}
          </span>
          <span className="font-extrabold text-whatsapp text-xl">
            R${" "}
            <span className="text-4xl">
              {blackFridayPrice?.toFixed(2).replace(".", ",")}
            </span>
          </span>
          <Separator className="my-1 tablet:my-3 desktop:my-3" />

          <div className="flex flex-col gap-8 pb-8">
            <span className="text-base text-white whitespace-pre-line">
              {description}
            </span>

            <span className="text-base font-bold text-white">{strong}</span>
            <ul className="flex flex-col gap-2">
              {filteredProducts.map(({ itemKey: productItemKey, label }) => (
                <li
                  key={`${productItemKey}-${machineKey}`}
                  className="flex flex-row items-center gap-3"
                >
                  <Icon iconName="check" />
                  <span className="text-base text-white ">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            type="primary"
            width="100%"
            shouldRenderChevron
            href={items[selectedIndex]?.link}
          >
            Quero a maquininha
          </Button>
        </div>
      );
    },
    [
      machineKey,
      title,
      subtitle,
      description,
      strong,
      filteredProducts,
      currentMachinePrice,
    ]
  );

  return (
    <MachineInformationContainer id={machineKey} {...props}>
      <div className="bg-[#171717] min-h-[100vh] rounded-2xl my-10">
        <div className="max-w-7xl mx-auto">
          <PlanPicker
            items={items}
            ref={emblaRef as LegacyRef<EmblaViewportRefType> | undefined}
            emblaApi={emblaApi}
            selectedIndex={selectedIndex}
            onSelectItem={setSelectedIndex}
            bordered
            renderItem={renderItem}
            isDark
          />

          <div className="flex px-8 tablet:hidden flex-col w-full gap-6">
            <div className={bigMachineImageContainerClassName}>
              <Image alt="front" src={MobileImageFront} />

              <div className="absolute top-[1rem] right-[1rem]">
                <Icon iconName="20-off" />
              </div>
            </div>

            <div className="flex flex-row justify-center items-center w-[65%] h-full gap-6">
              <div className={smallMachineImageContainerClassName}>
                <Image alt="front-small" src={MobileImageFrontSmall} />
              </div>
              <div className={smallMachineImageContainerClassName}>
                <Image alt="front-diagonal" src={MobileImageDiagonal} />
              </div>
            </div>
          </div>

          <div className="flex px-8 flex-row justify-between items-start tablet:gap-[50px] desktop:gap-[150px] pt-6 tablet:pt-[100px]">
            {position === "left" ? renderMachineInformation() : null}

            <div className="hidden tablet:flex flex-col w-full gap-6">
              <div className={bigMachineImageContainerClassName}>
                <Image alt="smart-front-png" src={ImageFront} />

                <div className="absolute top-[4rem] left-[-2rem]">
                  <Icon iconName="20-off" />
                </div>
              </div>

              <div className="flex flex-row justify-center items-center w-[65%] gap-6">
                <div className={smallMachineImageContainerClassName}>
                  <Image alt="front-small" src={ImageFrontSmall} />
                </div>
                <div className={smallMachineImageContainerClassName}>
                  <Image alt="front-diagonal" src={ImageDiagonal} />
                </div>
              </div>
            </div>

            {position === "right"
              ? renderMachineInformation(machineKey === "pro")
              : null}
          </div>
        </div>
      </div>
    </MachineInformationContainer>
  );
};

export default MachineInformation;
