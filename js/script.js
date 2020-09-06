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
const summaryLink = document.querySelector("#summaryLink");
const portfolioLink = document.querySelector("#portfolioLink");
const workLink = document.querySelector("#workLink");
const educationLink = document.querySelector("#educationLink");
const aboutLink = document.querySelector("#aboutLink");
const contactLink = document.querySelector("#contactLink");
const myEmail = "astary.dev@hotmail.com";

let swearing;
let validInput;



//////////////////////////
//  Content filter
//////////////////////////

summaryCheck.addEventListener("click", () => {

    if (summaryCheck.className === "fas fa-eye"){
        document.querySelector("#summary").style.display = "none";
        summaryCheck.className = "fas fa-eye-slash";
    }
    else{
        document.querySelector("#summary").style.display = "grid";
        summaryCheck.className = "fas fa-eye";
    }
    

});

portfolioCheck.addEventListener("click", () => {

    if (portfolioCheck.className === "fas fa-eye"){
        document.querySelector("#portfolio").style.display = "none";
        portfolioCheck.className = "fas fa-eye-slash";
    }
    else{
        document.querySelector("#portfolio").style.display = "block";
        portfolioCheck.className = "fas fa-eye";
    }
    
});

workCheck.addEventListener("click", () => {

    if (workCheck.className === "fas fa-eye"){
        document.querySelector("#workExperience").style.display = "none";
        workCheck.className = "fas fa-eye-slash";
    }
    else{
        document.querySelector("#workExperience").style.display = "block";
        workCheck.className = "fas fa-eye";
    }
    
});

educationCheck.addEventListener("click", () => {

    if (educationCheck.className === "fas fa-eye"){
        document.querySelector("#education").style.display = "none";
        educationCheck.className = "fas fa-eye-slash";
    }
    else{
        document.querySelector("#education").style.display = "block";
        educationCheck.className = "fas fa-eye";
    }
    
});

aboutCheck.addEventListener("click", () => {

    if (aboutCheck.className === "fas fa-eye"){
        document.querySelector("#about").style.display = "none";
        aboutCheck.className = "fas fa-eye-slash";
    }
    else{
        document.querySelector("#about").style.display = "grid";
        aboutCheck.className = "fas fa-eye";
    }
    
});


//////////////////////////
//  Events
//////////////////////////



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

summaryLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#summary").scrollIntoView();
});

portfolioLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#portfolio").scrollIntoView();
});

workLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#workExperience").scrollIntoView();
});

educationLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#education").scrollIntoView();
});

aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView();
});

contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView();
});




//////////////////////////
//  Functions
//////////////////////////

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