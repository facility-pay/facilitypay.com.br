import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Link from "next/link";
import { useMemo } from "react";

const section1Copies = {
  title: "A maquininha mais tecnológica e moderna",
  description:
    "Lorem ipsum dolor sit amet, consect adipiscing elit. Aliquam pretiumac tristique leo bibendum.",
};

const Section1 = () => {
  const section1ClassName = useMemo(() => {
    const defaultClass =
      "min-h-[65vh] tablet:min-h-[100vh] bg-no-repeat bg-[url('../assets/shapes/machines/section1-shape.svg')] bg-right-top";
    const classWidth = `bg-[length:100vw] tablet:bg-[length:100vh]`;

    return [defaultClass, classWidth].join(" ");
  }, []);

  return (
    <section className="bg-section1">
      <div className="flex flex-col tablet:hidden max-w-[vw] gap-4 px-5 py-10">
        <p className="text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
          {section1Copies.title}
        </p>
        <p className="text-lg text-description">{section1Copies.description}</p>
      </div>
      <div className={section1ClassName}>
        <div className="flex tablet:items-center z-10 min-h-inherit bg-no-repeat bg-[url('../assets/shapes/machines/section1-middle-shape.svg')] bg-[length:125%] tablet:bg-[length:45%] bg-[top_5rem_right_-5rem] tablet:bg-[top_8rem_right_10rem]">
          <div className="relative flex tablet:pb-[10vh] desktop:pb-[10vh] tablet:pl-[15vw] desktop:pl-[15vw] tablet:pr-[10vw] desktop:pr-[10vw] flex-col items-start gap-5 justify-start bg-no-repeat bg-[url('../assets/illustrations/dots.svg')] bg-[top_3rem_left_5rem]">
            <div className="hidden max-w-[25vw] tablet:flex flex-col gap-6">
              <p className="text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
                {section1Copies.title}
              </p>
              <p className="text-lg text-description">
                {section1Copies.description}
              </p>
            </div>
            <div className="absolute min-w-[calc(100vw-6rem)] tablet:min-w-max left-[calc(100%+3rem)] bottom-[1rem] mt-5 tablet:bottom-0 tablet:left-0 tablet:relative">
              <div className="flex flex-col tablet:flex-row items-center justify-between gap-4">
                <span className="opacity-0 tablet:hidden">
                  Conferir todas as taxas
                </span>
                <Button
                  className="w-full tablet:w-80"
                  type="primary"
                  shouldRenderChevron
                >
                  Quero essa maquininha
                </Button>
                <Link
                  className="flex flex-row items-center text-center gap-4 underline text-sm text-gray-dark"
                  href="/"
                >
                  Ver as taxas
                  <Icon iconName="chevron-right" color="gray-dark" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;