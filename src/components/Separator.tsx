type SeparatorProps = {
  height?: number;
  className?: string;
};

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={"w-full h-[1px] bg-description opacity-20 ".concat(
        className ?? ""
      )}
    />
  );
};

export default Separator;
