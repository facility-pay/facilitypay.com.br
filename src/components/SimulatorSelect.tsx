type SimulatorSelectItem = {
  key: "d1" | "d0";
  label: string;
};

type SimulatorSelectProps = {
  selectedItem: SimulatorSelectItem["key"];
  setSelectedItem: (selectedItem: SimulatorSelectItem["key"]) => void;
};

const items: Array<SimulatorSelectItem> = [
  {
    key: "d1",
    label: "Taxas D1",
  },
  {
    key: "d0",
    label: "Taxas D0",
  },
];

const SimulatorSelect = ({
  selectedItem,
  setSelectedItem,
}: SimulatorSelectProps) => {
  return (
    <div className="flex flex-row self-center w-full w-[270px] desktop:w-[360px] justify-center items-center bg-white rounded-full">
      {items.map(({ label, key }) => {
        const isSelected = selectedItem === key;
        const defaultClassName =
          "w-56 flex my-2 mx-2 py-4 rounded-full flex-row justify-center items-center gap-4";
        const selectedClassName = "bg-primary-dark";

        const defaultPClassName = "text-gray-dark text-sm font-semibold";
        const selectedPClassName = "text-white";

        return (
          <button
            className={
              isSelected
                ? [defaultClassName, selectedClassName].join(" ")
                : defaultClassName
            }
            onClick={() => setSelectedItem(key)}
            key={label}
          >
            <p
              className={
                isSelected
                  ? [defaultPClassName, selectedPClassName].join(" ")
                  : defaultPClassName
              }
            >
              {label}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default SimulatorSelect;
