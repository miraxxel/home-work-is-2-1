// оптимизация кода
let college = [
    {
        name: "Harry", 
        age:  18, 
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 5500,
        isStudent: true  
    },
    {
        name: "Ron", 
        age:  19, 
        group: "ИС-2-2",
        studID: 321233,
        typeLearning: "Заочная",
        task: ["ИЗО", "МДК-03-02", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true   
    },
    {
        name: "Tom", 
        age:  32, 
        isKurator: true,
        kuratorGroup: "ИС-2-1",
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false 
    },
    {
        name: "Bob", 
        age:  32, 
        isKurator: false,
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false 
    }
];

let person = college[3]; // меняя только индекс в скобках, будет меняться человек которого мы рассматриваем

// а дальше через . мы может выбирать нужный для условия объект

if (person.isStudent === true) {
    console.log(`Вы выбрали студента ${person.name}`);
    if ( person.age >= 18 ) {
        console.log(`Студент ${person.name} совершеннолетний, ему ${person.age}`);
    } 
    else {
        console.log(`Студент ${person.name} не совершеннолетний, ему ${person.age}`);
    } 

    if ( person.cash >= 4500 ) {
        console.log(`Студент ${person.name} получает повышенную стипендию, ${person.cash} руб.`);
    } 
    else if ( person.cash <= 4400 && person.cash > 0 ) {
        console.log(`Студент ${person.name} получает обычную стипендию, ${person.cash} руб.`);
    } 
    else {
        console.log(`Студент ${person.name} не получает стипендию.`);
    }
}
else if ( person.isStudent === false ) {
    console.log(`Вы выбрали преподавателя ${person.name}`);
    if ( person.isKurator === true ) {
        console.log(`Преподаватель ${person.name} куратор группы ${person.kuratorGroup}`);
    }
    else {
        console.log(`${person.name} просто преподаватель, не является куратором`);
    }
}
