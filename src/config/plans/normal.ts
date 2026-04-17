import { PlanConfig } from "@/types/planConfig";

export const normalPlanConfig: PlanConfig = {
  variant: "normal",
  planKeys: ["profit", "express", "light"],
  taxes: {
    profit: [
      1.09, 2.99, 4.34, 5.05, 5.76, 6.47, 7.17, 7.90, 8.58, 9.26, 9.93, 10.59,
      11.25, 11.90, 12.54, 13.18, 13.81, 14.43, 15.05,
    ],
    express: [
      1.39, 3.15, 5.05, 5.74, 6.42, 7.10, 7.77, 8.98, 9.64, 10.29, 10.93, 11.57,
      12.21, 12.83, 13.45, 14.07, 14.68, 15.29, 15.88,
    ],
    light: [
      1.19, 3.27, 5.75, 6.64, 7.53, 8.40, 9.26, 10.42, 11.25, 12.08, 12.91, 13.72,
      14.52, 15.31, 16.09, 16.86, 17.62, 18.38, 19.12,
    ],
    eloProfit: [
      1.35, 3.25, 4.54, 5.25, 5.96, 6.67, 7.37, 8.10, 8.78, 9.46, 10.13, 10.79,
      11.45, 12.10, 12.74, 13.38, 14.01, 14.63, 15.25,
    ],
    eloExpress: [
      1.45, 3.49, 5.20, 5.89, 6.57, 7.25, 7.92, 9.28, 9.94, 10.59, 11.23, 11.87,
      12.51, 13.13, 13.75, 14.37, 14.98, 15.59, 16.18,
    ],
    eloLight: [
      1.75, 4.00, 5.75, 6.64, 7.53, 8.40, 9.26, 10.42, 11.25, 12.08, 12.91, 13.72,
      14.52, 15.31, 16.09, 16.86, 17.62, 18.38, 19.12,
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
