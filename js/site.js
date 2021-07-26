//start function
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

//view function
function displayText(text) {

    //Display the card element by removing visually-hidden
    document.getElementById("alert").classList.remove("invisible");

    //Get element and insert the text
    let placeToDisplay = document.getElementById("result");

    placeToDisplay.innerHTML = `This is your text reversed: <span class="fw-bold fs-4 text-dark">${text}</span>`;
}