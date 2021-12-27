enum School {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other',
}
interface Human {
  name: string;
  print(): void;
}

class Person implements Human {
  name: string = 'no-name';
  mail: string;
  age: number;

  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    this.name = name;
    this.mail = mail;
    this.age = age;
  }

  print(): void {
    console.log(this.name + '(' + this.mail + ',' + this.age + ')');
  }
}

class Student implements Human {
  name: string = 'no-name';
  school?: School;
  grade?: number;

  constructor(name: string, school?: School, grade?: number) {
    this.name = name;
    this.school = school;
    this.grade = grade;
  }

  print(): void {
    let gd: string = this.grade ? String(this.grade) : '-';
    console.log(this.name + '(' + this.school + ' school: ' + gd + ' grade)');
  }
}
console.log(School.junior);

const taro: Person = new Person('taro', 'taro@yamada', 39);
const hanako: Student = new Student('hanako', School.high, 2);
const sachiko: Person = new Person('sachiko');
const jiro: Student = new Student('jiro');

const data: Human[] = [taro, hanako, sachiko, jiro];

for (let item of data) {
  item.print();
}

//interfaceの継承
interface People extends Human {
  birth: Date;
}

class Employee implements People {
  name: string = 'no-name';
  company: string = '';
  birth: Date = new Date();

  constructor(nm: string, cm: string, bth: Date) {
    this.name = nm;
    this.company = cm;
    this.birth = bth;
  }
  print(): void {
    console.log(this.name + this.company + this.birth);
  }
}
const ichiro = new Employee('ichiro', 'Baseball Inc.', new Date('1982/10/10'));
ichiro.print();

//static
class StaticHuman {
  static fullname: string;
  static age: number;

  static set(nm: string, ag: number): void {
    this.fullname = nm;
    this.age = ag;
  }

  static print(): void {
    console.log(this.fullname + this.age);
  }
}
//クラスから直接呼び出し可能
StaticHuman.set('taro', 39);
StaticHuman.print();
StaticHuman.set('hanako', 28);
StaticHuman.print();

//ジェネリクス
class Data<T> {
  data?: T[];

  constructor(...item: T[]) {
    this.data = item;
  }

  print(): void {
    if (this.data) {
      for (let item of this.data) {
        console.log(item);
      }
    } else {
      console.log('no data...');
    }
  }
}
//<string>でジェネリクスのデータ型が決定される(ジェネリクス型は実行時に型が決まる)
const data1 = new Data<string>('one', 'two', 'three');
const data2 = new Data<number>(123, 456, 78, 90);
data1.print();
data2.print();

//ユーティリティ型
interface Human2 {
  name: string;
  mail?: string;
  age?: number;
}

class Person2 {
  human: Required<Human2>;

  constructor(nm: string, ml: string, ag: number) {
    this.human = { name: nm, mail: ml, age: ag };
  }

  print(): void {
    console.log(
      this.human.name + ' (' + this.human.age + '::' + this.human.mail + ')'
    );
  }
}

const taro2 = new Person('taro', 'taro@yamada', 39);
taro.print();
