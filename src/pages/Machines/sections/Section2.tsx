import Button from "@/components/Button";
import Separator from "@/components/Separator";
import {
  mapSVGByMachineKey,
  useMachineInformation,
} from "@/hooks/useMachineInformation";
import { useMemo } from "react";

type Section2Props = {
  isDark?: boolean;
  title?: string;
};

const Section2 = ({
  title = "Mais que uma máquina. São muitas vantagens: ",
  isDark,
}: Section2Props) => {
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
  }, [isDark]);

  const titleClassName = useMemo(() => {
    const defaultClassName =
      "font-bold text-center text-3xl text-dark-blue-heading";
    const className = isDark ? "text-white" : "";

    return [defaultClassName, className].join(" ");
  }, [isDark]);

  const [itemContainerClassName, labelClassName] = useMemo(() => {
    const defaultClassName =
      "border drop-shadow-[2px_8px_50px_rgba(0,0,0,0.10)] tablet:w-[373px] desktop:w-[373px] rounded-2xl rounded-tl-[48px] rounded-br-[48px] p-8";
    const className = isDark
      ? "border-white-20 bg-[#171717] hover:border-secondary"
      : "bg-white hover:border-black";

    const defaultLabelClassName = "font-extrabold text-xl";
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
        <div className="flex flex-col items-center justify-center pb-6 tablet:pb-0 pt-20 gap-6">
          {isDark && (
            <div className="bg-secondary rounded-full w-[4rem] h-[4rem]"></div>
          )}
          <span className={titleClassName}>{title}</span>
        </div>
        <div
          className={[
            "flex flex-col items-center justify-center tablet:flex-row grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 tablet:gap-20 pb-10 tablet:pb-0",
            minimumHeighClassName,
          ].join(" ")}
        >
          {machines.map(({ itemKey, title }) => {
            const Image = mapSVGByMachineKey(itemKey);

            return (
              <div key={itemKey} className={itemContainerClassName}>
                <div className="flex items-center justify-center h-[250px]">
                  <Image
                    className="flex self-center"
                    alt={`${itemKey}-image`}
                  />
                </div>
                <Separator className="my-3 tablet:my-6 desktop:my-6" />
                <span className={labelClassName}>{title}</span>
                <Button
                  className="min-w-full mt-3 tablet:mt-6"
                  type="primary"
                  isDark={isDark}
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
          <div className="bg-blue-flag rounded-full w-[4rem] h-[4rem]"></div>
        </div>
      )}
    </section>
  );
};

export default Section2;
