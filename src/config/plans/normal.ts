import { PlanConfig } from "@/types/planConfig";

export const normalPlanConfig: PlanConfig = {
  variant: "normal",
  planKeys: ["profit", "express", "light"],
  taxes: {
    profit: [
      1.09, 2.99, 4.33, 5.03, 5.75, 6.44, 7.13, 7.87, 8.54, 9.21, 9.88, 10.54,
      11.19, 11.83, 12.47, 13.11, 13.74, 14.36, 14.97,
    ],
    express: [
      1.39, 3.15, 5.03, 5.70, 6.38, 7.05, 7.70, 8.91, 9.56, 10.20, 10.84, 11.47,
      12.09, 12.71, 13.33, 13.93, 14.53, 15.13, 15.73,
    ],
    light: [
      1.19, 3.27, 5.72, 6.61, 7.48, 8.35, 9.20, 10.35, 11.18, 12.00, 12.81, 13.61,
      14.41, 15.19, 15.97, 16.73, 17.49, 18.24, 18.98,
    ],
    eloProfit: [
      1.35, 3.25, 4.53, 5.23, 5.95, 6.64, 7.33, 8.07, 8.74, 9.41, 10.08, 10.74,
      11.39, 12.03, 12.67, 13.31, 13.94, 14.56, 15.17,
    ],
    eloExpress: [
      1.45, 3.49, 5.18, 5.85, 6.53, 7.20, 7.85, 9.21, 9.86, 10.50, 11.14, 11.77,
      12.39, 13.01, 13.63, 14.23, 14.83, 15.43, 16.03,
    ],
    eloLight: [
      1.75, 4.00, 5.72, 6.61, 7.48, 8.35, 9.20, 10.35, 11.18, 12.00, 12.81, 13.61,
      14.41, 15.19, 15.97, 16.73, 17.49, 18.24, 18.98,
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
