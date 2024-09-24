import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TaxesSelect from "@/components/TaxesSelect";
import { brands } from "@/utils/cards";
import Link from "next/link";

const Taxes = () => {
  return (
    <section className="relative mt-[4.5rem] mb-[4.5rem] tablet:mb-[6rem]">
      <div className="bg-white max-w-full px-8 tablet:px-20 desktop:px-20 max-w-7xl mx-auto">
        <div className="flex flex-row justify-center self-start items-center">
          <p className="text-3xl text-center font-bold text-primary-dark">
            As menores taxas do Brasil. De verdade!
          </p>
          {/* <div className="flex flex-row justify-start items-center bg-whatsapp py-3 px-5 rounded-full self-start">
          <Icon iconName="whatsapp" />
          <p className="font-semibold text-base text-white">Adquira agora</p>
        </div> */}
        </div>
        <p className="text-base text-center text-description py-6">
          Você deseja receber:
        </p>
        <TaxesSelect />
        <div className="flex flex-col gap-4 tablet:flex-row desktop:flex-row w-full items-center justify-between pt-0 tablet:pt-[60px] desktop:pt-[60px]">
          <span className="opacity-0">Conferir todas as taxas</span>
          <Button
            type="primary"
            className="max-w-full min-w-full tablet:min-w-96"
          >
            Adquirir maquininha
            <Icon iconName="chevron-right" />
          </Button>
          <Link
            className="underline flex items-center text-sm gap-4 text-gray-dark"
            href="/"
          >
            Ver todas as taxas
            <Icon iconName="chevron-right" />
          </Link>
        </div>
        <p className="text-base text-center	text-description pt-8 pb-8">
          Aceite as principais <span className="font-bold">bandeiras</span> e{" "}
          <span className="font-bold">carteiras digitais</span>
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

      <div className="absolute top-[-6.5rem] right-[calc(50%-2rem)]">
        <div className="flex justify-center items-center bg-blue-flag rounded-full w-[4rem] h-[4rem]">
          <Icon iconName="flag" />
        </div>
      </div>
    </section>
  );
};

export default Taxes;
