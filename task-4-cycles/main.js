console.log("\t\tЗадание 1.");
const array = [ [3, 5, 2],
                [5, 1, 4] ];

let summ = 0;

console.log("Массив:");
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++){
        console.log(array[i][j]);
    }
    console.log("\t");
}

for (let i = 0; i < array.length; i++) {
    console.log(`Кол-во элементов в ${i+1} массиве = ${array[i].length}`);
    for (let j = 0; j < array[i].length; j++) {
        summ += array[i][j];
    }
}
console.log(`Сумма элементов массива = ${summ}.`);




console.log("\n\t\tЗадание 2.");
let users = [
    {
        name: "Toma",
        age: 22,
        online: false
    },
    {
        name: "Kaveh",
        age: 27,
        online: false
    },
    {
        name: "Irma",
        age: 25,
        online: false
    }
];

// свойство, которое выводится - name; свойство, которое изменяется - online
for (let status of users) {
    status.online = true;
    console.log(`${status.name} - ${status.online}`);
}




console.log("\n\t\tЗадание 3.");
const info = {
        corp1: {
            name: "Google",
            workers: {
                nameWorker1: "Irma", 
                nameWorker2: "Toma", 
                nameWorker3: "Ron"
            }
    },
       corp2: {
        name: "Microsoft",
        workers: {
            nameWorker1: "Lucas", 
            nameWorker2: "Amalia", 
            nameWorker3: "Kaveh" 
        }
    }
};

for(let corp in info){
    console.log(`В корпорации ${info[corp].name} работают: `);
    for (let person in info[corp].workers) {
        console.log(info[corp].workers[person]);
    }
    console.log("\t");
}