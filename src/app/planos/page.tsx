"use client";

import Icon from "@/components/Icon";
import LoopBanner from "@/components/LoopBanner";
import Layout from "@/containers/Layout";
import TaxesTable from "@/pages/Plans/TaxesTable";
import dynamic from "next/dynamic";
import Link from "next/link";

const MyLazyLoadedChooseMachine = dynamic(
  () => import("@/shared/sections/ChooseMachine"),
  {
    ssr: false,
    loading: () => <></>,
  }
);

const MyLazyLoadedSimulator = dynamic(
  () => import("@/shared/sections/Simulator"),
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
      <TaxesTable />
      <MyLazyLoadedSimulator />
      <MyLazyLoadedChooseMachine />

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

export default Planos;
