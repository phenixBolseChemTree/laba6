const collect = [
  [1, 'a', 'b', 'c', 'd', 'e'],//0
  [2, 'f', 'g', 'h', 'i', 'k'],//1
  [3, 'l', 'm', 'n', 'o', 'p'],//2
  [4, 'q', 'r', 's', 't', 'u'],//3
  [5, 'v', 'w', 'x', 'y', 'z'],//4
];

const inicializator = (str) => {
  const start = str[0];
  const end = str[1];
  return collect[start][end];
}

const coder = (codes) => {
  const codesObr = codes.split(' ');
  const resultArr = codesObr.map((element) => {
    return inicializator(element)
  });
  return resultArr.join('');
}

export { coder };