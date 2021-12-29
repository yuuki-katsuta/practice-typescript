export {};
// map型
type stringArray = {
  [key in string]: string;
};

const data: stringArray = {
  start: 'start',
  end: 'おしまい',
};
data.finish = '終わり';
data[122] = '122';
console.log(data);
