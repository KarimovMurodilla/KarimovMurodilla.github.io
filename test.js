let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

const plusButtons = document.querySelectorAll('.plus')
plusButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        event.preventDefault()
        console.log(event.target)
        tg.MainButton.setText("Main Menu");
        tg.MainButton.show();
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