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

const About = () => {
  return (
    <Layout>
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
                A FacilityPay nasceu com um propósito bem definido: oferecer
                acesso a taxas justas e acessíveis para negócios de todos os
                portes, sejam eles pequenos, médios ou grandes.
              </span>
              <span className="text-description">
                Identificamos uma grande lacuna no mercado de pagamentos: a
                falta de transparência. Muitas empresas oferecem taxas que
                dependem de metas de faturamento ou têm validade limitada, mas
                escondem essas condições nas “letrinhas miúdas”. Na FacilityPay,
                fazemos diferente: todas as nossas condições são claras e sem
                surpresas, desde o momento da compra da sua maquininha. Nosso
                compromisso é garantir que seu negócio tenha sempre as melhores
                taxas, sem complicação.
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
            Conheça como chegamos até aqui
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
              A FacilityPay foi fundada em <strong>Vitória, ES</strong>, em
              2016, com o objetivo de trazer uma nova opção em meios de
              pagamento para a região. A adesão dos capixabas foi rápida, e o
              crescimento da empresa foi exponencial.
            </span>
            <span className="text-description">
              Em 2023, surgiu a oportunidade de firmar uma parceria com a
              Pagseguro, uma das maiores empresas de pagamentos do Brasil. A
              partir dessa colaboração, ampliamos nossas operações para todo o
              país, oferecendo as menores taxas no parcelado do mercado, sempre
              com transparência e responsabilidade.
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
