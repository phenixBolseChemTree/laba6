const collect = [
  [1, 'a', 'b', 'c', 'd', 'e'],//0
  [2, 'f', 'g', 'h', 'i', 'k'],//1
  [3, 'l', 'm', 'n', 'o', 'p'],//2
  [4, 'q', 'r', 's', 't', 'u'],//3
  [5, 'v', 'w', 'x', 'y', 'z'],//4
];

const deInicializator = (str) => {
  for (let i = 0; i < 5; i += 1) {
    for (let v = 1; v < 6; v += 1) {
      if (collect[i][v] === str) {
        return `${i}${v}`;
      }
    }
  }
}

const deCoder = (str) => {
  const strObr = str.split('');
  const result = strObr.map((elem) => {
    return deInicializator(elem)
  })
  return result.join(' ');
}

export { deCoder };