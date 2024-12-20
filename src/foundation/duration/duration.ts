export const time = {
  time1: { value: "0.1s", variable: "--time-1" },
  time2: { value: "0.2s", variable: "--time-2" },
  time3: { value: "0.4s", variable: "--time-3" },
  time4: { value: "0.8s", variable: "--time-4" },
};

export const transition = {
  transition1: {
    value: `${time.time1.value} ease-in 0s`,
    variable: "--transition-1",
  },
  transition2: {
    value: `${time.time2.value} ease-in 0s`,
    variable: "--transition-2",
  },
  transition3: {
    value: `${time.time3.value} ease-in 0s`,
    variable: "--transition-3",
  },
  transition4: {
    value: `${time.time4.value} ease-in 0s`,
    variable: "--transition-4",
  },
};
