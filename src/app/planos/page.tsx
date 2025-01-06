"use client";

import Layout from "@/containers/Layout";
import TaxesTable from "@/pages/Plans/TaxesTable";
import dynamic from "next/dynamic";

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
  return (
    <Layout>
      <TaxesTable />
      <MyLazyLoadedSimulator />
      <MyLazyLoadedChooseMachine />
    </Layout>
  );
};

export default Planos;
