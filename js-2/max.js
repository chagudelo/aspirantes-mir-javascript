function max(arreglo) {
  let maximo = 0;

  if (arreglo.length > 0) {
    maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
    return maximo;
  } else {
    return undefined;
  }
}

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
