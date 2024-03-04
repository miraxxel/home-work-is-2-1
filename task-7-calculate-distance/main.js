console.log("\t\tВариант 5.");
console.log("Функция вычисления расстояния между двумя точками на плоскости.")
console.log("Формула для вычисления: корень числа(x2 - x1)^2 + (y2 - y1)^2.");

let CalculateDistance = (x1, x2, y1, y2) => {
    let result = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    let distance = Math.sqrt (result);
    console.log(`Расстояние = ${distance}`);
}

let x_point1 = prompt("Введите координату x1: ");
let x_point2 = prompt("Введите координату x2: ");
let y_point1 = prompt("Введите координату y1: ");
let y_point2 = prompt("Введите координату y2: ");

console.log(`x1 = ${x_point1}, x2 = ${x_point2}`);
console.log(`y1 = ${y_point1}, y2 = ${y_point2}`);

CalculateDistance(x_point1, x_point2, y_point1, y_point2);