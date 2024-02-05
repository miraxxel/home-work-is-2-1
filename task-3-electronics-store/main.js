let products = [
    {
        name: "Iphone 14",
        price: 60000,
        inStock: false,
        brand: "Apple",
        specifications: {
            color: "purple",
            storage: "64 gb",
            processor: "Apple A14 Bionic",
            ram: "4 gb",
            camera: "12x12 МП"
        },
        discount: {
            percentage: 10, // 10 % = price * 0.10
            expirationDate: "2024-03-05"
        }
    },
    {
        name: "INFINIX NOTE 30 PRO",
        price: 27000,
        inStock: true,
        brand: "INFINIX",
        specifications: {
            color: "black",
            storage: "256 gb",
            processor: "MediaTek HELIO G99",
            ram: "8 gb",
            camera: "108 МП"
        },
        discount: {
            percentage: 26, // 26 % = price * 0.26
            expirationDate: "2024-02-24"
        }
    },
    {
        name: "Samsung Galaxy A54",
        price: 40000,
        inStock: true,
        brand: "Samsung",
        specifications: {
            color: "lime",
            storage: "256 gb",
            processor: "Samsung Exynos 1380",
            ram: "8 gb",
            camera: "50x12x5 МП"
        },
        discount: {
            percentage: 5, // 5 % = price * 0.05
            expirationDate: "2024-02-24"
        }
    }

];

let customers = [
    {
        name: "Toma",
        budget: 70000
    },
    {
        name: "Kaveh",
        budget: 13000
    }

];

let product = products[2];
let customer = customers[0];
let sale = product.price - (product.price * (product.discount["percentage"] / 100));
let phoneSpecifications = [product.specifications["color"], product.specifications["storage"], 
                            product.specifications["processor"], product.specifications["ram"], 
                            product.specifications["camera"],];

if ( customer.budget > product.price ) {
    console.log(`Бюджет ${customer.name} = ${customer.budget} руб. Может позволить себе ${product.name} за ${product.price} руб.`);
    console.log(`${product.name} имеет следующие характеристики: 
                цвет - ${phoneSpecifications[0]}, 
                память - ${phoneSpecifications[1]}, 
                процессор - ${phoneSpecifications[2]}, 
                оперативная память - ${phoneSpecifications[3]}, 
                камера - ${phoneSpecifications[4]}`);
    console.log(`К ${product.name} полагается скидка ${product.discount["percentage"]}% до ${product.discount["expirationDate"]}`);
    console.log(`Итоговая цена с учетом скидки будет = ${sale} руб.`);
    if (product.inStock === false) {
        console.log(`Но ${product.name} нет в наличии.`);
    }
    else {
        console.log(`${product.name} в наличии, покупка может быть совершена успешно!`);
    }
}
else if (customer.budget < product.price) {
    console.log(`${customer.name} не может позволить себе новый телефон, его бюджет - ${customer.budget}руб. :(`);
}