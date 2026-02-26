//add event with cash-out btn
document.getElementById('cashout-btn')
.addEventListener('click', function(){
    //1- get the agent number && validate
    const agentNumber = getValueFromInput('agent-number');
    console.log(agentNumber);
       if (agentNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
        }
        //2- get the amount
        const cashoutAmount = getValueFromInput('cashout-amount');
        console.log(cashoutAmount);
        //3- get the current balance, validate && convert to number
        const balance = getBalance();
        console.log(balance);
           //4- Calculate the new balance
        const newBalance = balance - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Balance");
            return;
        }
          //5- Get the pin && verify
          const pin = getValueFromInput('cashout-pin');
           if (pin === "1234") {
            //5.1- true :: show an alert && set present or remaining existing balanace
            alert('Cashout Successful');
            console.log("New Balance", newBalance);
            setBalance(newBalance);
             //1- parent history container take dhore ante hobe, data rakhar jonno
            const history = document.getElementById("history-container");
            //2- div create korbo information save kore rakhar jonno
            const newHistory = document.createElement("div");
            //3- new div a innerHTML add korbo
            newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
            cashout Money Successfully ${cashoutAmount} taka to ${agentNumber}  at  ${new Date()}
            </div>
        `;
            //4- history container a new div append korbo
            history.append(newHistory);
        
        }
        else {
            //5.2- false :: show an error alert && return
            alert('Invalid Pin');
            return;
        }
})