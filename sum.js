function sum(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result = result + i;
  }
  return result;
}

console.log(sum(4));
console.log(sum(10));
console.log(sum(15));
