type InstallmentProps = {
  label?: string;
  value: number;
  onChangeValue: (value: number) => void;
};

const Installment = ({ label, value, onChangeValue }: InstallmentProps) => {
  return (
    <div className="grow min-w-full tablet:w-[270px] desktop:w-[270px] flex flex-col gap-2">
      {label && <label className="px-6 text-sm text-gray-dark">{label}</label>}
      <div className="flex flex-row max-h-[60px] items-center border border-gray-dark rounded-full py-4 px-8">
        <select
          value={value}
          onChange={(event) => onChangeValue(Number(event.target.value))}
          className="w-full text-base font-bold text-black outline-0 bg-transparent"
        >
          {[...new Array(18)].map((_, index) => (
            <option onChange={() => {}} key={index} value={index}>{`${
              index + 1
            } parcela${index > 1 ? "s" : ""}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Installment;
