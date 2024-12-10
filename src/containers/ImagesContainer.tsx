import { PropsWithChildren } from "react";
import GrayTopLeftSVG from "@/assets/shapes/indicate/gray-top-left.svg";
import GrayTopRightSVG from "@/assets/shapes/indicate/gray-top-right.svg";
import YellowTopLeftSVG from "@/assets/shapes/indicate/yellow-top-left.svg";
import YellowTopRightSVG from "@/assets/shapes/indicate/yellow-top-right.svg";

type ImagesContainerProps = PropsWithChildren & {
  shouldBeOnTheLeft?: boolean;
};

const ImagesContainer = ({
  shouldBeOnTheLeft = false,
  children,
}: ImagesContainerProps) => {
  return (
    <section className="relative">
      {shouldBeOnTheLeft ? (
        <>
          <div className="absolute top-0 left-0 hidden tablet:flex desktop:flex">
            <YellowTopLeftSVG />
          </div>
          <div className="absolute top-0 right-0 hidden tablet:flex desktop:flex">
            <GrayTopRightSVG />
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 hidden tablet:flex desktop:flex">
            <GrayTopLeftSVG />
          </div>
          <div className="absolute top-0 right-0 hidden tablet:flex desktop:flex">
            <YellowTopRightSVG />
          </div>
        </>
      )}
      {children}
    </section>
  );
};

export default ImagesContainer;
