function sum(arreglo) {
  if (!arreglo.length) return 0;
  let resultado = 0;

  for (let i = 0; i < arreglo.length; i++) {
    resultado += arreglo[i];
  }
  return resultado;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));
