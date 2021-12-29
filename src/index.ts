let msg: HTMLParagraphElement;

const html = `<h2><a id="title">TypeScript!!</a></h2>
<div id="content">wait...</div>`;

window.addEventListener('load', () => {
  msg = document.querySelector('#msg');
  msg.innerHTML = html;
  const title: HTMLAnchorElement = document.querySelector('#title');
  //属性を指定(HTMLAnchorElementでaタグのエレメントを示す)
  title.href = 'https://www.typescriptlang.org/docs/handbook/2/objects.html';
  const content: HTMLDivElement = document.querySelector('#content');
  setDiv(content);
});

const setDiv = (content: HTMLDivElement) => {
  content.style.position = 'absolute';
  content.style.left = '100px';
  content.style.top = '100px';
  content.style.width = '300px';
  content.style.height = '300px';
  content.style.borderWidth = '3px';
  content.style.borderStyle = 'solid';
  content.style.borderColor = 'red';
  content.style.backgroundColor = 'white';
  content.textContent = '';
  content.addEventListener('click', addElement);
};

const addElement = (event: MouseEvent) => {
  let div: HTMLDivElement = document.createElement('div');
  div.style.position = 'absolute';
  div.style.width = '100px';
  div.style.height = '100px';
  //イベントが発生したマウスポインタの位置
  div.style.top = event.offsetX + 'px';
  div.style.left = event.offsetY + 'px';
  div.style.backgroundColor = '#cc00aa33';
  //event.targetはイベントが発生したエレメント
  const target: HTMLElement = event.target as HTMLElement;
  target.appendChild(div);
};

// import { MyData } from './lib';
// const myData = new MyData();
// myData.add('taro', 34);
// myData.add('hana', 22);

// myData.print();

// let table: HTMLTableElement;
// let message: HTMLInputElement;

// //テーブルに表示
// function showTable(html: string) {
//   table.innerHTML = html;
// }

// function doAction() {
//   // message.valueでテキストフィールドのデータを抽出
//   const msg = message.value;
//   memo.add({ message: msg, date: new Date() });
//   memo.save();
//   memo.load();
//   showTable(memo.getHtml());
// }

// //初期化
// function doInitial() {
//   memo.data = [];
//   memo.save();
//   memo.load();
//   message.value = '';
//   showTable(memo.getHtml());
// }

// type Memo = {
//   message: string;
//   date: Date;
// };

// class MemoData {
//   data: Memo[] = [];

//   add(mm: Memo): void {
//     this.data.unshift(mm);
//   }
//   save(): void {
//     //値を保管 "memo_data"はキー。値はテキストのみなのでオブジェクトをテキストに変換
//     localStorage.setItem('memo_data', JSON.stringify(this.data)); //this.dataの内容で上書きしている
//   }
//   load(): void {
//     //テキストをオブジェクトに変換
//     const readed = JSON.parse(localStorage.getItem('memo_data'));
//     this.data = readed ? readed : [];
//   }

//   getHtml(): string {
//     let html = '<thead><th>memo</th><th>date</th></thead><tbody>';
//     for (let item of this.data) {
//       html +=
//         '<tr><td>' +
//         item.message +
//         '</td><td>' +
//         item.date.toLocaleString() +
//         '</td></tr>';
//     }
//     return html + '</tbody>';
//   }
// }

// const memo = new MemoData();

// window.addEventListener('load', () => {
//   table = document.querySelector('#table');
//   message = document.querySelector('#message');
//   document.querySelector('#btn').addEventListener('click', doAction);
//   document.querySelector('#initial').addEventListener('click', doInitial);
//   memo.load();
//   showTable(memo.getHtml());
// });
