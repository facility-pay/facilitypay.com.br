import MoneyInput from "@/components/MoneyInput";
import { LegacyRef, useMemo, useState } from "react";
import YellowArrow from "@/assets/illustrations/yellow-arrow.svg";
import GrayArrow from "@/assets/illustrations/gray-arrow.svg";
import YellowArrowRight from "@/assets/illustrations/yellow-arrow-right.svg";
import Icon, { IconName } from "@/components/Icon";
import Button from "@/components/Button";
import Installment from "@/components/Installment";
import Link from "next/link";
import PlanPicker from "@/components/PlansPicker";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import ContainerWithSimpleQuotes from "@/containers/ContainerWithSimpleQuotes";
import {
  profitTaxes as profitTaxesWithDebit,
  spotTaxes as spotTaxesWithDebit,
  lightTaxes as lightTaxesWithDebit,
} from "@/utils/taxes";
import {
  defaultAffiliatesLink,
  lightAffiliatesLink,
  sportAffiliatesLink,
} from "@/utils/links";

type SelectItemProps = {
  itemKey: "profit" | "spot" | "light";
  icon: IconName;
  label: string;
  isSelected?: boolean;
  link?: string;
  onSelectItem?: (key: SelectItemProps["itemKey"]) => void;
};

const profitTaxes = profitTaxesWithDebit.slice(1);

const spotTaxes = spotTaxesWithDebit.slice(1);

const lightTaxes = lightTaxesWithDebit.slice(1);

const items: Array<SelectItemProps> = [
  {
    itemKey: "spot",
    icon: "one-day",
    label: "um dia depois",
    link: sportAffiliatesLink,
  },
  {
    itemKey: "profit",
    icon: "one-day",
    label: "um dia depois",
    link: defaultAffiliatesLink,
  },
  {
    itemKey: "light",
    icon: "one-day",
    label: "um dia depois",
    link: lightAffiliatesLink,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const taxesD1Competitor = [
  4.99, 5.59, 7.7, 8.9, 11.7, 13.3, 15.2, 17, 19, 22.6, 23.1, 23.6, 24.1, 24.6,
  25.1, 26, 26.6, 27.2,
];

const getFinalValueAfterTax = (value: number, tax: number) => {
  return value - (value * tax) / 100;
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

const SimulatorSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: true,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
    startIndex: 1,
  });

  const { selectedIndex, setSelectedIndex } = useSelectedIndex(emblaApi);
  const [installment, setInstallment] = useState<number>(0);
  const [simulationValue, setSimulationValue] = useState<number>(1000);

  const selectedTax = mapIndexToItemKey(selectedIndex);

  const [facilityTaxes, competitorTaxes] = useMemo(() => {
    switch (selectedTax) {
      case "profit":
        return [profitTaxes, taxesD1Competitor];
      case "spot":
        return [spotTaxes, taxesD1Competitor];
      case "light":
      default:
        return [lightTaxes, taxesD1Competitor];
    }
  }, [selectedTax]);

  const [
    facilityFormattedValue,
    competitorFormattedValue,
    differenceFormattedValue,
  ] = useMemo(() => {
    const facilityTax = facilityTaxes[installment];
    const competitorTax = competitorTaxes[installment];

    const facilityValue = getFinalValueAfterTax(simulationValue, facilityTax);
    const competitorValue = getFinalValueAfterTax(
      simulationValue,
      competitorTax
    );

    return [
      formatCurrency(facilityValue),
      formatCurrency(competitorValue),
      (facilityValue - competitorValue)?.toFixed(2).replace(".", ","),
    ];
  }, [facilityTaxes, competitorTaxes, simulationValue, installment]);

  return (
    <ContainerWithSimpleQuotes
      id="simulator"
      shouldRenderBackgroundColorOnMobile={false}
    >
      <div className="py-5 my-[48px] rounded-[32px] desktop:py-[130px]">
        <div className="max-w-7xl mx-auto px-0 desktop:px-8">
          <div className="flex flex-col items-center justify-center self-center gap-7 pt-10">
            <div className="bg-primary-dark flex items-center justify-center rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
              <Icon iconName="simulator" />
            </div>
            <span className="text-2xl desktop:text-4xl text-dark-blue-heading text-center font-bold">
              Com a FacilityPay você lucra muito mais!
            </span>
            <span className="text-base desktop:text-lg text-description text-center">
              Selecione um dos <strong>planos</strong> para simular:
            </span>
          </div>
          <div className="my-auto flex flex-col max-w-7xl mx-auto pt-6">
            <PlanPicker
              items={items}
              ref={emblaRef as LegacyRef<EmblaViewportRefType> | undefined}
              emblaApi={emblaApi}
              selectedIndex={selectedIndex}
              onSelectItem={setSelectedIndex}
              bordered={false}
            />

            <div className="h-[1px] mx-[32px] bg-grey-divider" />

            <div className="relative flex flex-wrap px-8 justify-items-center justify-center items-center tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 gap-4 desktop:gap-10 flex-row pt-6">
              <MoneyInput
                label="Seu valor de venda:"
                value={simulationValue}
                onChangeText={setSimulationValue}
              />

              <div className="relative self-center grow w-full tablet:w-[270px] desktop:w-[270px] flex flex-col items-start gap-2">
                <label className="px-6 text-sm text-gray-dark">
                  Taxa{" "}
                  <label className="text-gray-dark font-bold">
                    FacilityPay:
                  </label>
                </label>
                <div className="w-full h-[60px] flex items-center rounded-full py-4 px-8 bg-secondary">
                  <p className="text-gray-dark text-base font-bold">
                    {facilityTaxes[installment].toFixed(2)}%
                  </p>
                </div>

                <div className="hidden desktop:flex absolute z-10 top-[calc(100%+12px)] right-10">
                  <YellowArrow />
                </div>
              </div>

              <Installment
                label="Parcelas:"
                value={installment}
                onChangeValue={setInstallment}
              />

              <div className="grow w-full tablet:w-[270px] desktop:w-[270px] flex flex-col items-start gap-2">
                <label className="px-6 text-sm text-gray-dark">
                  Taxa dos{" "}
                  <label className="text-gray-dark font-bold">
                    concorrentes:
                  </label>
                </label>
                <div className="w-full h-[60px] flex items-center rounded-full py-4 bg-description-15 px-8">
                  <p className="text-description-55 text-base font-bold opacity-100">
                    {competitorTaxes[installment]}%
                  </p>
                </div>

                <div className="hidden desktop:flex absolute z-10 top-[calc(100%+12px)] right-10">
                  <GrayArrow />
                </div>
              </div>
            </div>

            <div className="w-full px-8 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 justify-items-center flex flex-row gap-10 pt-10">
              <div className="flex flex-col relative bg-white w-full rounded-[20px] drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] px-6 py-10 gap-4">
                <div className="flex flex-row items-center desktop:flex-col desktop:items-start gap-4">
                  <div className="flex items-center w-[60px] h-[60px] justify-center self-start rounded-full bg-secondary p-4">
                    <Icon iconName="facility-letter" />
                  </div>
                  <span className="text-sm desktop:text-lg text-description">
                    Com a{" "}
                    <span className="text-description font-bold">
                      FacilityPay
                    </span>{" "}
                    você recebe:
                  </span>
                </div>
                <span className="text-xl text-black">
                  R${" "}
                  <span className="text-3xl font-bold">
                    {facilityFormattedValue}
                  </span>
                </span>
                <div className="hidden desktop:flex absolute top-[calc(100%+12px)] left-[25%]">
                  <YellowArrowRight />
                </div>
              </div>
              <div className="flex flex-col relative bg-white w-full rounded-[20px] drop-shadow-[2px_8px_50px_rgba(0,0,0,0.1)] px-6 py-10 gap-4">
                <div className="flex flex-row items-center desktop:flex-col desktop:items-start gap-4">
                  <div className="flex items-center w-[60px] h-[60px] justify-center self-start rounded-full bg-grey-lightest p-4">
                    <Icon iconName="competitor" />
                  </div>
                  <span className="text-sm desktop:text-lg text-description">
                    Com a concorrência você recebe:
                  </span>
                </div>
                <span className="text-xl text-[#444F64] opacity-60">
                  R${" "}
                  <span className="text-3xl font-bold">
                    {competitorFormattedValue}
                  </span>
                </span>
              </div>
            </div>
            <div className="mx-8 bg-gray-dark flex items-center justify-center rounded-xl mt-[32px] desktop:mt-20 py-4 px-5">
              <span className="text-base desktop:text-xl text-white text-center">
                Com a sua maquininha{" "}
                <span className="text-secondary font-bold">FacilityPay </span>
                você economiza{" "}
                <span className="text-whatsapp font-bold">
                  R$ {differenceFormattedValue}
                </span>
              </span>
            </div>
          </div>

          <div className="px-8 flex flex-col desktop:flex-row items-center justify-between desktop:pt-8 gap-4 w-full">
            <span className="opacity-0">Conferir todas as taxas</span>
            <Button
              type="primary"
              className="max-w-full min-w-full tablet:min-w-96"
              href={items[selectedIndex]?.link}
            >
              Adquirir maquininha
              <Icon
                iconName="chevron-right"
                className="text-black group-hover:text-secondary"
              />
            </Button>
            <Link className="underline text-sm text-gray-dark" href="/planos">
              Ver todos os planos e taxas
            </Link>
          </div>
        </div>
      </div>
    </ContainerWithSimpleQuotes>
  );
};

export default SimulatorSection;
