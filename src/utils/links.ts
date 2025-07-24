import { MachineKey } from "@/hooks/useMachineInformation";

type Machine = "profit" | "light" | "spot";

const links: { [key in Machine]: { [key in MachineKey]: string } } = {
  profit: {
    mini: "https://facilitypay.pay.yampi.com.br/r/T18HT8G892",
    pro: "https://facilitypay.pay.yampi.com.br/r/932OMF428B",
    smart: "https://facilitypay.pay.yampi.com.br/r/6GI17VOUOU",
  },
  light: {
    mini: "https://facilitypay.pay.yampi.com.br/r/80TR8GZ1CD",
    pro: "https://facilitypay.pay.yampi.com.br/r/MD776O1P16",
    smart: "https://facilitypay.pay.yampi.com.br/r/MIYQ7CT3B3",
  },
  spot: {
    mini: "https://facilitypay.pay.yampi.com.br/r/JBW6DGPLFO",
    pro: "https://facilitypay.pay.yampi.com.br/r/1EW7T7543U",
    smart: "https://facilitypay.pay.yampi.com.br/r/C6YGLB7H3G",
  },
};

export const getLinkByMachine = (
  key: "profit" | "light" | "spot",
  type: MachineKey
) => {
  return links[key][type];
};
