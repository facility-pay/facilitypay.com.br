"use client";

import LoopBanner from "@/components/LoopBanner";
import MachineInformation from "@/pages/Machines/sections/MachineInformation";
import Section1 from "@/pages/Machines/sections/Section1";
import Section2 from "@/pages/Machines/sections/Section2";
import SimulatorSection from "@/shared/sections/Simulator";
import TalkingAboutUs from "@/shared/sections/TalkingAboutUs";

const Maquininha = () => {
  return (
    <div className="w-screen h-screen max-w-full bg-white">
      <div className="overflow-x-hidden">
        <LoopBanner />
      </div>
      <Section1 />
      {/* <Section2 isDark title="Conheça nossas maquininhas" /> */}
      <Section2 title="Conheça nossas maquininhas" />
      <MachineInformation machineKey="mini" />
      <MachineInformation position="right" machineKey="pro" />
      <MachineInformation machineKey="smart" />
      <SimulatorSection />
      <TalkingAboutUs />
    </div>
  );
};

export default Maquininha;
