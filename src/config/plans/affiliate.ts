import { PlanConfig } from "@/types/planConfig";

// TODO: Update all tax rates, pricing, and links with actual affiliate values
export const affiliatePlanConfig: PlanConfig = {
  variant: "affiliate",
  planKeys: ["placeholder_1", "placeholder_2", "placeholder_3"],
  taxes: {
    // TODO: Replace with actual affiliate tax rates
    placeholder_1: [
      1.09, 2.99, 4.46, 5.21, 5.96, 6.69, 7.43, 8.2, 8.91, 9.62, 10.32, 11.01,
      11.7, 12.38, 13.05, 13.72, 14.37, 15.03, 15.67,
    ],
    placeholder_2: [
      1.39, 3.15, 5.16, 5.87, 6.59, 7.29, 8.0, 9.24, 9.93, 10.61, 11.27, 11.94,
      12.61, 13.26, 13.9, 14.55, 15.18, 15.81, 16.43,
    ],
    placeholder_3: [
      1.19, 3.27, 5.89, 6.84, 7.76, 8.68, 9.58, 10.78, 11.65, 12.52, 13.38,
      14.23, 15.06, 15.89, 16.7, 17.51, 18.3, 19.09, 19.86,
    ],
    // TODO: Add Elo tax rates if needed for affiliate
    eloPlaceholder_1: [
      1.35, 3.25, 4.66, 5.41, 6.16, 6.89, 7.63, 8.4, 9.11, 9.82, 10.52, 11.21,
      11.9, 12.58, 13.25, 13.92, 14.57, 15.23, 15.87,
    ],
    eloPlaceholder_2: [
      1.45, 3.44, 5.31, 6.02, 6.74, 7.44, 8.15, 9.54, 10.23, 10.91, 11.57,
      12.24, 12.91, 13.56, 14.2, 14.85, 15.48, 16.11, 16.73,
    ],
    eloPlaceholder_3: [
      1.75, 4.0, 5.89, 6.84, 7.76, 8.68, 9.58, 10.78, 11.65, 12.52, 13.38,
      14.23, 15.06, 15.89, 16.7, 17.51, 18.3, 19.09, 19.86,
    ],
  },
  values: {
    // TODO: Replace with actual affiliate pricing
    placeholder_1: {
      previous: {
        mini: 359.9,
        pro: 649.9,
        smart: 749.9,
      },
      current: {
        mini: 199.9,
        pro: 319.9,
        smart: 495.9,
      },
    },
    placeholder_2: {
      previous: {
        mini: 359.9,
        pro: 649.9,
        smart: 749.9,
      },
      current: {
        mini: 199.9,
        pro: 319.9,
        smart: 495.9,
      },
    },
    placeholder_3: {
      previous: {
        mini: 359.9,
        pro: 649.9,
        smart: 749.9,
      },
      current: {
        mini: 74.9,
        pro: 189.9,
        smart: 368.9,
      },
    },
  },
  links: {
    // TODO: Replace with actual affiliate checkout URLs
    placeholder_1: {
      mini: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH1_MINI",
      pro: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH1_PRO",
      smart: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH1_SMART",
    },
    placeholder_2: {
      mini: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH2_MINI",
      pro: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH2_PRO",
      smart: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH2_SMART",
    },
    placeholder_3: {
      mini: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH3_MINI",
      pro: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH3_PRO",
      smart: "https://seguro.facilitypay.com.br/r/AFFILIATE_PH3_SMART",
    },
  },
  metadata: {
    placeholder_1: { label: "Plano Afiliado 1", icon: "one-day" },
    placeholder_2: { label: "Plano Afiliado 2", icon: "one-day" },
    placeholder_3: { label: "Plano Afiliado 3", icon: "one-day" },
  },
};
