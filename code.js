// https://stackoverflow.com/questions/27926100/multiple-quiz-with-checkboxes-multiple-options

const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const checkboxes = document.getElementsByName('input')
const word = document.getElementById('word')
const score = document.getElementById('score')
const ans = document.getElementById('answers')
ans.style.display = "none";

form.addEventListener('submit', (e) => {
    e.preventDefault()
});


function validate(){

    // name and email 
    const regWord = /[a-zA-Z]/g;
    const regLetters = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
    const regEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const wordValue = word.value.trim().toLowerCase();
    let scoreCounter = 0;
    

    // full name and email
    if (!regLetters.test(fnameValue)) {
        alert("Full name is required and can only contain letters.")
        return false;
    }
    
    if (!regEmail.test(emailValue)){
        alert("Your email is invalid.")
        return false;
    }

    // radio buttons
    if(!document.querySelector('input[name="mm"]:checked')) {   
        alert("Choice required.")
        return false;
    }
    else if (document.getElementById('Brown').checked) {
        scoreCounter += 1;
    }

    if(!document.querySelector('input[name="icecream"]:checked')) {   
        alert("Choice required.")
        return false;
    }
    else if (document.getElementById('China').checked) {
        scoreCounter += 1;
    }
      
    // check boxes
    if(!document.querySelector('input[TYPE="checkbox"]:checked')) {   
        alert("A minimum of one ticked box is required.")
        return false;

    } else {
        const checkboxChecked = []; 

        for(var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked && (checkboxes[i].value === "right")) {
                checkboxChecked.push(checkboxes[i]);
            }
        }
        scoreCounter += checkboxChecked.length;
    }


    // open question
    if (!regWord.test(wordValue)) {
        alert("Word required.")
        return false;
    }
    else if (wordValue === "tea") {
        scoreCounter += 1;
    }

    score.innerText = "Your score is: " + scoreCounter + "/6\n\n" 
    
    if (wordValue) {
        ans.style.display = "block";
    }

}


