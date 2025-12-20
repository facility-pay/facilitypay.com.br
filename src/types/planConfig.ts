import { IconName } from "@/components/Icon";

// Normal plan keys
export type NormalPlanKey = "profit" | "express" | "light";
// Affiliate plan keys
export type AffiliatePlanKey = "placeholder_1" | "placeholder_2" | "placeholder_3";
// Union of all possible plan keys
export type PlanKey = NormalPlanKey | AffiliatePlanKey;
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

// Flexible structure to support different plan keys
export type PlanTaxes = Record<string, number[]>;

export type PlanValues = Record<string, MachinePrices>;

export type PlanLinks = Record<string, {
  mini: string;
  pro: string;
  smart: string;
}>;

export type PlanMetadata = Record<string, { label: string; icon: IconName }>;

export interface PlanConfig {
  taxes: PlanTaxes;
  values: PlanValues;
  links: PlanLinks;
  metadata: PlanMetadata;
  variant: "normal" | "affiliate";
  // Store the actual plan keys used in this config
  planKeys: PlanKey[];
}
