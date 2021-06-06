export{};

type Pitcher = {
  throwingSpeed: number;
]}

type Batter1 = {
  batterAvereage: number;
}

const daimazinSasaki: Pitcher =  {
  throwingSpeed: 154
}

// type TwowaPlaer = {
//   throwingSpeed: number;
//   batterAvereage: number;

// }

type TwowaPlaer = Pitcher & Batter1;

const otiaihiromitu: TwowaPlaer = {
  throwingSpeed: 154,
  batterAvereage: 0.36
}


