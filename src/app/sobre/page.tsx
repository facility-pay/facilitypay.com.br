"use client";

import TopLeftSVG from "@/assets/shapes/about/top-left.svg";
import TopLeftMobileSVG from "@/assets/shapes/about/top-left-mobile.svg";
import TopRightSVG from "@/assets/shapes/about/top-right.svg";
import FacilityLetterSVG from "@/assets/logos/facility-letter.svg";
import StraightQuotesSVG from "@/assets/illustrations/straight-quotes.svg";
import ModelWithMachine from "@/assets/images/model-with-machine.png";
import EmptyOffice from "@/assets/images/empty-office.png";
import Vitoria from "@/assets/images/vitoria.png";
import Image from "next/image";
import Icon from "@/components/Icon";
import KnowOurMachines from "@/shared/sections/KnowOurMachines";
import Testimonials from "@/shared/sections/Testimonials";
import Layout from "@/containers/Layout";
import LoopBanner from "@/components/LoopBanner";

const About = () => {
  const renderLoopBanner = () => (
    <div className="overflow-x-hidden">
      <LoopBanner />
    </div>
  );

  return (
    <Layout renderLoopBanner={renderLoopBanner}>
      <section className="relative flex justify-center min-h-inherit px-8 tablet:px-20 desktop:px-20 pb-[40px] desktop:pb-[120px]">
        <div className="hidden desktop:block absolute top-0 left-0">
          <TopLeftSVG />
        </div>
        <div className="block desktop:hidden absolute top-0 left-0">
          <TopLeftMobileSVG />
        </div>
        <div className="hidden desktop:block absolute top-0 right-0">
          <TopRightSVG />
        </div>

        <div className="flex flex-col items-center z-10 pt-[90px] gap-6">
          <div className="flex items-center justify-center w-[60px] h-[60px] bg-secondary rounded-full">
            <FacilityLetterSVG />
          </div>

          <span className="text-[2rem] desktop:text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
            Sobre nós
          </span>
          <span className="text-center desktop:text-start text-lg text-grey-light-text">
            Você já conhece a FacilityPay? Quem somos e como trabalhamos.
          </span>

          <div className="flex flex-col desktop:flex-row desktop:justify-between gap-[30px] desktop:gap-[100px] pt-[40px]">
            <div className="flex-1 flex justify-end">
              <Image alt="model-with-machine" src={ModelWithMachine} />
            </div>
            <div className="flex-1 flex flex-col gap-10">
              <span className="text-description">
                Somos uma Fintech que oferece{" "}
                <strong>soluções de pagamento para o seu negócio</strong>, com
                maquininhas modernas, conta digital e taxas competitivas. Neste
                texto, vamos contar um pouco sobre quem somos e como
                funcionamos.
              </span>
              <span className="text-description">
                Lorem ipsum tempor nibh tincidunt feugiat placerat, risus
                pretium maecenas elit amet nunc, euismod nisi taciti erns
                himenaeos sociosqu. id torquent sem fringilla dui dictum urna
                elementum amet, egestas.
              </span>
              <span className="text-description">
                Taciti placerat pretium ipsum tellus augue ad, pharetra vitae
                taciti potenti nostra auctor nibh. orci faucibus orci lorem
                tempor justo dapibus vulputate ornare, phasellus sagittis semper
                eros risus donec mattis.
              </span>
              <span className="text-description">
                Lorem ipsum tempor nibh tincidunt feugiat placerat, risus
                pretium maecenas elit amet nunc, euismod nisi taciti erns
                himenaeos sociosqu. id torquent sem fringilla dui dictum urna
                elementum amet, egestas.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-simulator px-8 tablet:px-20 desktop:px-20 pb-[40px] desktop:pb-[120px] mb-[40px] desktop:mb-[100px]">
        <div className="absolute top-[20px] hidden tablet:flex desktop:flex">
          <StraightQuotesSVG />
        </div>

        <div className="flex flex-col items-center justify-center self-center gap-7 pt-10">
          <div className="bg-primary-dark flex items-center justify-center rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
            <Icon iconName="path" />
          </div>
          <span className="text-3xl text-dark-blue-heading text-center font-bold">
            Nossa trajetória
          </span>
          <span className="text-base text-description text-center">
            Taciti placerat pretium ipsum tellus augue ad dapibus vulputate
          </span>
        </div>

        <div className="flex flex-col desktop:flex-row justify-between gap-[100px] pt-[60px] max-w-5xl mx-auto">
          <div className="flex-1 flex flex-col gap-10">
            <div className="block desktop:hidden relative flex-1 flex justify-start">
              <Image alt="empty-office" src={EmptyOffice} />

              <div className="absolute bottom-[24px] left-[-16px]">
                <Image alt="vitoria-city" src={Vitoria} />
              </div>
            </div>
            <span className="text-description">
              A FacilityPay nasceu há mais de dois anos, no mercado da{" "}
              <strong>Grande Vitória, no Espírito Santo</strong>, com outra
              marca de máquinas. Em 2023, fizemos uma parceria com a PagSeguro,
              uma das líderes em serviços financeiros e soluções de pagamento no
              Brasil.
            </span>
            <span className="text-description">
              Com isso, ampliamos nossa atuação para todo o território nacional,
              levando nossas maquininhas para milhares de clientes. Essa
              parceria também traz benefícios para você, como frete grátis 100%
              seguro, garantia vitalícia, troca de bobina grátis e atendimento
              24 horas por dia, todos os dias da semana.
            </span>
            <span className="text-description">
              Mas não se preocupe: as taxas são exclusivas da FacilityPay, uma
              das menores do mercado.
            </span>
          </div>
          <div className="hidden desktop:block relative flex-1 flex justify-start">
            <Image alt="empty-office" src={EmptyOffice} />

            <div className="absolute bottom-[48px] left-[-32px]">
              <Image alt="vitoria-city" src={Vitoria} />
            </div>
          </div>
        </div>
      </section>

      <KnowOurMachines isDark title="Conheça nossas maquininhas" />

      <Testimonials />
    </Layout>
  );
};

export default About;
