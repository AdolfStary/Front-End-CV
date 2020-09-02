const messageForm = document.querySelector("FORM");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const myEmail = "#";
let swearing;
let validInput;



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