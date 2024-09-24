import Separator from "@/components/Separator";
import {
  MachineImages,
  MachineItem,
  MachineProductItem,
  products,
  useMachineInformation,
} from "@/hooks/useMachineInformation";
import { moneyFormatter } from "@/utils/money";
import TestLogo from "@/assets/images/test.png";
import { useCallback, useMemo } from "react";
import Icon from "@/components/Icon";
import Image from "next/image";
import Button from "@/components/Button";

type MachineInformationProps = {
  machineKey: MachineItem["itemKey"];
  position?: "right" | "left";
};

const MachineInformation = ({
  machineKey,
  position = "left",
}: MachineInformationProps) => {
  const { getMachineInformationByKey } = useMachineInformation();

  const {
    title,
    description,
    prevValue,
    currValue,
    allImages,
    disabledProducts,
  } = getMachineInformationByKey(machineKey);

  const { ImageFront, ImageFrontSmall, ImageBack, ImageDiagonal } = useMemo<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in keyof MachineImages]: any;
  }>(() => {
    return {
      ImageFront: allImages?.ImageFront || null,
      ImageFrontSmall: allImages?.ImageFrontSmall || null,
      ImageBack: allImages?.ImageBack || null,
      ImageDiagonal: allImages?.ImageDiagonal || null,
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

  const renderMachineInformation = useCallback(() => {
    return (
      <div className="flex flex-col w-full gap-4">
        <span className="text-3xl font-bold text-white">{title}</span>
        <span className="text-base text-white opacity-50 line-through">
          {moneyFormatter.format(prevValue)}
        </span>
        <span className="font-extrabold text-whatsapp text-xl">
          R${" "}
          <span className="text-4xl">
            {currValue?.toFixed(2).replace(".", ",")}
          </span>
        </span>
        <Separator className="my-1 tablet:my-3 desktop:my-3" />
        <span className="text-base text-white">{description}</span>

        <span className="text-base font-bold text-white">
          Nunc urna conubia platea senectus:
        </span>
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

        <Button type="primary" width="100%" shouldRenderChevron>
          Quero a maquininha
        </Button>
      </div>
    );
  }, [title, prevValue, currValue, description, filteredProducts]);

  return (
    <section className="bg-[#171717] min-h-[100vh] mx-8 px-8 py-10 tablet:py-[75px] rounded-2xl my-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex tablet:hidden flex-col w-full gap-6">
          <div className={bigMachineImageContainerClassName}>
            <ImageFront />

            <div className="absolute top-[4rem] left-[-1.5rem]">
              <Image
                src={TestLogo}
                width={48}
                height={48}
                alt="Discount of 20%"
              />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full gap-6">
            <div className={smallMachineImageContainerClassName}>
              <ImageFrontSmall />
            </div>
            <div className={smallMachineImageContainerClassName}>
              <ImageBack className="w-full" />
            </div>
            <div
              className={
                machineKey === "smart"
                  ? [smallMachineImageContainerClassName, ""].join("")
                  : smallMachineImageContainerClassName
              }
            >
              <ImageDiagonal className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center gap-[150px] pt-6 tablet:pt-0">
          {position === "left" ? renderMachineInformation() : null}

          <div className="hidden tablet:flex flex-col w-full gap-6">
            <div className={bigMachineImageContainerClassName}>
              <ImageFront />

              <div className="absolute top-[4rem] left-[-3rem]">
                <Image
                  src={TestLogo}
                  width={104}
                  height={104}
                  alt="Discount of 20%"
                />
                {/* <Off20 /> */}
              </div>
            </div>

            <div className="flex flex-row justify-center items-center w-full gap-6">
              <div className={smallMachineImageContainerClassName}>
                {/* <ImageFrontSmall /> */}
              </div>
              <div className={smallMachineImageContainerClassName}>
                {/* <ImageBack className="w-full" /> */}
              </div>
              <div
                className={
                  machineKey === "smart"
                    ? [smallMachineImageContainerClassName, ""].join("")
                    : smallMachineImageContainerClassName
                }
              >
                {/* <ImageDiagonal className="w-full" /> */}
              </div>
            </div>
          </div>

          {position === "right" ? renderMachineInformation() : null}
        </div>
      </div>
    </section>
  );
};

export default MachineInformation;
