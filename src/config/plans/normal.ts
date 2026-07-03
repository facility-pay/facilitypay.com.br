import { PlanConfig } from "@/types/planConfig";

export const normalPlanConfig: PlanConfig = {
  variant: "normal",
  planKeys: ["profit", "express", "light"],
  taxes: {
    profit: [
      1.15, 3.05, 4.42, 5.13, 5.85, 6.55, 7.26, 8.00, 8.69, 9.37, 10.03, 10.70,
      11.37, 12.02, 12.66, 13.31, 13.94, 14.57, 15.19,
    ],
    express: [
      1.45, 3.21, 5.11, 5.80, 6.48, 7.16, 7.83, 9.04, 9.70, 10.35, 10.99, 11.63,
      12.27, 12.89, 13.51, 14.13, 14.74, 15.35, 15.94,
    ],
    light: [
      1.19, 3.27, 5.76, 6.66, 7.55, 8.43, 9.30, 10.45, 11.30, 12.13, 12.96, 13.77,
      14.58, 15.36, 16.15, 16.93, 17.70, 18.45, 19.20,
    ],
    eloProfit: [
      1.41, 3.31, 4.62, 5.33, 6.05, 6.75, 7.46, 8.20, 8.89, 9.57, 10.23, 10.90,
      11.57, 12.22, 12.86, 13.51, 14.14, 14.77, 15.39,
    ],
    eloExpress: [
      1.51, 3.50, 5.26, 5.95, 6.63, 7.31, 7.98, 9.34, 10.00, 10.65, 11.29, 11.93,
      12.57, 13.19, 13.81, 14.43, 15.04, 15.65, 16.24,
    ],
    eloLight: [
      1.49, 4.00, 5.76, 6.66, 7.55, 8.43, 9.30, 10.45, 11.30, 12.13, 12.96, 13.77,
      14.58, 15.36, 16.15, 16.93, 17.70, 18.45, 19.20,
    ],
  },
  values: {
    profit: {
      previous: {
        mini: 359.9,
        pro: 649.9,
        smart: 749.9,
      },
      current: {
        mini: 194.9,
        pro: 299.9,
        smart: 469.9,
      },
    },
    express: {
      previous: {
        mini: 359.9,
        pro: 649.9,
        smart: 749.9,
      },
      current: {
        mini: 104.9,
        pro: 198.9,
        smart: 319.9,
      },
    },
    light: {
      previous: {
        mini: 359.9,
        pro: 649.9,
        smart: 749.9,
      },
      current: {
        mini: 64.9,
        pro: 119.9,
        smart: 209.9,
      },
    },
  },
  links: {
    profit: {
      mini: "https://seguro.facilitypay.com.br/r/T18HT8G892",
      pro: "https://seguro.facilitypay.com.br/r/932OMF428B",
      smart: "https://seguro.facilitypay.com.br/r/6GI17VOUOU",
    },
    light: {
      mini: "https://seguro.facilitypay.com.br/r/80TR8GZ1CD",
      pro: "https://seguro.facilitypay.com.br/r/MD776O1P16",
      smart: "https://seguro.facilitypay.com.br/r/MIYQ7CT3B3",
    },
    express: {
      mini: "https://seguro.facilitypay.com.br/r/JBW6DGPLFO",
      pro: "https://seguro.facilitypay.com.br/r/1EW7T7543U",
      smart: "https://seguro.facilitypay.com.br/r/C6YGLB7H3G",
    },
  },
  metadata: {
    express: { label: "na hora", icon: "one-day" },
    profit: { label: "um dia depois", icon: "one-day" },
    light: { label: "um dia depois", icon: "one-day" },
  },
};
