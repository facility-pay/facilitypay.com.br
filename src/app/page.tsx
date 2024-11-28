"use client";

import Button from "@/components/Button";
import LoopBanner from "@/components/LoopBanner";
import Image from "next/image";
import MiniFacilityLogo from "@/assets/logos/mini-logo.png";
import { useMemo } from "react";
import Icon, { IconName } from "@/components/Icon";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "@/containers/Layout";

const section1Copies = {
  title: `As menores taxas do Brasil no parcelado`,
  description:
    "Tenha acesso as menores taxas no parcelado do Brasil. Taxas fixas, sem prazos e nem limite de faturamento. Sem pegadinhas e letras escondidas.",
  image: "9.28% no parcelado em 12x",
};

type MachineAdvantageItem = {
  key: string;
  label: string;
  description: string;
  icon: IconName;
};

const machinesAdvantages: Array<MachineAdvantageItem> = [
  {
    key: "service",
    label: "Atendimento humanizado",
    description:
      "Chega de esperar falando com robô. Na FacilityPay te entregamos um atendimento 100% humanizado.",
    icon: "heart",
  },
  {
    key: "guarantee",
    label: "Garantia vitálicia",
    description:
      "Sua máquina deu problema? Não se preocupe, fazemos a troca para você.",
    icon: "outlined-clock",
  },
  {
    key: "no-rent",
    label: "Sem aluguel",
    description:
      "Pagar aluguel em máquina é coisa do passado. Invista uma vez e lucre sempre.",
    icon: "machine",
  },
  {
    key: "complain",
    label: "Nota 8.4 no Reclame Aqui",
    description:
      "A FacilityPay é comprometida em resolver os problemas dos nossos clientes. De forma ágil e eficiente.",
    icon: "star",
  },
  {
    key: "taxes",
    label: "As menores taxas do Brasil",
    description:
      "Tenha acesso as menores taxas do Brasil e invista no que realmente importa: o seu negócio.",
    icon: "percentage",
  },
];

const MyLazyLoadedTaxes = dynamic(() => import("@/shared/sections/Taxes"), {
  ssr: false,
  loading: () => <></>,
});
const MyLazyLoadedSimulator = dynamic(
  () => import("@/shared/sections/Simulator"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const MyLazyLoadedFullScreenVideo = dynamic(
  () => import("@/pages/sections/FullScreenVideo"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const MyLazyLoadedTestimonials = dynamic(
  () => import("@/shared/sections/Testimonials"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const MyLazyLoadedChooseMachine = dynamic(
  () => import("@/shared/sections/ChooseMachine"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const MyLazyLoadedTalkingAboutUs = dynamic(
  () => import("@/shared/sections/TalkingAboutUs"),
  {
    ssr: false,
    loading: () => <></>,
  }
);

export default function Home() {
  const section1ClassName = useMemo(() => {
    const defaultClass =
      "min-h-[60vh] min-w-full tablet:min-h-[100vh] bg-no-repeat bg-[url('../assets/shapes/section1-shape.svg')] bg-right-top";
    const classWidth = `bg-[length:100vw] tablet:bg-[length:100vh]`;

    return [defaultClass, classWidth].join(" ");
  }, []);

  const renderLoopBanner = () => (
    <div className="overflow-x-hidden">
      <LoopBanner />
    </div>
  );

  return (
    <Layout renderLoopBanner={renderLoopBanner}>
      <section className="bg-section1 pb-[9rem] tablet:pb-0">
        <div className="flex flex-col tablet:hidden max-w-[70vw] desktop:max-w-[80vw] gap-4 px-5 py-10">
          <p className="text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-dark-blue-heading">
            {section1Copies.title}
          </p>
          <p className="text-sm desktop:text-lg text-description">
            {section1Copies.description}
          </p>
        </div>
        <div className={section1ClassName}>
          <div className="flex tablet:items-center z-10 min-h-inherit bg-no-repeat bg-[url('../assets/shapes/section1-yellow-shape.svg')] bg-[length:130%] tablet:bg-[length:45%] bg-[top_5rem_right_2rem] tablet:bg-[top_8rem_right_15rem]">
            <div className="relative flex max-w-[50vw] tablet:pb-[10vh] desktop:pb-[10vh] tablet:pl-[15vw] desktop:pl-[15vw] tablet:pr-[10vw] desktop:pr-[10vw] flex-col items-start gap-5 justify-start bg-no-repeat bg-[url('../assets/illustrations/dots.svg')] bg-[top_3rem_left_5rem]">
              <div className="hidden tablet:flex flex-col gap-6">
                <Image alt="mini-logo" src={MiniFacilityLogo} />
                <p className="text-[2rem] desktop:text-[2.75rem] leading-[2.75rem] font-bold text-dark-blue-heading">
                  {section1Copies.title}
                </p>
                <p className="text-sm desktop:text-lg text-description">
                  {section1Copies.description}
                </p>
              </div>
              <Button
                className="w-[100vw] absolute left-[2rem] bottom-[-4.5rem] tablet:left-0 tablet:bottom-0 tablet:relative tablet:flex"
                type="primary"
              >
                Aproveitar taxas
                <Icon
                  iconName="chevron-right"
                  className="text-black group-hover:text-secondary"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <MyLazyLoadedTaxes />
      <section className="flex flex-col justify-center items-center min-h-[100vh] bg-white py-20 rounded-[2rem] bg-no-repeat bg-home-section3 px-8 mx-8 bg-cover bg-[center_top]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 pb-14">
            <div className="flex justify-center items-center border-2 self-center border-secondary rounded-full w-[56px] h-[56px] tablet:w-[80px] tablet:h-[80px]">
              <Icon iconName="rocket" />
            </div>
            <span className="font-bold text-center text-2xl tablet:text-3xl desktop:text-4xl">
              Mais que uma máquina. São muitas vantagens:{" "}
            </span>
          </div>
          <div className="my-auto grid grid-cols-1 justify-items-center tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
            {machinesAdvantages.map(({ key, icon, label, description }) => (
              <div
                key={key}
                className="flex flex-col w-full tablet:w-[373px] desktop:w-[373px] bg-white rounded-2xl py-10 px-6 gap-4"
              >
                <div className="flex desktop:flex-col flex-row items-center desktop:items-start gap-4">
                  <div className="flex justify-center items-center w-16 h-16 bg-[#FFBB00] bg-opacity-20 rounded-full">
                    <Icon iconName={icon} />
                  </div>
                  <p className="break-words text-base desktop:text-xl font-extrabold text-black">
                    {label}
                  </p>
                </div>
                <p className="text-black text-sm desktop:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col tablet:flex-row gap-4 items-center justify-between pt-0 tablet:pt-20 w-full">
            <span className="opacity-0">Saiba mais</span>
            <Button type="primary" width="100%">
              Adquirir maquininha
              <Icon
                iconName="chevron-right"
                className="text-black group-hover:text-secondary"
              />
            </Button>
            <Link
              className="flex flex-row items-center gap-4 underline text-sm text-white"
              href="/"
            >
              Saiba mais
              <Icon iconName="chevron-right" color="white" />
            </Link>
          </div>
        </div>
      </section>
      <MyLazyLoadedSimulator />
      {/* <MyLazyLoadedFullScreenVideo /> */}
      <MyLazyLoadedTestimonials hasBackground={false} />
      <MyLazyLoadedChooseMachine hasBackground />
      <MyLazyLoadedTalkingAboutUs />
    </Layout>
  );
}
