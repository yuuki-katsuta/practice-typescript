export {};
class Student {
  name: string;
  school: string;
  grade: number;

  constructor(nm: string, sc: string, gr: number) {
    this.name = nm;
    this.school = sc;
    this.grade = gr;
  }

  print(): void {
    console.log(
      '<< ' + this.name + ',' + this.school + ':' + this.grade + ' >>'
    );
  }
}

class Employee {
  name: string;
  title: string;
  department: string;

  constructor(nm: string, tt: string, dp: string) {
    this.name = nm;
    this.title = tt;
    this.department = dp;
  }

  print(): void {
    console.log(this.name + '[' + this.title + ',' + this.department + ']');
  }
}
// People型の値はStudentにもEmployeeにも当てはめることができる
type People = Student | Employee;

// const taro: People = new Student('taro', 'high school', 3);
// const hana: People = new Employee('hanako', 'president', 'sales');
// const sachi: People = new Student('sachiko', 'jinir-high school', 1);
// const jiro: People = new Employee('jiro', 'director', 'labo');

// const data: People[] = [taro, hana, sachi, jiro];
// for (let item of data) {
//   item.print();
// }

class Human {
  data: People[] = [];

  add(item: People): void {
    this.data.push(item);
  }

  print(): void {
    for (let item of this.data) {
      let ob: Student | Employee;
      switch (
        item.constructor.name //クラス名取得
      ) {
        case 'Student':
          //型アサーション(itemをSutudentクラスとして取り出す)
          ob = item as Student;
          console.log(ob.name + ', ' + ob.school + '(' + ob.grade + ')');
          break;
        case 'Employee':
          ob = item as Employee;
          console.log(ob.name + ':' + ob.title + ':' + ob.department);
          break;
        default:
          console.log('cannot print.');
      }
    }
  }
}

const taro: People = new Student('taro', 'high school', 3);
const hana: People = new Employee('hanako', 'president', 'sales');
const sachi: People = new Student('sachiko', 'jinir-high school', 1);
const jiro: People = new Employee('jiro', 'director', 'labo');

const human = new Human();
human.add(taro);
human.add(hana);
human.add(sachi);
human.add(jiro);

human.print();
