

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