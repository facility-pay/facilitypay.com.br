import { IconName } from "@/components/Icon";

type Brand =
  | "alelo"
  | "amex"
  | "elo"
  | "hiper"
  | "hipercard"
  | "mastercard"
  | "pluxee"
  | "ticket"
  | "visa"
  | "vr";

type BrandItem = {
  key: Brand;
  iconName: IconName;
};

export const brands: Array<BrandItem> = [
  {
    key: "hiper",
    iconName: "hiper",
  },
  {
    key: "ticket",
    iconName: "ticket",
  },
  {
    key: "elo",
    iconName: "elo",
  },
  {
    key: "pluxee",
    iconName: "pluxee",
  },
  {
    key: "vr",
    iconName: "vr",
  },
  {
    key: "hipercard",
    iconName: "hipercard",
  },

  {
    key: "visa",
    iconName: "visa",
  },
  {
    key: "alelo",
    iconName: "alelo",
  },
  {
    key: "mastercard",
    iconName: "mastercard",
  },
  {
    key: "amex",
    iconName: "amex",
  },
];
