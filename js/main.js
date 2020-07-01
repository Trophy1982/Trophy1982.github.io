let price = 1000;
let fuvar = 500;
let limit = 5000;

function calcAmount() {
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(amountNumber);
}

function showSumPrice(amountNumber) {
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!")
    } else {
        let amount = amountNumber * price;
        shiping(amount);
    }
}

function shiping(amount) {
    if (amount >= limit) {
        print(amount);
    }
    else {
        amount = amount + fuvar;
        print(amount);
    }

}

function print(amount) {
    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML = amount;
}