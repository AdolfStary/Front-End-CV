const messageForm = document.querySelector("FORM");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const menu = document.querySelector("#menu");
const menuList = document.querySelector("NAV");
const summaryCheck = document.querySelector("#summaryCheck");
const portfolioCheck = document.querySelector("#portfolioCheck");
const workCheck = document.querySelector("#workCheck");
const educationCheck = document.querySelector("#educationCheck");
const aboutCheck = document.querySelector("#aboutCheck");
const myEmail = "astary.dev@hotmail.com";

let swearing;
let validInput;



//////////////////////////
//  Content filter
//////////////////////////

summaryCheck.addEventListener("click", () => {

    if (summaryCheck.checked === false){
        document.querySelector("#summary").style.display = "none";
    }
    else{
        document.querySelector("#summary").style.display = "grid";
    }
    

});

portfolioCheck.addEventListener("click", () => {

    if (portfolioCheck.checked === false){
        document.querySelector("#portfolio").style.display = "none";
    }
    else{
        document.querySelector("#portfolio").style.display = "block";
    }
    
});

workCheck.addEventListener("click", () => {

    if (workCheck.checked === false){
        document.querySelector("#workExperience").style.display = "none";
    }
    else{
        document.querySelector("#workExperience").style.display = "block";
    }
    
});

educationCheck.addEventListener("click", () => {

    if (educationCheck.checked === false){
        document.querySelector("#education").style.display = "none";
    }
    else{
        document.querySelector("#education").style.display = "block";
    }
    
});

aboutCheck.addEventListener("click", () => {

    if (aboutCheck.checked === false){
        document.querySelector("#about").style.display = "none";
    }
    else{
        document.querySelector("#about").style.display = "block";
    }
    
});





messageForm.addEventListener("submit", (event) => {

    event.preventDefault();

    CheckForSwearing();
    CheckForInput();

    if (swearing){

        alert("We are professionals. Please let's not resort to swearing.")

    }
    else if (!validInput){

        alert("All fields of contact form must be filled out.");

    }
    else {
        let passedSubject = name.value+" - "+subject.value;
        document.location.href = `mailto:${myEmail}?subject=${passedSubject}&body=${message.value}`;
    }



});

menu.addEventListener("click", () => {

    if (menuList.style.visibility != "visible")
    {
        menuList.style.visibility = "visible";
    }
    else
    {
        menuList.style.visibility = "hidden";
    }
    

})


function CheckForSwearing(){

    let swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    swearing = false;

    for (swearWord of swearWords){

        
        if (name.value.toLowerCase().includes(swearWord) || subject.value.toLowerCase().includes(swearWord) || message.value.toLowerCase().includes(swearWord)) {swearing = true;}

    }

    return swearing;
}

function CheckForInput(){

    validInput = true;

    if (name.value.trim() === "" || subject.value.trim() === "" || message.value.trim() === "") {validInput = false;}

    return validInput;
}