import {
  SmartFrontPNG,
  SmartFrontSmallPNG,
  SmartDiagonalPNG,
  MobileSmartDiagonalPNG,
  MobileSmartFrontPNG,
  MobileSmartFrontSmallPNG,
  MiniFrontPNG,
  MiniFrontSmallPNG,
  MiniDiagonalPNG,
  MobileMiniFrontPNG,
  MobileMiniFrontSmallPNG,
  MobileMiniDiagonalPNG,
  ProFrontPNG,
  ProFrontSmallPNG,
  ProDiagonalPNG,
  MobileProFrontPNG,
  MobileProFrontSmallPNG,
  MobileProDiagonalPNG,
} from "@/assets/images/machines";
import { useCallback } from "react";

export type MachineKey = "mini" | "pro" | "smart";

type MachineProductKey =
  | "free-delivery"
  | "receipt-by-sms"
  | "printed-receipt"
  | "nfc"
  | "pix-or-qrcode"
  | "chip-3g-wifi"
  | "chip-4g-wifi"
  | "no-rent"
  | "touchscreen"
  | "product-management";

export type MachineItem = {
  itemKey: MachineKey;
  title: string;
  subtitle: string;
  description?: string;
  strong?: string;
  prevValue: number;
  currValue: number;
  featured?: boolean;
  disabledProducts?: Array<MachineProductKey>;
  nonExistingProducts?: Array<MachineProductKey>;
};

export type MachineProductItem = {
  itemKey: MachineProductKey;
  label: string;
};

const machines: Array<MachineItem> = [
  {
    itemKey: "mini",
    title: "Facility Mini",
    subtitle: "Uma minizinha poderosa",
    description:
      "Pratica, portátil e econômica. São apenas alguns dos adjetivos para descrever essa maquininha. Com um visual compacto, ela é indicada, principalmente para delivery.",
    strong: "Não precisa de celular para vender.",
    prevValue: 299.9,
    currValue: 239.9,
    disabledProducts: ["touchscreen", "product-management", "chip-4g-wifi"],
    nonExistingProducts: ["printed-receipt"],
  },
  {
    itemKey: "pro",
    title: "Facility Pro",
    subtitle: "Melhor custo benefício",
    description:
      "A Facility Pro é a maquininha de cartão que está sempre com você! Versátil, resistente e ao mesmo tempo supermoderna, ela permite que você receba suas vendas no débito, crédito ou voucher com rapidez e total agilidade. E o melhor: com garantia vitalícia, ela é a parceira ideal para o sucesso do seu negócio.",
    prevValue: 529,
    currValue: 429.8,
    featured: true,
    disabledProducts: ["product-management"],
    nonExistingProducts: ["chip-3g-wifi", "receipt-by-sms"],
  },
  {
    itemKey: "smart",
    title: "Facility Smart",
    subtitle: "Mais completa e tenológica",
    description:
      "A Facility Smart é a maquininha ideal para quem busca modernidade e eficiência. Com sistema Android, tela touch intuitiva e conexão via Wi-Fi ou chip, ela garante praticidade em qualquer tipo de venda.\n\nAlém de versátil, permite emitir comprovantes digitais e acompanhar vendas em tempo real, tudo em um único dispositivo pensado para facilitar seu dia a dia.",
    prevValue: 629,
    currValue: 519.9,
    nonExistingProducts: ["chip-3g-wifi", "receipt-by-sms"],
  },
];

export const products: Array<MachineProductItem> = [
  { itemKey: "free-delivery", label: "Frete e troca grátis" },
  { itemKey: "receipt-by-sms", label: "Comprovante por SMS" },
  { itemKey: "printed-receipt", label: "Comprovante impresso" },
  { itemKey: "nfc", label: "Pagamento por aproximação (NFC)" },
  { itemKey: "pix-or-qrcode", label: "Aceita PIX por QR code" },
  { itemKey: "chip-3g-wifi", label: "Chip 3G grátis + Wi-fi" },
  { itemKey: "chip-4g-wifi", label: "Chip 4G grátis + Wi-fi" },
  { itemKey: "no-rent", label: "Sem aluguel" },
  { itemKey: "touchscreen", label: "Tela touchscreen" },
  { itemKey: "product-management", label: "Gestão de produtos/estoque" },
];

export const mapSVGByMachineKey = (key: MachineKey) => {
  switch (key) {
    case "mini":
      return MobileMiniFrontPNG;
    case "pro":
      return MobileProFrontPNG;
    case "smart":
    default:
      return MobileSmartFrontPNG;
  }
};

export type MachineImages = {
  ImageFront: unknown;
  ImageFrontSmall: unknown;
  ImageDiagonal: unknown;
  MobileImageFront: unknown;
  MobileImageFrontSmall: unknown;
  MobileImageDiagonal: unknown;
};

const getAllSvgImagesByMachineKey = (key: MachineKey): MachineImages => {
  switch (key) {
    case "mini":
      return {
        ImageFront: MiniFrontPNG,
        ImageFrontSmall: MiniFrontSmallPNG,
        ImageDiagonal: MiniDiagonalPNG,
        MobileImageFront: MobileMiniFrontPNG,
        MobileImageFrontSmall: MobileMiniFrontSmallPNG,
        MobileImageDiagonal: MobileMiniDiagonalPNG,
      };
    case "pro":
      return {
        ImageFront: ProFrontPNG,
        ImageFrontSmall: ProFrontSmallPNG,
        ImageDiagonal: ProDiagonalPNG,
        MobileImageFront: MobileProFrontPNG,
        MobileImageFrontSmall: MobileProFrontSmallPNG,
        MobileImageDiagonal: MobileProDiagonalPNG,
      };
    case "smart":
    default:
      return {
        ImageFront: SmartFrontPNG,
        ImageFrontSmall: SmartFrontSmallPNG,
        ImageDiagonal: SmartDiagonalPNG,
        MobileImageFront: MobileSmartFrontPNG,
        MobileImageFrontSmall: MobileSmartFrontSmallPNG,
        MobileImageDiagonal: MobileSmartDiagonalPNG,
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
