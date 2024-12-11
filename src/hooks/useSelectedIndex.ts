import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

type UseSelectedIndexType = {
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
};

export const useSelectedIndex = (
  emblaApi: EmblaCarouselType | undefined,
  defaultIndex?: number,
  setDefaultIndex?: (index: number) => void
): UseSelectedIndexType => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 1);

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      setDefaultIndex?.(index);
    },
    [setDefaultIndex]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    selectedIndex,
    setSelectedIndex,
  };
};
