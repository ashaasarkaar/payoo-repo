//homepage login button setup steps

//step-1: get the id from input number field
document.getElementById("login-btn")
.addEventListener("click", function(){
    const inputNumber = document.getElementById("input-number");
    const contactNumber = inputNumber.value;
    console.log(contactNumber);

    //step-2: get the id from input pin field
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    //step-3: match mobile number && pin 

    //step-4: if login match true-> alert () + bring home page
    if(contactNumber == '01540785135' && pin == 1234){
        alert("Login Success");
        window.location.assign("/home.html");
    }
    else{
         //step-4: if login match false-> alert () 
        alert("Login Failed");
    }

})