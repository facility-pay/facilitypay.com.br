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
      mini: 247.9,
      pro: 447.9,
      smart: 547.9,
    },
  },
  spot: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 247.9,
      pro: 447.9,
      smart: 547.9,
    },
  },
  light: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 138.9,
      pro: 324.9,
      smart: 409.9,
    },
  },
};
