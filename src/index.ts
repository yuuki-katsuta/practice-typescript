// nodejsプログラムの場合、引数の情報は process.argv にまとめられている(テキストの配列)
console.log('Node path = ' + process.argv[0]);
console.log('script file path = ' + process.argv[1]);

const data1: number[] = [];
//process.argv[2]から引数の情報
for (var i = 2; i < process.argv.length; i++) {
  data1.push(Number(process.argv[i]));
}
console.log(data1);

for (let item of data1) {
  const res = primeFactor(item);
  console.log(item + '= ' + res);
}

function primeFactor(a: number): number[] {
  const v: number[] = [];
  let x = a;
  let n = 2;
  while (x > n) {
    if (x % n == 0) {
      x = x / n;
      v.push(n);
    } else {
      n += n == 2 ? 1 : 2;
    }
  }
  v.push(x);
  return v;
}

console.log('Node path = ' + process.argv[0]);
console.log('script file path = ' + process.argv[1]);

const data2: number[] = [];
for (var i = 2; i < process.argv.length; i++) {
  data2.push(Number(process.argv[i]));
}
console.log('parameters: ' + data2);

const f = aggregate();

for (let item of data2) {
  const res = f(item);
  console.log(res);
}

function aggregate(): (n: number) => [number, number, number, number, number] {
  let total = 0;
  let totalp = 0;
  let totalt = 0;
  return (n: number): [number, number, number, number, number] => {
    total += n;
    let tax = Math.floor(n - n / 1.1);
    totalp += n - tax;
    totalt += tax;
    return [n, tax, total, totalp, totalt];
  };
}
