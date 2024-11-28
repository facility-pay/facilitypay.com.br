import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Separator from "@/components/Separator";
import {
  mapSVGByMachineKey,
  useMachineInformation,
} from "@/hooks/useMachineInformation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type KnowOurMachinesProps = {
  isDark?: boolean;
  title?: string;
};

const KnowOurMachines = ({
  title = "Mais que uma máquina. São muitas vantagens: ",
  isDark,
}: KnowOurMachinesProps) => {
  const pathname = usePathname();
  const isOnMachinesPage = pathname?.includes("/maquininhas");

  const { machines } = useMachineInformation();

  const minimumHeighClassName = useMemo(() => {
    return "min-h-[calc(100vh-10rem)]";
  }, []);

  const sectionClassName = useMemo(() => {
    const defaultClassName = "relative max-w-full pt-20 tablet:pt-5 ";
    const className = isDark
      ? "bg-[#171717] mx-8 tablet:mx-[60px] rounded-2xl"
      : "bg-white";

    return [defaultClassName, className, minimumHeighClassName].join(" ");
  }, [isDark, minimumHeighClassName]);

  const titleClassName = useMemo(() => {
    const defaultClassName =
      "font-bold text-center text-3xl text-dark-blue-heading";
    const className = isDark ? "text-white" : "";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  const [itemContainerClassName, labelClassName] = useMemo(() => {
    const defaultClassName =
      "min-w-full flex flex-col items-center border drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)] tablet:w-[373px] desktop:w-[373px] rounded-2xl rounded-tl-[48px] rounded-br-[48px] p-8";
    const className = isDark
      ? "border-white-20 bg-[#171717] hover:border-secondary"
      : "bg-white hover:border-black";

    const defaultLabelClassName = "text-center font-extrabold text-xl";
    const labelClassName = isDark ? "text-white" : "text-black";

    return [
      [defaultClassName, className].join(" "),
      [defaultLabelClassName, labelClassName].join(" "),
    ];
  }, [isDark]);

  return (
    <section className={sectionClassName}>
      <div
        className={["max-w-7xl mx-auto px-8", minimumHeighClassName].join(" ")}
      >
        <div className="flex flex-col items-center justify-center pb-6 tablet:pb-0 pt-0 tablet:pt-20 gap-6">
          {isDark && (
            <div className="flex items-center justify-center bg-blue-flag rounded-full w-[4rem] h-[4rem]">
              <Icon iconName="know-machines" />
            </div>
          )}
          <span className={titleClassName}>{title}</span>
        </div>
        <div
          className={[
            "flex flex-col items-center min-w-full justify-center tablet:flex-row grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 tablet:gap-20 pb-10 tablet:pb-0",
            minimumHeighClassName,
          ].join(" ")}
        >
          {machines.map(({ itemKey, title }) => {
            const MachineImage = mapSVGByMachineKey(itemKey);

            return (
              <div key={itemKey} className={itemContainerClassName}>
                <div className="flex items-center justify-center h-[250px]">
                  <Image
                    alt={`${itemKey}-image`}
                    src={MachineImage}
                    className="flex self-center"
                  />
                </div>
                <Separator className="my-3 tablet:my-6 desktop:my-6" />
                <span className={labelClassName}>{title}</span>
                <Button
                  className="min-w-full mt-3 tablet:mt-6"
                  type="secondary"
                  isDark={isDark}
                  href={
                    isOnMachinesPage ? `#${itemKey}` : `/maquininhas#${itemKey}`
                  }
                >
                  Saiba mais
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {!isDark && (
        <div className="absolute top-[-2rem] right-[calc(50%-2rem)]">
          <div className="flex items-center justify-center bg-blue-flag rounded-full w-[4rem] h-[4rem]">
            <Icon iconName="know-machines" />
          </div>
        </div>
      )}
    </section>
  );
};

export default KnowOurMachines;
