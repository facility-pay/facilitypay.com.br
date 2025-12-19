import { PropsWithChildren } from "react";
import DoubleQuotesSVG from "@/assets/illustrations/machine-information/double-quotes.svg";
import DotsSVG from "@/assets/illustrations/machine-information/dots.svg";

export type MachineInformationContainerProps = PropsWithChildren & {
  id: string;
  shouldRenderDots?: boolean;
  shouldRenderQuotesOnTheLeft?: boolean;
};

const MachineInformationContainer = ({
  id,
  children,
  shouldRenderDots = false,
  shouldRenderQuotesOnTheLeft = false,
}: MachineInformationContainerProps) => {
  return (
    <section
      id={id}
      className="relative bg-[#171717] min-h-[100vh] mx-[24px] py-6 tablet:py-[75px] tablet:pb-[120px] rounded-2xl my-10"
    >
      <div className="opacity-50">
        {shouldRenderDots && (
          <div className="absolute top-[6rem] left-[7rem] hidden tablet:flex desktop:flex">
            <DotsSVG />
          </div>
        )}
        {shouldRenderQuotesOnTheLeft ? (
          <div className="absolute bottom-[2rem] left-[1rem] hidden tablet:flex desktop:flex">
            <DoubleQuotesSVG />
          </div>
        ) : (
          <div className="absolute bottom-[2rem] right-[1rem] hidden tablet:flex desktop:flex">
            <DoubleQuotesSVG />
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

export default MachineInformationContainer;
