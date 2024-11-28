import Icon, { IconName } from "@/components/Icon";
import PlanPicker from "@/components/PlansPicker";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import { LegacyRef, useMemo } from "react";
import TopRightSVG from "@/assets/shapes/plans/top-right.svg";
import Button from "@/components/Button";
import { brands } from "@/utils/cards";

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

const expressTaxes = [
  3.51, 4.31, 4.9, 5.49, 6.08, 6.66, 7.74, 8.31, 8.88, 9.45, 10, 10.55, 11.11,
  11.65, 12.19, 12.72, 13.26, 13.79,
];

const profitTaxes = [
  2.96, 3.92, 4.47, 5.01, 5.56, 6.09, 6.67, 7.2, 7.72, 8.24, 8.76, 9.28, 9.78,
  10.29, 10.79, 11.28, 11.78, 12.27,
];

const spotTaxes = [
  2.99, 5.57, 6.15, 6.73, 7.3, 7.87, 8.43, 9, 9.55, 10.1, 10.64, 11.18, 11.72,
  12.25, 12.78, 13.3, 13.82, 14.34,
];

const lightTaxes = [
  3.2, 4.53, 5.05, 5.57, 6.08, 6.59, 7.65, 8.14, 8.65, 9.14, 9.63, 10.12, 10.61,
  11.09, 11.56, 12.04, 12.51, 12.98,
];

const TaxesTable = () => {
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

  const mastercardAndVisaFacilityTaxes = useMemo(() => {
    switch (selectedItem) {
      case "express":
        return expressTaxes;
      case "profit":
        return profitTaxes;
      case "spot":
        return spotTaxes;
      case "light":
      default:
        return lightTaxes;
    }
  }, [selectedItem]);

  return (
    <section className="relative flex justify-start min-h-inherit max-w-full pb-[40px] desktop:pb-[120px]">
      <div className="hidden desktop:block absolute top-0 right-0">
        <TopRightSVG />
      </div>

      <div className="max-w-7xl mx-auto px-0 desktop:px-8">
        <div className="flex flex-col pt-6 items-center z-10 pt-[90px] gap-6">
          <div className="flex items-center justify-center w-[60px] h-[60px] bg-secondary rounded-full">
            <Icon iconName="flag" />
          </div>

          <span className="text-[2rem] desktop:text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading text-center desktop:text-start">
            As menores taxas do Brasil. De verdade!
          </span>
          <span className="text-center desktop:text-start text-lg text-grey-light-text">
            Veja nossos <strong>planos:</strong>
          </span>

          <div className="desktop:flex flex-col desktop:justify-between gap-[10px] desktop:gap-[100px] pt-[40px]">
            {/* <PlanPicker
              items={items}
              ref={emblaRef as LegacyRef<EmblaViewportRefType> | undefined}
              emblaApi={emblaApi}
              selectedIndex={selectedIndex}
              onSelectItem={setSelectedIndex}
              bordered
              hasBackground={false}
            /> */}

            <div className="flex flex-col desktop:flex-row items-center gap-[16px] desktop:gap-[80px]">
              <div className="flex-1 drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-white rounded-[20px]">
                <div className="flex flex-row items-center justify-evenly drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] gap-5 bg-black rounded-[16px] p-4">
                  <span className="flex-1 text-base font-semibold">
                    Taxas no Débito e Crédito
                  </span>

                  <div className="flex-1 flex flex-row items-center gap-4 py-4">
                    <div className="py-2 px-4 bg-white w-full desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]"></div>
                    <div className="py-2 px-4 bg-white w-full desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 px-[30px] py-4">
                  {mastercardAndVisaFacilityTaxes.map((tax, index) => {
                    const isDebit = index === 0;

                    return (
                      <div
                        key={`${tax}_${index}`}
                        className="flex flex-row justify-between items-center"
                      >
                        <div className="flex float-left flex-row items-center gap-4">
                          <Icon
                            iconName="chevron-right"
                            className="text-secondary"
                          />
                          <span className="text-gray-dark text-base">
                            {isDebit ? "Débito" : "Crédito"}
                          </span>
                          {!isDebit && (
                            <div className="max-w-[40px] flex justify-center items-center bg-[#1F678D10] px-4 py-1 rounded-[8px]">
                              <span className="text-base font-extrabold text-primary-dark">
                                {index + 1}x
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-grow h-[1px] mx-4 border-t border-dashed border-gray-400" />

                        <div className="w-[70px] float-right flex justify-center items-center bg-[#3DBE6410] px-4 py-1 rounded-[8px]">
                          <span className="text-base font-extrabold text-whatsapp">
                            {tax}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1 drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-white rounded-[20px] p-2">
                <div className="flex flex-row items-center justify-evenly drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] gap-5 bg-black rounded-[16px] p-4">
                  <span className="text-base font-semibold">
                    Taxas no Débito e Crédito
                  </span>

                  <div className="flex flex-row items-center gap-4 py-4">
                    <div className="py-2 px-4 bg-white  w-[60px] desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]"></div>
                    <div className="py-2 px-4 bg-white  w-[60px] desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 px-[30px] py-4">
                  {mastercardAndVisaFacilityTaxes.map((tax, index) => {
                    const isDebit = index === 0;

                    return (
                      <div
                        key={`${tax}_${index}`}
                        className="flex flex-row justify-between items-center"
                      >
                        <div className="flex float-left flex-row items-center gap-4">
                          <Icon
                            iconName="chevron-right"
                            className="text-secondary"
                          />
                          <span className="text-gray-dark text-base">
                            {isDebit ? "Débito" : "Crédito"}
                          </span>
                          {!isDebit && (
                            <div className="max-w-[40px] flex justify-center items-center bg-[#1F678D10] px-4 py-1 rounded-[8px]">
                              <span className="text-base font-extrabold text-primary-dark">
                                {index + 1}x
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-grow h-[1px] mx-4 border-t border-dashed border-gray-400" />

                        <div className="w-[70px] float-right flex justify-center items-center bg-[#3DBE6410] px-4 py-1 rounded-[8px]">
                          <span className="text-base font-extrabold text-whatsapp">
                            {tax}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col desktop:flex-row drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-white mt-[16px] desktop:mt-0">
              <div className="flex-1 flex flex-row items-center justify-between drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-black rounded-[16px] p-6">
                <span className="text-base font-semibold">Taxa no Pix</span>

                <div className="py-2 px-4 bg-white w-[60px] desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]"></div>
              </div>
              <div className="flex-1 flex flex-row items-center bg-white rounded-[16px] p-6">
                <div className="block desktop:hidden flex flex-row items-center gap-4">
                  <Icon iconName="chevron-right" className="text-secondary" />
                  <span className="text-gray-dark text-base">No Pix</span>
                </div>
                <div className="flex-grow h-[1px] mx-4 border-t border-dashed border-gray-400" />
                <div className="w-[70px] float-right flex justify-center items-center bg-[#3DBE6410] px-4 py-1 rounded-[8px]">
                  <span className="text-base font-extrabold text-whatsapp">
                    0.50%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col tablet:flex-row desktop:flex-row w-full items-center justify-center pt-0 tablet:pt-[60px] desktop:pt-[60px]">
            <Button
              type="primary"
              className="max-w-full min-w-full tablet:min-w-96"
            >
              Aproveitar taxas
              <Icon
                iconName="chevron-right"
                className="text-black group-hover:text-secondary"
              />
            </Button>
          </div>
          <p className="text-sm desktop:text-xl text-center	text-description pt-8 pb-8">
            Aceite as principais{" "}
            <span className="font-bold text-black">bandeiras</span> e{" "}
            <span className="font-bold text-black">carteiras digitais</span>
          </p>

          <div className="hidden flex-row flex-wrap tablet:flex justify-center flex-row gap-10">
            {brands.map(({ key, iconName }) => (
              <div
                key={key}
                className="min-w-40 h-[70px] flex items-center justify-center bg-grey-lightest rounded-xl py-3 px-8"
              >
                <Icon iconName={iconName} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxesTable;
