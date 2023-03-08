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
  });

  // обработчик клика по кнопке увеличения
  plusButton.addEventListener('click', function () {
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