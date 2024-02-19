console.log("\n\t\tВариант 5. \nИнформация о космическом корабле.\n\n");
const info = {
    name: "Starship",
    company: "SpaceX",
    type: "грузовой",
    engines: 6,
    maxSpeed: "24 124 км/час",
    fuel: "жидкий кислород/метан"
};

for(let i in info){
    console.log(`${i} - ${info[i]}`);    
}

if (info.type === "грузовой") {
    console.log("\nКорабль используется для запуска спутников SpaceX Starlink, обеспечивающих высокоскоростной доступ в Интернет");
}
else if (info.type === "исследовательский") {
    console.log("\nКорабль используется для исследования космоса");
}
else if (info.type === "пассажирский") {
    console.log("\nВы в будущем. Ведь теперь этот корабль используется для высадки экипажей на Марс.");
}