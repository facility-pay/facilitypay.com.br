"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import {
  PlanConfig,
  PlanKey,
  MachineKey,
  PlanTaxes,
} from "@/types/planConfig";
import { IconName } from "@/components/Icon";

interface PlanConfigContextValue extends PlanConfig {
  // Helper functions
  getTaxByPlan: (planKey: PlanKey, installment: number) => number;
  getEloTaxByPlan: (planKey: PlanKey, installment: number) => number | undefined;
  getPriceByMachine: (planKey: PlanKey, machineKey: MachineKey) => {
    previous: number;
    current: number;
  };
  getLinkByMachine: (planKey: PlanKey, machineKey: MachineKey) => string;
  getTaxInfo: (planKey: PlanKey) => {
    debit: number;
    credit: number;
    credit12x: number;
  };
  getPlanMetadata: (planKey: PlanKey) => {
    label: string;
    icon: IconName;
  };
}

const PlanConfigContext = createContext<PlanConfigContextValue | undefined>(
  undefined
);

interface PlanConfigProviderProps {
  config: PlanConfig;
  children: ReactNode;
}

export function PlanConfigProvider({
  config,
  children,
}: PlanConfigProviderProps) {
  const value: PlanConfigContextValue = useMemo(() => {
    const getTaxByPlan = (planKey: PlanKey, installment: number): number => {
      return config.taxes[planKey][installment] ?? 0;
    };

    const getEloTaxByPlan = (
      planKey: PlanKey,
      installment: number
    ): number | undefined => {
      const eloKey = `elo${planKey.charAt(0).toUpperCase() + planKey.slice(1)}` as keyof PlanTaxes;
      const eloTaxes = config.taxes[eloKey];
      return eloTaxes?.[installment];
    };

    const getPriceByMachine = (planKey: PlanKey, machineKey: MachineKey) => {
      return {
        previous: config.values[planKey].previous[machineKey],
        current: config.values[planKey].current[machineKey],
      };
    };

    const getLinkByMachine = (
      planKey: PlanKey,
      machineKey: MachineKey
    ): string => {
      return config.links[planKey][machineKey];
    };

    const getTaxInfo = (planKey: PlanKey) => {
      const taxes = config.taxes[planKey];
      return {
        debit: taxes[0],
        credit: taxes[1],
        credit12x: taxes[12],
      };
    };

    const getPlanMetadata = (planKey: PlanKey) => {
      return config.metadata[planKey];
    };

    return {
      ...config,
      getTaxByPlan,
      getEloTaxByPlan,
      getPriceByMachine,
      getLinkByMachine,
      getTaxInfo,
      getPlanMetadata,
    };
  }, [config]);

  return (
    <PlanConfigContext.Provider value={value}>
      {children}
    </PlanConfigContext.Provider>
  );
}

export function usePlanConfig() {
  const context = useContext(PlanConfigContext);
  if (context === undefined) {
    throw new Error("usePlanConfig must be used within a PlanConfigProvider");
  }
  return context;
}
