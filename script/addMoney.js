//button connected with eventHandler
document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        //get the Bank Name
        const bankName = getValueFromInput('bank-name');
        if (bankName === 'Select bank') {
            alert('Please Select A Bank Name First');
            return;
        }
        console.log(bankName);
        //get the Bank Account Number
        const AccountNumber = getValueFromInput('account-number');
        if (AccountNumber.length != 11) {
            alert('Invalid Account Number');
            return;
        }
        console.log(AccountNumber);
        //get Add Money in Account
        const addAmount = getValueFromInput('add-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(addAmount);
        //check the pin before show newBalance
        const addMoneyPin = getValueFromInput('add-money-pin');
        if (addMoneyPin === '1234') {
            alert(`Add Money Successfully from ${bankName} ${new Date()}`);
            setBalance(newBalance);
            //1- parent history container take dhore ante hobe, data rakhar jonno
            const history = document.getElementById("history-container");
            //2- div create korbo information save kore rakhar jonno
            const newHistory = document.createElement("div");
            //3- new div a innerHTML add korbo
            newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
            Add Money Successfully ${bankName} ${AccountNumber} ${new Date()}
            </div>
        `;
            //4- history container a new div append korbo
            history.append(newHistory);
        }
        else {
            alert('Invalid Pin');
            return;
        }
    })