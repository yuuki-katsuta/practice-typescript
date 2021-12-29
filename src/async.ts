function action(dt: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fished promise!');
      resolve('delay:' + dt);
    }, dt);
  });
}

// ☆actionの実行
action(2000).then((res) => console.log(res));
action(1000).then((res) => console.log(res));
action(500).then((res) => console.log(res));
