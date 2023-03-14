function join(arreglo) {
  let cadena = "";

  for (let i = 0; i < arreglo.length; i++) {
    cadena = cadena + arreglo[i] + " ";
  }
  return cadena;
}

console.log(join(["Hola", "Mundo"])); // "Hola Mundo"
console.log(join(["Make", "It", "Real"])); // "Make It Real"
console.log(join([])); // ""
console.log(join([1, 3, 2, "hola"])); // 1 3 2 hola
console.log(join([10, 9, 8, 7, 6, 5, 4])); // 10 9 8 7 6 5 4
console.log(join([])); // ""
