import { PropsWithChildren } from "react";
import DoubleReversedQuotesSVG from "@/assets/illustrations/talking-about-us/double-reversed-quotes.svg";
import DoubleQuotesSVG from "@/assets/illustrations/talking-about-us/double-quotes.svg";
import SimpleQuoteSVG from "@/assets/illustrations/simple-quote.svg";
import MobileStraightQuotesSVG from "@/assets/illustrations/talking-about-us/mobile-straight-quotes.svg";

type ContainerWithSimpleQuotesProps = PropsWithChildren & {
  id: string;
  shouldQuotesBeInverted?: boolean;
  shouldRenderBackgroundColorOnDesktop?: boolean;
  shouldRenderBackgroundColorOnMobile?: boolean;
};

const ContainerWithSimpleQuotes = ({
  id,
  shouldQuotesBeInverted = false,
  shouldRenderBackgroundColorOnDesktop = true,
  shouldRenderBackgroundColorOnMobile = true,
  children,
}: ContainerWithSimpleQuotesProps) => {
  return (
    <section
      id={id}
      className={[
        "relative max-w-full mx-[24px] desktop:mx-[60px] rounded-[32px]",
        shouldRenderBackgroundColorOnMobile ? "bg-simulator" : "",
        shouldRenderBackgroundColorOnDesktop ? "desktop:bg-simulator" : "",
      ].join(" ")}
    >
      <div className="opacity-50">
        {shouldQuotesBeInverted ? (
          <>
            <div className="absolute top-[3rem] left-[2rem] hidden tablet:flex desktop:flex">
              <SimpleQuoteSVG />
            </div>
            <div className="absolute bottom-[2rem] right-0 hidden tablet:flex desktop:flex">
              <DoubleQuotesSVG />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-[2rem] left-[2rem] hidden tablet:flex desktop:flex">
              <DoubleReversedQuotesSVG />
            </div>
            <div className="absolute bottom-[2rem] right-0 hidden tablet:flex desktop:flex">
              <SimpleQuoteSVG />
            </div>
          </>
        )}
        <div className="absolute top-[1rem] left-0 flex tablet:flex desktop:hidden">
          <MobileStraightQuotesSVG />
        </div>
      </div>
      {children}
    </section>
  );
};

export default ContainerWithSimpleQuotes;
