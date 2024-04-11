const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#lastName");
const CLIENT_YEAR = document.querySelector("#year");
const CLIENT_RESULT = document.querySelector(".Result");



function calculatebtn(){

    const date = new Date().getFullYear();
    let AGE = (date) - (CLIENT_YEAR.value);
    // console.log(AGE);

    // AGE = AGE.toFixed(4);

    if (FIRST_NAME.value=="" || LAST_NAME.value=="" || CLIENT_RESULT.value==""){
        setTimeout(() => {
            CLIENT_RESULT.innerHTML = "Please fill all fields correctly, make use of your brain";
            CLIENT_RESULT.style.color = "red";
            CLIENT_RESULT.style.fontstyle = "Italic";
            setTimeout(() => {
                CLIENT_RESULT.textContent ="";
            }, 2000);
        }, 100);
    }else{
        CLIENT_RESULT.innerHTML = ` ${FIRST_NAME.value} ${LAST_NAME.value}, zyou were born in ${CLIENT_YEAR.value} and you are ${AGE} years old. Thank you for using Michaels Age calculator.`;
        CLIENT_RESULT.style.color = "green";
        CLIENT_RESULT.style.fontstyle = "normal";
        CLIENT_RESULT.style.fontweight = "bold";
        CLIENT_RESULT.style.maxWidth = "500px";
        Init()
    }
};



function Init () {
    FIRST_NAME.value="";
    LAST_NAME.value="";
    CLIENT_YEAR.value="";
};