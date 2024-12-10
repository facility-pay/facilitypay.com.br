import Button from "@/components/Button";
import { useMemo } from "react";

const section1Copies = {
  title: "Mais tecnologia para você",
  description:
    "Faça  gestão de produtos, controle de estoque, cardápio digital, transações bancárias e muito mais diretamente em sua máquina.",
};

const Section1 = () => {
  const section1ClassName = useMemo(() => {
    const defaultClass =
      "min-h-[65vh] tablet:min-h-[100vh] bg-no-repeat bg-[url('../assets/shapes/machines/section1-shape.svg')] bg-right-top py-[8rem] tablet:py-0";
    const classWidth = `bg-[length:100vw] tablet:bg-[length:100vh]`;

    return [defaultClass, classWidth].join(" ");
  }, []);

  return (
    <section className="bg-section1">
      <div className="flex flex-col tablet:hidden max-w-[80vw] gap-4 px-8 py-10">
        <p className="text-[18px] text-black font-bold">Facility Smart</p>
        <p className="text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-dark-blue-heading">
          {section1Copies.title}
        </p>
        <p className="text-sm desktop:text-lg text-description">
          {section1Copies.description}
        </p>
      </div>
      <div className={section1ClassName}>
        <div className="flex tablet:items-center z-10 min-h-inherit bg-no-repeat bg-[url('../assets/shapes/machines/section1-middle-shape.svg')] bg-[length:125%] tablet:bg-[length:45%] bg-[top_5rem_right_-5rem] tablet:bg-[top_8rem_right_10rem]">
          <div className="relative flex tablet:pb-[10vh] desktop:pb-[10vh] tablet:pl-[15vw] desktop:pl-[15vw] tablet:pr-[10vw] desktop:pr-[10vw] flex-col items-start gap-5 justify-start bg-no-repeat bg-[url('../assets/illustrations/dots.svg')] bg-[top_3rem_left_5rem]">
            <div className="hidden max-w-[25vw] tablet:flex flex-col gap-6">
              <p className="text-[24px] text-black font-bold">Facility Smart</p>
              <p className="text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
                {section1Copies.title}
              </p>
              <p className="text-lg text-description">
                {section1Copies.description}
              </p>
            </div>
            <div className="absolute w-[100vw] left-0 bottom-[-4rem] mt-5 tablet:bottom-0 tablet:left-0 tablet:relative">
              <div className="flex flex-col tablet:flex-row items-center justify-between gap-4">
                <span className="opacity-0 tablet:hidden">Ver taxas</span>
                <Button
                  className="w-full tablet:w-80"
                  type="primary"
                  shouldRenderChevron
                  href="https://afiliados.facilitypay.com.br/checkout/e9e55358-6155-4e06-992c-4d85dc26cc8c"
                >
                  Adquirir maquininha
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
