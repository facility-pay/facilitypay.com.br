"use client";

import Layout from "@/containers/Layout";
import MachineInformation from "@/pages/Machines/sections/MachineInformation";
import Section1 from "@/pages/Machines/sections/Section1";
import KnowOurMachines from "@/shared/sections/KnowOurMachines";
import Taxes from "@/shared/sections/Taxes";
import Testimonials from "@/shared/sections/Testimonials";

const Maquininhas = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Maquininhas;
