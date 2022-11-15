// Check if word is a palindrome
function isPali(word) {

    // If word is undefined or empty
    // then it is considered not a palindrome
    if (!word || word.trim().length == 0) {
        return false;
    }

    // Cycle trough string single characters
    for (let i = 0; i < word.length / 2; i++) {

        // Define negativeIndex -> an index 
        // that is specular to the normal one
        const negativeIndex = word.length - 1 - i;

        // Check if specular charachters are equal
        if (word[i] != word[negativeIndex]) {

            // Word is not pali
            return false

        }

    }

    // Word is pali
    return true;
}

// Play dice roll
function playDice(userParity, userNumber) {

    // Get userParity
    if (!userParity) {
        userParity = prompt("Pari o dispari?")
    }

    // Normalize userParity
    userParity = userParity.toLowerCase();

    // Check if userParity has an accepted value
    if (userParity != "pari" && userParity != "dispari") {
        // not an accepted value
        alert("Puoi scegliere solo tra pari e dispari");

        // try again user
        return playDice(undefined, userNumber);

    }

    // Get userNumber
    if (!userNumber) {
        userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    }

    // Check if userNumber has an accepted value
    if (
        isNaN(userNumber)
        || userNumber < 1
        || userNumber > 5
    ) {
        // userNumber is not valid
        alert("Non hai inserito un valido numero");

        // try again user
        return playDice(userParity, undefined);
    }

    // Get computer throw
    const computerNumber = rollDice();

    // Result
    const win = ((computerNumber + userNumber) % 2) == (userParity == "dispari");

    // Print result in console
    console.log(`Computer: ${computerNumber}`);
    console.log(`Utente: ${userNumber}`);
    if (win) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso");
    }

    return win;
}

// Roll a single dice
function rollDice() {
    return 1 + Math.round(Math.random() * 4);
}