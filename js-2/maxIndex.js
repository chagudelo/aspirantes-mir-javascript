function maxIndex(arreglo) {
  let maximo = 0;
  let maximoindice = 0;

  if (arreglo.length > 0) {
    maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
        maximoindice = i;
      }
    }
    return maximoindice;
  } else {
    return -1;
  }
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
