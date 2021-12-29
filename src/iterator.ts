class MyData<T> {
  data: T[] = [];

  //可変長引数を受け取る
  constructor(...data: T[]) {
    this.data = data;
  }

  add(val: T) {
    this.data.push(val);
  }

  [Symbol.iterator]() {
    let pos = 0;
    let items = this.data;

    return {
      //nextメソッドはIteratorResultというインターフェースの値を返す(doneとvalueという値を持つmap型)
      next(): IteratorResult<T> {
        if (pos < items.length) {
          return {
            done: false,
            value: items[pos++],
          };
        } else {
          return {
            done: true,
            value: null,
          };
        }
      },
    };
  }
}

const data = new MyData<string>('one', 'two', 'three');

//for ofではオブジェクトから値を取り出す際、[Symbol.iterator]を呼び出す
for (let item of data) {
  console.log(item);
}
