export {};
type prop_name = 'name' | 'mail' | 'age';
// Record<キー | 値>
type Person = Record<prop_name, string | number>;

const taro: Person = {
  name: 'taro',
  mail: 'mail',
  age: 22,
};
