function bmi(weight, height) {
  if (height > 0) {
    return weight / (height * height);
  } else {
    return 0;
  }
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
