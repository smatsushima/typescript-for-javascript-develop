export{};

type Moziretu = string;

const foo: string = 'main';

//別名でで型指定
const bar: Moziretu = 'bar';

const exzample: Profile = {
  name: 'Nam',
  age: 12
};

type Profile = {
  name: string;
  age: number;
}

//変数から型を作成
type Profile2 = typeof exzample;