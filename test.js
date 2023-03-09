let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

const plusButtons = document.querySelectorAll('.plus')
plusButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        console.log(event.target)
        tg.MainButton.setText("Main Menu");
        tg.MainButton.show();
    });
});