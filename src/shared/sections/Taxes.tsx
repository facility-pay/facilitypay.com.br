"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TaxesSelect from "@/components/TaxesSelect";
import { brands } from "@/utils/cards";
import { usePathname } from "next/navigation";

const Taxes = () => {
  const pathname = usePathname();
  const routePrefix = pathname.startsWith('/afiliados-facility') ? '/afiliados-facility' : '';

  return (
    <section className="max-w-7xl mx-auto relative mt-[4.5rem] mb-[4.5rem] tablet:mb-[6rem]">
      <div className="bg-white max-w-full px-8 tablet:px-20 desktop:px-20 max-w-7xl mx-auto">
        <div className="flex flex-row justify-center self-start items-center">
          <p className="text-2xl desktop:text-4xl text-center font-bold text-dark-blue-heading">
            As menores taxas do Brasil. De verdade!
          </p>
        </div>
        <p className="text-sm desktop:text-lg text-center text-description py-6">
          Veja nossos{" "}
          <strong className="text-dark-blue-heading">planos:</strong>
        </p>
        <div className="py-4">
          <TaxesSelect />
        </div>
        <div className="flex flex-col tablet:flex-row desktop:flex-row w-full items-center justify-center pt-0 tablet:pt-[60px] desktop:pt-[60px]">
          <Button
            type="primary"
            className="max-w-full min-w-full tablet:min-w-96"
            href={`${routePrefix}/planos`}
          >
            Ver todos os planos e taxas
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
