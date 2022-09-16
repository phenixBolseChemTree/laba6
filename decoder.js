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
