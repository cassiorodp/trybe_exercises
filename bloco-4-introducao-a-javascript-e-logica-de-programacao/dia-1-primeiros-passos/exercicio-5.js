let a = 60;
let b = 50;
let c = 60;
let triangulo = a + b + c;

if (triangulo == 180) {
  console.log("true");
}
else if (a < 0 || b < 0 || c < 0) {
  console.log("error");
}

else if (triangulo != 180) {
  console.log("false");
}
