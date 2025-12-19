import { ReactNode } from "react";
import { PlanConfigProvider } from "@/contexts/PlanConfigContext";
import { normalPlanConfig } from "@/config/plans";

export default function NormalLayout({ children }: { children: ReactNode }) {
  return (
    <PlanConfigProvider config={normalPlanConfig}>
      {children}
    </PlanConfigProvider>
  );
}
