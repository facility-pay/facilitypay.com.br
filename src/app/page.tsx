"use client";

import Button from "@/components/Button";
import LoopBanner from "@/components/LoopBanner";
import Image from "next/image";
import MiniFacilityLogo from "@/assets/logos/mini-logo.png";
import { useMemo } from "react";
import Icon, { IconName } from "@/components/Icon";
import Simulator from "@/shared/sections/Simulator";
import Taxes from "@/shared/sections/Taxes";
import Testimonials from "@/shared/sections/Testimonials";
import ChooseMachine from "@/shared/sections/ChooseMachine";
import TalkingAboutUs from "@/shared/sections/TalkingAboutUs";
import FullScreenVideo from "@/pages/sections/FullScreenVideo";
import Link from "next/link";

const section1Copies = {
  title: `As menores taxas do Brasil no parcelado`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium diam urna, ac tristique leo bibendum.",
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
      "Lorem ipsum dolor sit amet elit consectetur adipiscing elit...",
    icon: "heart",
  },
  {
    key: "guarantee",
    label: "Garantia vitálicia",
    description:
      "Lorem ipsum dolor sit amet elit consectetur adipiscing elit...",
    icon: "outlined-clock",
  },
  {
    key: "no-rent",
    label: "Sem aluguel",
    description:
      "Lorem ipsum dolor sit amet elit consectetur adipiscing elit...",
    icon: "machine",
  },
  {
    key: "complain",
    label: "Nota 9.0 no Reclame Aqui",
    description:
      "Lorem ipsum dolor sit amet elit consectetur adipiscing elit...",
    icon: "star",
  },
  {
    key: "taxes",
    label: "As menores taxas do Brasil",
    description:
      "Lorem ipsum dolor sit amet elit consectetur adipiscing elit...",
    icon: "percentage",
  },
  {
    key: "tap",
    label: "TAP Facility",
    description:
      "Lorem ipsum dolor sit amet elit consectetur adipiscing elit...",
    icon: "fingers",
  },
];

export default function Home() {
  const section1ClassName = useMemo(() => {
    const defaultClass =
      "min-h-[60vh] tablet:min-h-[100vh] bg-no-repeat bg-[url('../assets/shapes/section1-shape.svg')] bg-right-top";
    const classWidth = `bg-[length:100vw] tablet:bg-[length:100vh]`;

    return [defaultClass, classWidth].join(" ");
  }, []);

  return (
    <div className="w-screen h-screen max-w-full bg-white">
      <div className="overflow-x-hidden">
        <LoopBanner />
      </div>

      <section className="bg-section1">
        <div className="flex flex-col tablet:hidden max-w-[80vw] gap-4 px-5 py-10">
          <p className="text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
            {section1Copies.title}
          </p>
          <p className="text-lg text-description">
            {section1Copies.description}
          </p>
        </div>
        <div className={section1ClassName}>
          <div className="flex tablet:items-center z-10 min-h-inherit bg-no-repeat bg-[url('../assets/shapes/section1-yellow-shape.svg')] bg-[length:125%] tablet:bg-[length:45%] bg-[top_5rem_right_3rem] tablet:bg-[top_8rem_right_15rem]">
            <div className="relative flex max-w-[50vw] tablet:pb-[10vh] desktop:pb-[10vh] tablet:pl-[15vw] desktop:pl-[15vw] tablet:pr-[10vw] desktop:pr-[10vw] flex-col items-start gap-5 justify-start bg-no-repeat bg-[url('../assets/illustrations/dots.svg')] bg-[top_3rem_left_5rem]">
              <div className="hidden tablet:flex flex-col gap-6">
                <Image alt="mini-logo" src={MiniFacilityLogo} />
                <p className="text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
                  {section1Copies.title}
                </p>
                <p className="text-lg text-description">
                  {section1Copies.description}
                </p>
              </div>
              <Button
                className="w-[80vw] absolute left-[calc(100%+3rem)] bottom-[2rem] tablet:left-0 tablet:bottom-0 tablet:relative tablet:flex"
                type="primary"
              >
                Aproveitar taxas
                <Icon iconName="chevron-right" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={`absolute top-[825}px] items-center`}>
        <div className="flex bg-blue-flag items-center justify-center w-20 h-20 rounded-full">
          <Icon iconName="flag" />
        </div>
      </div> */}
      <section className="flex flex-col items-center min-h-[100vh] bg-white py-20 rounded-[2rem] bg-no-repeat bg-home-section3 px-8 mx-8 bg-cover bg-[center_top]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 pb-14">
            <div className="border-2 self-center border-secondary rounded-full p-4">
              <Icon iconName="rocket" />
            </div>
            <span className="font-bold text-center text-3xl">
              Mais que uma máquina. São muitas vantagens:{" "}
            </span>
          </div>
          <div className="my-auto grid grid-cols-1 justify-items-center tablet:grid-cols-2 desktop:grid-cols-3 gap-10 self-center">
            {machinesAdvantages.map(({ key, icon, label, description }) => (
              <div
                key={key}
                className="flex flex-col tablet:w-[373px] desktop:w-[373px] bg-white rounded-2xl py-10 px-6 gap-4"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-[#FFBB00] bg-opacity-20 rounded-full">
                  <Icon iconName={icon} />
                </div>
                <p className="break-all font-extrabold text-black">{label}</p>
                <p className="text-black text-base">{description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col tablet:flex-row gap-4 items-center justify-between pt-0 tablet:pt-20 w-full">
            <span className="opacity-0">Conferir todas as taxas</span>
            <Button type="primary" width="100%">
              Quero a maquininha
              <Icon iconName="chevron-right" />
            </Button>
            <Link
              className="flex flex-row items-center gap-4 underline text-sm text-white"
              href="/"
            >
              Conferir todas as taxas
              <Icon iconName="chevron-right" color="white" />
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="max-w-7xl mx-auto bg-white py-20"></section> */}
      <ChooseMachine />
      <Taxes />
      <Simulator />
      <Testimonials />
      <TalkingAboutUs />
      <FullScreenVideo />
      <ChooseMachine isDark buttonCopy="Quero essa maquininha" />
    </div>
  );
}
