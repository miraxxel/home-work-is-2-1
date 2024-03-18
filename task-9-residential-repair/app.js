const calculate = () => {
    // ищем все input количества по названию ID
    const inputCountService1 = parseInt(document.querySelector('#count-service-1').value);
    const inputCountService2 = parseInt(document.querySelector('#count-service-2').value);
    const inputCountService3 = parseInt(document.querySelector('#count-service-3').value);
    
    // ищем все input стоимости по названию ID
    const inputPriceService1 = parseInt(document.querySelector('#price-service-1').value);
    const inputPriceService2 = parseInt(document.querySelector('#price-service-2').value);
    const inputPriceService3 = parseInt(document.querySelector('#price-service-3').value);
    
    if( isNaN(inputCountService1) || isNaN(inputCountService2) || isNaN(inputCountService3) || 
        isNaN(inputPriceService1) || isNaN(inputPriceService2) || isNaN(inputPriceService3) ){
        alert("Заполните все поля!"); // alert - всплывающее окно с текстом
        return;
    }

    // проверяем, если количество услуги не равно 0, то цена равна 0 быть не может 
    if( inputCountService1 != 0 ){
        if (inputPriceService1 == 0) {
            alert("Цена услуги не может быть = 0");
            return;
        }
    }
    if( inputCountService2 != 0 ){
        if (inputPriceService2 == 0) {
            alert("Цена услуги не может быть = 0");
            return;
        }
    }
    if( inputCountService3 != 0 ){
        if (inputPriceService3 == 0) {
            alert("Цена услуги не может быть = 0");
            return;
        }
    }

    // общая сумма всех услуг
    let allServiceSum = (inputCountService1 * inputPriceService1) + 
                    (inputCountService2 * inputPriceService2) + 
                    (inputCountService3 * inputPriceService3);

    // объект с нахождением итоговой стоимости каждой отдельной услуги
    const serviceSum = {
        '1': (inputCountService1 * inputPriceService1), 
        '2': (inputCountService2 * inputPriceService2),
        '3': (inputCountService3 * inputPriceService3)
    };

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
        <p>№1 Укладка плитки = ${serviceSum[1]} ден. ед.</p> 
        <p>№2 Штукатурка стен = ${serviceSum[2]} ден. ед.</p> 
        <p>№3 Установка сантехники = ${serviceSum[3]} ден. ед.</p> 
        <p>Итог = ${allServiceSum} ден. ед.</p>   
    `;
}