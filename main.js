// Check if word is a palindrome
function isPali(word) {

    // If word is undefined or empty
    // then it is considered not a palindrome
    if(!word || word.trim().length == 0){
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