"use client";

import LoopBanner from "@/components/LoopBanner";
import Layout from "@/containers/Layout";
import Section1 from "@/pages/Machines/sections/Section1";
import SimulatorSection from "@/shared/sections/Simulator";
import dynamic from "next/dynamic";

const MyLazyLoadedChooseMachine = dynamic(
  () => import("@/shared/sections/ChooseMachine"),
  {
    ssr: false,
    loading: () => <></>,
  }
);

const Planos = () => {
  const renderLoopBanner = () => (
    <div className="overflow-x-hidden">
      <LoopBanner />
    </div>
  );

  return (
    <Layout renderLoopBanner={renderLoopBanner}>
      <Section1 />
      <SimulatorSection />
      <MyLazyLoadedChooseMachine />
    </Layout>
  );
};

export default Planos;
