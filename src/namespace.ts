// myappという名前空間を作成
namespace myapp {
  namespace foundation {
    export interface printable {
      print(): void;
    }

    export interface stringable {
      getString(): string;
    }
  }

  export type Person = {
    name: string;
    age: number;
  };

  export class MyData implements foundation.printable, foundation.stringable {
    people: Person[] = [];

    constructor() {}

    add(nm: string, ag: number) {
      this.people.push({ name: nm, age: ag });
    }

    print(): void {
      console.log('*** mydata ***\n' + this.getString());
    }

    getString(): string {
      let res = '[\n';
      for (let item of this.people) {
        res += '  "' + item.name + ' (' + item.age + ')",\n';
      }
      return res + ']';
    }
  }
}

const mydata = new myapp.MyData();
mydata.add('taro', 39);
mydata.add('hanako', 28);
mydata.add('sachiko', 17);
mydata.add('jiro', 6);
mydata.print();
