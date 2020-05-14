export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAvg: number;
};

const sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAvg: 0.4,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battioingAvg: number;
// };

// intersectionで型の足し合わせ
type TwoWayPlayer = Pitcher1 & Batter1;

const Ochiail: TwoWayPlayer = {
  throwingSpeed: 170,
  battingAvg: 0.3,
};
