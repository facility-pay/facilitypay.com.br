import { useEffect, useState } from "react";

type UseWindowSizeReturnType = {
  width?: number;
  height?: number;
};

export const useWindowSize = (): UseWindowSizeReturnType => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeReturnType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const onResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
};
