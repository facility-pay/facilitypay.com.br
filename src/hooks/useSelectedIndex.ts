import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

type UseSelectedIndexType = {
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
};

export const useSelectedIndex = (
  emblaApi: EmblaCarouselType | undefined
): UseSelectedIndexType => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.selectedScrollSnap());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

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
