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
        if (currentValue == 0) { // проверяем на минимальное значение
            tg.MainButton.hide();
        }
    });

    // обработчик клика по кнопке увеличения
    plusButton.addEventListener('click', function () {
        tg.MainButton.setText("Вы выбрали товар!");
        tg.MainButton.show();
    });
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 