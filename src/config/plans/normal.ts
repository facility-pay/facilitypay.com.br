import { PlanConfig } from "@/types/planConfig";

export const normalPlanConfig: PlanConfig = {
  variant: "normal",
  planKeys: ["profit", "express", "light"],
  taxes: {
    profit: [
      1.09, 2.99, 4.46, 5.21, 5.96, 6.69, 7.43, 8.2, 8.91, 9.62, 10.32, 11.01,
      11.7, 12.38, 13.05, 13.72, 14.37, 15.03, 15.67,
    ],
    express: [
      1.39, 3.15, 5.16, 5.87, 6.59, 7.29, 8.0, 9.24, 9.93, 10.61, 11.27, 11.94,
      12.61, 13.26, 13.9, 14.55, 15.18, 15.81, 16.43,
    ],
    light: [
      1.19, 3.27, 5.89, 6.84, 7.76, 8.68, 9.58, 10.78, 11.65, 12.52, 13.38,
      14.23, 15.06, 15.89, 16.7, 17.51, 18.3, 19.09, 19.86,
    ],
    eloProfit: [
      1.35, 3.25, 4.66, 5.41, 6.16, 6.89, 7.63, 8.4, 9.11, 9.82, 10.52, 11.21,
      11.9, 12.58, 13.25, 13.92, 14.57, 15.23, 15.87,
    ],
    eloExpress: [
      1.45, 3.44, 5.31, 6.02, 6.74, 7.44, 8.15, 9.54, 10.23, 10.91, 11.57,
      12.24, 12.91, 13.56, 14.2, 14.85, 15.48, 16.11, 16.73,
    ],
    eloLight: [
      1.75, 4.0, 5.89, 6.84, 7.76, 8.68, 9.58, 10.78, 11.65, 12.52, 13.38,
      14.23, 15.06, 15.89, 16.7, 17.51, 18.3, 19.09, 19.86,
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
        mini: 199.9,
        pro: 319.9,
        smart: 495.9,
      },
    },
    express: {
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
    light: {
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
