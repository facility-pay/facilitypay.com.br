import { PropsWithChildren } from "react";
import DoubleReversedQuotesSVG from "@/assets/illustrations/talking-about-us/double-reversed-quotes.svg";
import DoubleQuotesSVG from "@/assets/illustrations/talking-about-us/double-quotes.svg";
import SimpleQuoteSVG from "@/assets/illustrations/simple-quote.svg";
import MobileStraightQuotesSVG from "@/assets/illustrations/talking-about-us/mobile-straight-quotes.svg";
import WhiteStraightQuoteSVG from "@/assets/illustrations/white-straight-quote.svg";
import WhiteStraightQuotesSVG from "@/assets/illustrations/white-straight-quotes.svg";

type ContainerWithSimpleQuotesProps = PropsWithChildren & {
  id: string;
  shouldQuotesBeInverted?: boolean;
  shouldRenderBackgroundColorOnDesktop?: boolean;
  shouldRenderBackgroundColorOnMobile?: boolean;
  isDark?: boolean;
  className?: string;
};

const ContainerWithSimpleQuotes = ({
  id,
  shouldQuotesBeInverted = false,
  shouldRenderBackgroundColorOnDesktop = true,
  shouldRenderBackgroundColorOnMobile = true,
  children,
  isDark = false,
  className,
}: ContainerWithSimpleQuotesProps) => {
  return (
    <section
      id={id}
      className={[
        "relative max-w-full mx-[24px] desktop:mx-[60px] rounded-[32px]",
        shouldRenderBackgroundColorOnMobile ? "bg-simulator" : "",
        shouldRenderBackgroundColorOnDesktop ? "desktop:bg-simulator" : "",
        isDark ? "bg-[#171717]" : "",
        className ? `${className}` : "",
      ].join(" ")}
    >
      <div className="opacity-50">
        {isDark && (
          <>
            <div className="absolute top-[3rem] left-[2rem] hidden tablet:flex desktop:flex">
              <WhiteStraightQuotesSVG />
            </div>
            <div className="absolute bottom-[2rem] right-0 hidden tablet:flex desktop:flex">
              <WhiteStraightQuoteSVG />
            </div>
          </>
        )}
        {!isDark && shouldQuotesBeInverted ? (
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
            <div className="absolute top-[3rem] left-[2rem] hidden tablet:flex desktop:flex">
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
