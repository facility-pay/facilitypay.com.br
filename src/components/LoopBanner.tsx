import Icon, { IconName } from "./Icon";

type BannerItemProps = {
  icon?: IconName;
  label: string;
};

const BannerItem = ({ label, icon }: BannerItemProps) => {
  return (
    <li className="bg-loop-banner flex items-center justify-center gap-4 w-[300px] tablet:w-[500px] desktop:w-[500px] rounded-lg py-2 text-center">
      {icon && <Icon iconName={icon} />}
      <p className="text-center text-gray-dark font-bold">{label}</p>
    </li>
  );
};

const items: Array<BannerItemProps> = [
  {
    icon: "percentage",
    label: "Taxas fixas",
  },
  {
    icon: "heart",
    label: "Atendimento humanizado",
  },
  {
    icon: "smile",
    label: "Aceitamos CPF e CNPJ",
  },
];

const LoopBanner = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-max animate-[scroll_10s_linear_infinite] py-1.5">
        <ul className="flex flex-row gap-6">
          {items.concat(items).map(({ label, icon }, index) => (
            <BannerItem key={`${label}-${index}`} label={label} icon={icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoopBanner;