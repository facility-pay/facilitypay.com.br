type Prices = {
  [key in "previous" | "current"]: {
    mini: number;
    pro: number;
    smart: number;
  };
};

export const values: {
  [key in "profit" | "spot" | "light"]: Prices;
} = {
  profit: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 99.9,
      pro: 229.9,
      smart: 429.9,
    },
  },
  spot: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 99.9,
      pro: 229.9,
      smart: 429.9,
    },
  },
  light: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 67.9,
      pro: 179.9,
      smart: 348.9,
    },
  },
};
