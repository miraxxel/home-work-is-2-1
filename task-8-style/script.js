// поиск элемента с классом display
// . - по названию класса
// # - по названию ID
// если ищем по названию <тега>, то просто его название

const display = document.querySelector(".display"); // querySelector - поиск одного элемента
const buttons = document.querySelectorAll("button"); // querySelectorAll - поиск большого кол-ва эл-ов с одинаковым названием

const specialChars = ["%", "*", "/", "-", "+", "="]; // массив со спец. значениями
let output = ""; // переменная для (на данный момент) пустой строки

// функция для расчёта по нажатию кнопки "btnValue"
const calculate = (btnValue) => {
    display.focus(); // устанавливаем фокус на display
    // проверка нажатия кнопок пользователем
    if (btnValue === "=" && output != "") {
        output = eval(output.replace("%", "/100")); // знак "%" заменяется делением на 100
    }
    else if (btnValue === "AC") {
        output = ""; // очистка поля
    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1); // из дисплея удаляется один символ с конца
    }
    else {
        // если поле пустое и пользователь нажимал на спец. символы, то они возвращаются и никакие расчёты не выполняются
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output; // дисплей помещается в переменную для введённых значений
};

// querySelectorAll ищет и добавляет кнопки в массив, перебираем их через цикл forEach
// после цикла массив разбивается на отдельную кнопку "button"
buttons.forEach((button) => {
    // addEventListener - отслеживает событие "click" и если оно есть, то вызывается функция
    // в которую передается параметр из атрибута data-value
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});