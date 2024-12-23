"use client";

import Icon from "@/components/Icon";
import LoopBanner from "@/components/LoopBanner";
import Layout from "@/containers/Layout";
import MachineInformation from "@/pages/Machines/sections/MachineInformation";
import Section1 from "@/pages/Machines/sections/Section1";
import KnowOurMachines from "@/shared/sections/KnowOurMachines";
import Taxes from "@/shared/sections/Taxes";
import Testimonials from "@/shared/sections/Testimonials";
import Link from "next/link";

const Maquininhas = () => {
  const renderLoopBanner = () => (
    <div className="overflow-x-hidden">
      <LoopBanner />
    </div>
  );

  return (
    <Layout renderLoopBanner={renderLoopBanner}>
      <Section1 />
      <KnowOurMachines title="Conheça nossas maquininhas" />
      <MachineInformation machineKey="mini" shouldRenderDots />
      <MachineInformation
        position="right"
        machineKey="pro"
        shouldRenderQuotesOnTheLeft
      />
      <MachineInformation machineKey="smart" />
      <div className="pt-8 desktop:pt-20">
        <Taxes />
      </div>
      <Testimonials />

      <div className="fixed bottom-[2rem] right-[2rem] z-50">
        <Link
          href="http://wa.me/5527998126432"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-4 bg-whatsapp !rounded-full hover:bg-whatsapp p-4"
        >
          <Icon iconName="whatsapp" />
          <span className="hidden desktop:block font-semibold text-white">
            Fale conosco
          </span>
        </Link>
      </div>
    </Layout>
  );
};

export default Maquininhas;
