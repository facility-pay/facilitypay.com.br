const DEFAULT_WIDTH = 1920;

export const scaleWidth = (scalableWidth: number, innerWidth: number) => {
  return (scalableWidth * innerWidth) / DEFAULT_WIDTH;
};
