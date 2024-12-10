import Icon, { IconName } from "@/components/Icon";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import { LegacyRef, useMemo } from "react";
import TopRightSVG from "@/assets/shapes/plans/top-right.svg";
import MobileTopRightSVG from "@/assets/shapes/plans/mobile-top-right.svg";
import Button from "@/components/Button";
import { brands } from "@/utils/cards";
import PlanPicker from "@/components/PlansPicker";

type SelectItemProps = {
  itemKey: "profit" | "spot" | "light";
  icon: IconName;
  label: string;
  isSelected?: boolean;
  onSelectItem?: (key: SelectItemProps["itemKey"]) => void;
};

const items: Array<SelectItemProps> = [
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

// type Taxes = {
//   debit: number;
//   credit: number;
//   credit12x: number;
// };

// const taxesInformation: { [key in SelectItemProps["itemKey"]]: Taxes } = {
//   profit: {
//     debit: 1.45,
//     credit: 3.29,
//     credit12x: 9.48,
//   },
//   spot: {
//     debit: 0.99,
//     credit: 2.99,
//     credit12x: 11.18,
//   },
//   light: {
//     debit: 1.39,
//     credit: 3.2,
//     credit12x: 10.12,
//   },
// };

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

const eloLightTaxes = [
  1.45, 3.49, 4.68, 5.2, 5.72, 6.43, 6.74, 7.95, 8.44, 8.95, 9.44, 9.93, 10.42,
  10.91, 11.39, 11.86, 12.34, 12.81, 13.28,
];

const eloProfitTaxes = [
  1.45, 3.29, 4.07, 4.62, 5.16, 5.71, 6.24, 6.87, 7.4, 7.92, 8.44, 8.96, 9.48,
  9.98, 10.49, 11.48, 11.98, 12.47,
];

const eloSpotTaxes = [
  1.1, 3.2, 5.57, 6.15, 6.73, 7.3, 7.87, 8.43, 9, 9.55, 10.1, 10.64, 11.18,
  11.72, 12.25, 12.78, 13.3, 13.82, 14.34,
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

  // const taxes = useMemo(() => {
  //   const currentTaxInformation = taxesInformation[selectedItem];

  //   return Object.keys(currentTaxInformation).map((key) => {
  //     const value = currentTaxInformation?.[key as keyof Taxes];

  //     const label =
  //       key === "debit"
  //         ? "Débito"
  //         : key === "credit"
  //         ? "Crédito"
  //         : "Crédito em 12 vezes";

  //     return {
  //       label,
  //       tax: `${value.toString().replace(".", ",")}%`,
  //     };
  //   });
  // }, [selectedItem]);

  const mastercardAndVisaFacilityTaxes = useMemo(() => {
    switch (selectedItem) {
      case "profit":
        return profitTaxes;
      case "spot":
        return spotTaxes;
      case "light":
      default:
        return lightTaxes;
    }
  }, [selectedItem]);

  const eloAndOtherFacilityTaxes = useMemo(() => {
    switch (selectedItem) {
      case "profit":
        return eloProfitTaxes;
      case "spot":
        return eloSpotTaxes;
      case "light":
      default:
        return eloLightTaxes;
    }
  }, []);

  return (
    <section className="relative min-h-inherit px-8 tablet:px-20 desktop:px-20 pb-[40px] desktop:pb-[120px]">
      <div className="hidden desktop:block absolute top-0 right-0">
        <TopRightSVG />
      </div>

      <div className="block desktop:hidden absolute top-0 right-0">
        <MobileTopRightSVG />
      </div>

      <div className="relative max-w-7xl mx-auto z-50 px-0 desktop:px-8">
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

          <div className="min-w-full desktop:flex flex-col items-center desktop:justify-between gap-[10px] desktop:gap-[100px] pt-[40px]">
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
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="flex-1 flex flex-col desktop:flex-row items-center gap-[16px] desktop:gap-[80px]">
                <div className="flex-1 drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-white rounded-[20px]">
                  <div className="flex flex-row items-center justify-evenly drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] gap-5 bg-black rounded-[16px] p-4">
                    <span className="flex-1 text-base font-semibold">
                      Taxas no Débito e Crédito
                    </span>

                    <div className="flex-1 flex flex-row items-center gap-4 py-4">
                      <div className="bg-white w-full flex items-center justify-center desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]">
                        <Icon iconName="mastercard" />
                      </div>
                      <div className="bg-white w-full flex items-center justify-center desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]">
                        <Icon iconName="visa" />
                      </div>
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
                      <div className="flex items-center justify-center bg-white  w-[60px] desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]">
                        <Icon iconName="elo" />
                      </div>
                      <div className="flex items-center justify-center bg-white w-[60px] desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]">
                        <p className="text-gray-dark text-sm font-semibold">
                          e outras
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 px-[30px] py-4">
                    {eloAndOtherFacilityTaxes.map((tax, index) => {
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

              <div className="flex flex-col desktop:flex-row drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-white rounded-[16px] mt-[16px] desktop:mt-0">
                <div className="flex-1 flex flex-row items-center justify-between drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] bg-black rounded-[16px] p-6">
                  <span className="text-base font-semibold">Taxa no Pix</span>

                  <div className="flex items-center justify-center bg-white w-[60px] desktop:w-[85px] h-[40px] desktop:h-[50px] rounded-[8px]">
                    <Icon iconName="pix" />
                  </div>
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
          </div>

          <div className="flex flex-col tablet:flex-row desktop:flex-row w-full items-center justify-center pt-0 tablet:pt-[60px] desktop:pt-[60px]">
            <Button
              type="primary"
              className="max-w-full min-w-full tablet:min-w-96"
              href="https://afiliados.facilitypay.com.br/checkout/e9e55358-6155-4e06-992c-4d85dc26cc8c"
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
          <div className="overflow-x-hidden tablet:hidden">
            <div className="flex w-max animate-[scroll_20s_linear_infinite] gap-6 py-1.5">
              {brands.concat(brands).map(({ key, iconName }, index) => (
                <div
                  key={`${key}-${index}`}
                  className="min-w-40 h-[70px] flex items-center justify-center bg-grey-lightest rounded-xl py-3 px-8"
                >
                  <Icon iconName={iconName} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxesTable;
