import { ReactNode } from "react";
import { PlanConfigProvider } from "@/contexts/PlanConfigContext";
import { affiliatePlanConfig } from "@/config/plans";

export default function AffiliateLayout({ children }: { children: ReactNode }) {
  return (
    <PlanConfigProvider config={affiliatePlanConfig}>
      {children}
    </PlanConfigProvider>
  );
}
