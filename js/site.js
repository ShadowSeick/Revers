sh//start function
function getText() {

    let textToReverse = document.getElementById("submitedText").value;
    textToReverse = textToReverse.toString();
    
    //Check if there is any text.
    if (textToReverse) {

        //Call reverseText
        let textReversed = reverseText(textToReverse);

        //Call displayText
        displayText(textReversed);
    }
    else {
        alert("You have to put text in it")
    }
 }

//logic function
function reverseText(text) {
    return text.split("").reverse().join("");
}

//display function
function displayText(text) {

    let placeToDisplay = document.getElementById("result");
    
    if (placeToDisplay.innerHTML){
        placeToDisplay.innerHTML = "";
    }

    placeToDisplay.innerHTML += `This is your text reversed: <span class="fw-bold fs-4">${text}</span>`;
}