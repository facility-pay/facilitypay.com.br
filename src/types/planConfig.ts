import { IconName } from "@/components/Icon";

export type PlanKey = "profit" | "express" | "light";
export type MachineKey = "mini" | "pro" | "smart";

export interface MachinePrices {
  previous: {
    mini: number;
    pro: number;
    smart: number;
  };
  current: {
    mini: number;
    pro: number;
    smart: number;
  };
}

export interface PlanTaxes {
  profit: number[];
  express: number[];
  light: number[];
  eloProfit?: number[];
  eloExpress?: number[];
  eloLight?: number[];
}

export interface PlanValues {
  profit: MachinePrices;
  express: MachinePrices;
  light: MachinePrices;
}

export interface PlanLinks {
  profit: {
    mini: string;
    pro: string;
    smart: string;
  };
  express: {
    mini: string;
    pro: string;
    smart: string;
  };
  light: {
    mini: string;
    pro: string;
    smart: string;
  };
}

export interface PlanMetadata {
  express: { label: string; icon: IconName };
  profit: { label: string; icon: IconName };
  light: { label: string; icon: IconName };
}

export interface PlanConfig {
  taxes: PlanTaxes;
  values: PlanValues;
  links: PlanLinks;
  metadata: PlanMetadata;
  variant: "normal" | "affiliate";
}
