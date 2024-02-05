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

let product = products[0];
let customer = customers[1];
let sale = product.price - (product.price * (product.discount["percentage"] / 100));

if ( customer.budget > product.price ) {
    console.log(`${customer.name} может позволить себе ${product.name} за ${product.price} руб.`);
    console.log(`К ${product.name} полагается скидка ${product.discount["percentage"]}% до ${product.discount["expirationDate"]}`);
    console.log(`Итоговая цена с учетом скидки будет = ${sale}`);
}
else if (customer.budget < product.price) {
    console.log(`${customer.name} не может позволить себе новый телефон, его бюджет - ${customer.budget}руб. :(`);
}