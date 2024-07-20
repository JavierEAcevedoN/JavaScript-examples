var num1 = 32;
var num2 = 232;

console.log("Operaciones aritmeticas");

// suma
console.log(num1 + num2);

// resta
console.log(num1 - num2);

// multiplicacion
console.log(num1 * num2);

// division
console.log(num1 / num2);

// modulo
console.log(num1 % num2);

// potenciacion
console.log(num1 ** num2);

// incremento (++) decremento (--)
incre = num1++;
console.log(incre);
console.log(num1);

console.log("Operaciones de asignacion");

var x = 3;
var y = 5;
var z = 7;

// suma
z += y;
console.log(z);

// resta
z = 7;
z -= y;
console.log(z);

// multiplicacion
z = 7;
z *= y;
console.log(z);

// division
z = 7;
z /= y;
console.log(z);

// condicion
var edad = 18;
var estado = edad >= 18 ? "true" : "false";
console.log(estado);

console.log("Operaciones de comparacion");

// igual que
console.log(3 == 3);

// estrictamente igual que
console.log(3 === "3");

// diferente que
console.log(3 != 7);

// estrictamente diferente que
console.log("7" !== "7");

// mayor que
console.log(3 > 6);

// mayor o igual que
console.log(3 >= 3);

// menor que
console.log(3 < 1);

// menor o igual que
console.log(3 <= 3);

console.log("Operaciones logicas");

// AND
console.log(true && false);

// OR
console.log(false && true);

// NOT
console.log(!true);

// XOR
console.log(true ^ false);