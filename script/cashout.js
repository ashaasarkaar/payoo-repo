//add event with cash-out btn
document.getElementById('cashout-btn')
    .addEventListener("click", function () {
        //1- get the agent number && validate
        const agentNumberInput = document.getElementById('agent-number');
        const agentNumber = agentNumberInput.value;
        console.log(agentNumber);
        if (agentNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
        }
        //2- get the amount
        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmount = cashoutAmountInput.value;
        console.log(cashoutAmount);
        //3- get the current balance, validate && convert to number
        const balanceElement = document.getElementById('balance');
        const balance = balanceElement.innerText;
        console.log(balance);
        //4- Calculate the new balance
        const newBalance = Number(balance) - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Balance");
            return;
        }
        //5- Get the pin && verify
        const cashoutPin = document.getElementById('cashout-pin');
        const pin = cashoutPin.value;
        console.log(pin);
        if (pin === "1234") {
            //5.1- true :: show an alert && set present or remaining existing balanace
            alert('Cashout Successful');
            console.log("New Balance", newBalance);
            balanceElement.innerText = newBalance;
        }
        else {
            //5.2- false :: show an error alert && return
            alert('Invalid Pin');
            return;
        }

    })