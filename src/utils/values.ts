type Prices = {
  [key in "previous" | "current"]: {
    mini: number;
    pro: number;
    smart: number;
  };
};

export const values: {
  [key in "profit" | "express" | "light"]: Prices;
} = {
  profit: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 129.9,
      pro: 243.9,
      smart: 452.9,
    },
  },
  express: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 129.9,
      pro: 243.9,
      smart: 452.9,
    },
  },
  light: {
    previous: {
      mini: 359.9,
      pro: 649.9,
      smart: 749.9,
    },
    current: {
      mini: 74.9,
      pro: 189.9,
      smart: 368.9,
    },
  },
};
