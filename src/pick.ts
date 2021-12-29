export {};
// pick型で必要な型を抽出
type person_data = {
  name: string;
  mail: string;
  address: string;
  age: number;
};

type person_keys = 'name' | 'age';
type human_keys = 'name' | 'mail' | 'address';

//person_dataから必要なキーを抜き出した型を生成(nameとageを抽出)
type person = Pick<person_data, person_keys>;
type human = Pick<person_data, human_keys>;

const taro: person = {
  name: 'taro',
  age: 39,
};
const hana: human = {
  name: 'hanako',
  mail: 'hanako@flower',
  address: 'chiba',
};
console.log(taro);
console.log(hana);
