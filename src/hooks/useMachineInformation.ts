import MiniSVG from "@/assets/images/mini.svg";
import ProSVG from "@/assets/images/pro.svg";
import SmartSVG from "@/assets/images/smart.svg";
import {
  MiniFrontSVG,
  MiniFrontSmallSVG,
  MiniBackSVG,
  MiniDiagonalSVG,
  ProFrontSVG,
  ProFrontSmallSVG,
  ProBackSVG,
  ProDiagonalSVG,
  SmartFrontSVG,
  SmartFrontSmallSVG,
  SmartBackSVG,
  SmartDiagonalSVG,
} from "@/assets/images/machines";
import { useCallback } from "react";

type MachineKey = "mini" | "pro" | "smart";

type MachineProductKey =
  | "free-delivery"
  | "receipt-by-sms"
  | "nfc"
  | "pix-or-qrcode"
  | "chip-2g-wifi"
  | "no-rent"
  | "touchscreen"
  | "product-management";

export type MachineItem = {
  itemKey: MachineKey;
  title: string;
  description?: string;
  prevValue: number;
  currValue: number;
  featured?: boolean;
  disabledProducts?: Array<MachineProductKey>;
};

export type MachineProductItem = {
  itemKey: MachineProductKey;
  label: string;
};

const machines: Array<MachineItem> = [
  {
    itemKey: "mini",
    title: "Facility Mini",
    description:
      "Lorem ipsum tempor nibh tincidunt feugiat placerat, risus pretium maecenas elit amet nunc, euismod nisi taciti erns himenaeos sociosqu. id torquent sem fringilla dui dictum urna elementum amet, egestas. Taciti placerat pretium ipsum tellus augue ad, pharetra vitae taciti potenti nostra auctor nibh. orci faucibus orci lorem tempor justo dapibus vulputate ornare, phasellus sagittis semper eros risus donec mattis. Nunc urna conubia platea senectus:",
    prevValue: 299.9,
    currValue: 239.9,
    disabledProducts: ["touchscreen", "product-management"],
  },
  {
    itemKey: "pro",
    title: "Facility Pro",
    description:
      "Lorem ipsum tempor nibh tincidunt feugiat placerat, risus pretium maecenas elit amet nunc, euismod nisi taciti erns himenaeos sociosqu. id torquent sem fringilla dui dictum urna elementum amet, egestas. Taciti placerat pretium ipsum tellus augue ad, pharetra vitae taciti potenti nostra auctor nibh. orci faucibus orci lorem tempor justo dapibus vulputate ornare, phasellus sagittis semper eros risus donec mattis. Nunc urna conubia platea senectus:",
    prevValue: 529,
    currValue: 429.8,
    featured: true,
    disabledProducts: ["product-management"],
  },
  {
    itemKey: "smart",
    title: "Facility Smart",
    description:
      "Lorem ipsum tempor nibh tincidunt feugiat placerat, risus pretium maecenas elit amet nunc, euismod nisi taciti erns himenaeos sociosqu. id torquent sem fringilla dui dictum urna elementum amet, egestas. Taciti placerat pretium ipsum tellus augue ad, pharetra vitae taciti potenti nostra auctor nibh. orci faucibus orci lorem tempor justo dapibus vulputate ornare, phasellus sagittis semper eros risus donec mattis. Nunc urna conubia platea senectus:",
    prevValue: 629,
    currValue: 519.9,
  },
];

export const products: Array<MachineProductItem> = [
  { itemKey: "free-delivery", label: "Frete e troca grátis" },
  { itemKey: "receipt-by-sms", label: "Comprovante por SMS" },
  { itemKey: "nfc", label: "Pagamento por aproximação (NFC)" },
  { itemKey: "pix-or-qrcode", label: "Aceita PIX por QR code" },
  { itemKey: "chip-2g-wifi", label: "Chip 2G grátis + Wi-fi" },
  { itemKey: "no-rent", label: "Sem aluguel" },
  { itemKey: "touchscreen", label: "Tela touchscreen" },
  { itemKey: "product-management", label: "Gestão de produtos/estoque" },
];

export const mapSVGByMachineKey = (key: MachineKey) => {
  switch (key) {
    case "mini":
      return MiniSVG;
    case "pro":
      return ProSVG;
    case "smart":
    default:
      return SmartSVG;
  }
};

export type MachineImages = {
  ImageFront: unknown;
  ImageFrontSmall: unknown;
  ImageBack: unknown;
  ImageDiagonal: unknown;
};

const getAllSvgImagesByMachineKey = (key: MachineKey): MachineImages => {
  switch (key) {
    case "mini":
      return {
        ImageFront: MiniFrontSVG,
        ImageFrontSmall: MiniFrontSmallSVG,
        ImageBack: MiniBackSVG,
        ImageDiagonal: MiniDiagonalSVG,
      };
    case "pro":
      return {
        ImageFront: ProFrontSVG,
        ImageFrontSmall: ProFrontSmallSVG,
        ImageBack: ProBackSVG,
        ImageDiagonal: ProDiagonalSVG,
      };
    case "smart":
    default:
      return {
        ImageFront: SmartFrontSVG,
        ImageFrontSmall: SmartFrontSmallSVG,
        ImageBack: SmartBackSVG,
        ImageDiagonal: SmartDiagonalSVG,
      };
  }
};

type NormalizedMachineItem = MachineItem & {
  allImages?: MachineImages;
};

type UseMachineInformationProps = {
  machines: Array<NormalizedMachineItem>;
  getMachineInformationByKey: (key: MachineKey) => NormalizedMachineItem;
};

export const useMachineInformation = (): UseMachineInformationProps => {
  const getMachineInformationByKey = useCallback((key: MachineKey) => {
    const machine = machines.find(
      (machine) => machine.itemKey === key
    ) as MachineItem;

    return {
      ...machine,
      allImages: getAllSvgImagesByMachineKey(key),
    };
  }, []);

  return { machines, getMachineInformationByKey };
};
