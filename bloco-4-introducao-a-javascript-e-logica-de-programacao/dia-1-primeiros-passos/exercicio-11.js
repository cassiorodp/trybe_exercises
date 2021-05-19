let salary = 3000;
let baseSalary;
let inss;
let ir;

if (salary <= 0 ) {
  console.log('valor invalido');
} else if (salary < 1556.94) {
  inss = salary * 0.08;
} else if (salary >= 1556.95 && salary <= 2594.92) {
  inss = salary * 0.09;
} else if (salary >= 2594.93 && salary <= 5189.82) {
  inss = salary * 0.11;
} else if (salary >= 5189.82) {
  inss = 570.88;
}

baseSalary = salary - inss;

if (baseSalary < 1903.98) {
  ir = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  ir = (baseSalary * 0.075) - 142.80;
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  ir = (baseSalary * 0.15) - 354.80;
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  ir = (baseSalary * 0.225) - 636.13;
} else if (baseSalary > 4664.68) {
  ir = (baseSalary * 0.275) - 869.36;
}
console.log("Salário: " + (baseSalary - ir));
