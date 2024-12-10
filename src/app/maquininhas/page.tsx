"use client";

import LoopBanner from "@/components/LoopBanner";
import Layout from "@/containers/Layout";
import { useSelectedIndex } from "@/hooks/useSelectedIndex";
import MachineInformation from "@/pages/Machines/sections/MachineInformation";
import Section1 from "@/pages/Machines/sections/Section1";
import KnowOurMachines from "@/shared/sections/KnowOurMachines";
import Taxes from "@/shared/sections/Taxes";
import Testimonials from "@/shared/sections/Testimonials";
import useEmblaCarousel from "embla-carousel-react";

const Maquininhas = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: false,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
  });
  const { selectedIndex, setSelectedIndex } = useSelectedIndex(emblaApi);

  const renderLoopBanner = () => (
    <div className="overflow-x-hidden">
      <LoopBanner />
    </div>
  );

  return (
    <Layout renderLoopBanner={renderLoopBanner}>
      <Section1 />
      <KnowOurMachines title="Conheça nossas maquininhas" />
      <MachineInformation
        machineKey="mini"
        shouldRenderDots
        emblaApi={emblaApi}
        emblaRef={emblaRef}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MachineInformation
        position="right"
        machineKey="pro"
        shouldRenderQuotesOnTheLeft
        emblaApi={emblaApi}
        emblaRef={emblaRef}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MachineInformation
        machineKey="smart"
        emblaApi={emblaApi}
        emblaRef={emblaRef}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <div className="pt-8 desktop:pt-20">
        <Taxes />
      </div>
      <Testimonials />
    </Layout>
  );
};

export default Maquininhas;
