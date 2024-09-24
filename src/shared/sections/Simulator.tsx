import MoneyInput from "@/components/MoneyInput";
import SimulatorSelect from "@/components/SimulatorSelect";
import { useMemo, useState } from "react";
import YellowArrow from "@/assets/illustrations/yellow-arrow.svg";
import GrayArrow from "@/assets/illustrations/gray-arrow.svg";
import YellowArrowRight from "@/assets/illustrations/yellow-arrow-right.svg";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Installment from "@/components/Installment";
import Link from "next/link";

type Tax = "d1" | "d0";

const taxesD1Facility = [
  2.96, 3.92, 4.47, 5.01, 5.56, 6.09, 6.67, 7.2, 7.72, 8.24, 8.76, 9.28, 9.78,
  10.29, 10.79, 11.28, 11.78, 12.27,
];

const taxesD1Competitor = [
  4.99, 5.59, 7.7, 8.9, 11.7, 13.3, 15.2, 17, 19, 22.6, 23.1, 23.6, 24.1, 24.6,
  25.1, 26, 26.6, 27.2,
];

const taxesD0Facility = [
  3.51, 4.31, 4.9, 5.49, 6.08, 6.66, 7.74, 8.31, 8.88, 9.45, 10, 10.55, 11.11,
  11.65, 12.19, 12.72, 13.26, 13.79,
];

const taxesD0Competitor = [
  5.39, 5.99, 8.1, 9.3, 12.1, 13.7, 15.6, 17.4, 19.4, 23, 23.5, 24, 24.5, 25,
  25.5, 26.4, 27, 27.6,
];

const getFinalValueAfterTax = (value: number, tax: number) => {
  return value - (value * tax) / 100;
};

const SimulatorSection = () => {
  const [selectedTax, setSelectedTax] = useState<Tax>("d1");
  const [installment, setInstallment] = useState<number>(0);
  const [simulationValue, setSimulationValue] = useState<number>(1000);

  const [facilityTaxes, competitorTaxes] = useMemo(() => {
    return [
      selectedTax === "d1" ? taxesD1Facility : taxesD0Facility,
      selectedTax === "d1" ? taxesD1Competitor : taxesD0Competitor,
    ];
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
      getFinalValueAfterTax(simulationValue, facilityTax)
        .toFixed(2)
        .replace(".", ","),
      getFinalValueAfterTax(simulationValue, competitorTax)
        .toFixed(2)
        .replace(".", ","),
      (facilityValue - competitorValue).toFixed(2).replace(".", ","),
    ];
  }, [facilityTaxes, competitorTaxes, simulationValue, installment]);

  return (
    <section className="relative py-5 bg-simulator mx-[24px] tablet:mx-[60px] desktop:mx-[60px] my-[48px] rounded-[32px]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center self-center gap-7 pt-10">
          <div className="bg-primary flex items-center justify-center rounded-full w-[80px] h-[80px]">
            <Icon iconName="machine" />
          </div>
          <span className="text-3xl text-dark-blue-heading text-center font-bold">
            Com a FacilityPay você lucra muito mais!
          </span>
          <span className="text-base text-description text-center">
            Vamos colocar na ponta do lápis?
          </span>
        </div>
        <div className="my-auto flex flex-col max-w-7xl mx-auto">
          <div className="flex self-center py-10">
            <SimulatorSelect
              selectedItem={selectedTax}
              setSelectedItem={setSelectedTax}
            />
          </div>

          <div className="flex flex-wrap grid desktop:grid-cols-4 justify-items-center items-center tablet:grid-cols-2 phone:grid-cols-1 gap-4 desktop:gap-10 flex-row">
            <MoneyInput
              label="Seu valor de venda:"
              value={simulationValue}
              onChangeText={setSimulationValue}
            />

            <div className="relative self-center grow min-w-full tablet:w-[270px] desktop:w-[270px] flex flex-col items-start gap-2">
              <label className="px-6 text-sm text-gray-dark">
                Taxa{" "}
                <label className="text-gray-dark font-bold">FacilityPay:</label>
              </label>
              <div className="w-full h-[60px] items-center justify-center rounded-full py-4 px-8 bg-secondary">
                <p className="text-gray-dark text-base font-bold">
                  {facilityTaxes[installment]}%
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

            <div className="relative grow min-w-full tablet:w-[270px] desktop:w-[270px] flex flex-col items-start gap-2">
              <label className="px-6 text-sm text-gray-dark">
                Taxa dos{" "}
                <label className="text-gray-dark font-bold">
                  concorrentes:
                </label>
              </label>
              <div className="w-full h-[60px] items-center justify-center rounded-full py-4 bg-description-15 px-8">
                <p className="text-description-55 text-base font-bold opacity-100">
                  {competitorTaxes[installment]}%
                </p>
              </div>

              <div className="hidden desktop:flex absolute z-10 top-[calc(100%+12px)] right-10">
                <GrayArrow />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 justify-items-center flex flex-row gap-10 pt-10">
            <div className="flex flex-col relative bg-white w-full rounded-[20px] px-6 py-10 gap-4">
              <div className="flex items-center w-[60px] h-[60px] justify-center self-start rounded-full bg-secondary p-4">
                <Icon iconName="facility-letter" />
              </div>
              <span className="text-lg text-description">
                Com a{" "}
                <span className="text-description font-bold">FacilityPay</span>{" "}
                você recebe:
              </span>
              <span className="text-xl text-black">
                R${" "}
                <span className="text-3xl font-bold">
                  {facilityFormattedValue}
                </span>
              </span>
              <div className="hidden desktop:flex absolute top-[calc(100%+12px)] left-[35%]">
                <YellowArrowRight />
              </div>
            </div>
            <div className="flex flex-col relative bg-white w-full rounded-[20px] px-6 py-10 gap-4">
              <div className="flex items-center w-[60px] h-[60px] justify-center self-start rounded-full bg-grey-lightest p-4">
                <Icon iconName="competitor" />
              </div>
              <span className="text-lg text-description">
                Com a concorrência você recebe:
              </span>
              <span className="text-xl text-[#444F64] opacity-60">
                R${" "}
                <span className="text-3xl font-bold">
                  {competitorFormattedValue}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-gray-dark flex items-center justify-center rounded-xl mt-20 py-4 px-5">
            <span className="text-lg text-white text-center">
              Com a sua maquininha{" "}
              <span className="text-secondary font-bold">FacilityPay </span>
              você economiza{" "}
              <span className="text-whatsapp font-bold">
                R$ {differenceFormattedValue}
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col desktop:flex-row items-center justify-between desktop:pt-20 gap-4 w-full">
          <span className="opacity-0">Conferir todas as taxas</span>
          <Button
            type="primary"
            className="max-w-full min-w-full tablet:min-w-96"
          >
            Adquirir maquininha
            <Icon iconName="chevron-right" />
          </Button>
          <Link className="underline text-sm text-gray-dark" href="/">
            Conferir todas as taxas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
