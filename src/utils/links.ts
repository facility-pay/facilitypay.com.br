import { MachineKey } from "@/hooks/useMachineInformation";

type Machine = "profit" | "light" | "maxx";

const links: { [key in Machine]: { [key in MachineKey]: string } } = {
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
  maxx: {
    mini: "https://seguro.facilitypay.com.br/r/JBW6DGPLFO",
    pro: "https://seguro.facilitypay.com.br/r/1EW7T7543U",
    smart: "https://seguro.facilitypay.com.br/r/C6YGLB7H3G",
  },
};

export const getLinkByMachine = (
  key: "profit" | "light" | "maxx",
  type: MachineKey
) => {
  return links[key][type];
};
