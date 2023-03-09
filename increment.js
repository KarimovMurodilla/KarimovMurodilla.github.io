let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


const quantityBlocks = document.querySelectorAll('.quantity');
quantityBlocks.forEach(function (block) {
    const minusButton = block.querySelector('.minus');
    const plusButton = block.querySelector('.plus');
    const quantityInput = block.querySelector('input[type="text"]');

    // обработчик клика по кнопке уменьшения
    minusButton.addEventListener('click', function () {
        const currentValue = parseFloat(quantityInput.value); // текущее значение в поле ввода
        if (currentValue > parseInt(quantityInput.min)) { // проверяем на минимальное значение
            quantityInput.value = currentValue - parseInt(quantityInput.step); // уменьшаем значение на шаг
        }
        else if (currentValue == 0) {
            tg.MainButton.hide();
        }
    });

    // обработчик клика по кнопке увеличения
    plusButton.addEventListener('click', function () {
        tg.MainButton.setText("Вы выбрали товар!");
        tg.MainButton.show();
        console.log(event.target)
        const currentValue = parseFloat(quantityInput.value); // текущее значение в поле ввода
        if (currentValue < parseInt(quantityInput.max)) { // проверяем на максимальное значение
            quantityInput.value = currentValue + parseInt(quantityInput.step); // увеличиваем значение на шаг
        }
    });

    // обработчик изменения значения в поле ввода количества
    quantityInput.addEventListener('change', function () {
        const currentValue = parseFloat(quantityInput.value); // текущее значение в поле ввода
        if (currentValue < parseInt(quantityInput.min)) { // проверяем на минимальное значение
            quantityInput.value = quantityInput.min;
        } else if (currentValue > parseInt(quantityInput.max)) { // проверяем на максимальное значение
            quantityInput.value = quantityInput.max;
        }
    });
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData('1');
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 