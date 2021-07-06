/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    SPLIT EXAMPLE:
    var str = "Hello world"
    str.split(" ") => ["Hello", "world"]


    var str1 = " there's no free lunch - gotta pay yer way. ";
    var expected1 = "TNFL-GPYW";
    
    var str2 = "Live from New York, it's Saturday Night Live!";
    var expected2 = "LFNYISNL";

    HINT:
    .toUpperCase()

    * Turns the given str into an acronym.
    * - Time: O(?).
    * - Space: O(?).
    * @param {string} str A string to be turned into an acronym.
    * @returns {string} The given str converted into an acronym.
*/
function acronym(str) {
    // first, we need a variable to store our acronym.
    var newAcronym = "";

    // I want to do this without any built ins. The easiest way to do so is to loop through each character.
    // If it is the first character of the string, and not a space, we add it to the newAcronym. Otherwise, 
    // if the character before it is a space, we'll add it to the acronym. I'll be adding each character as is,
    // and then converting the whole thing to uppercase at the end.
    for(var i = 0; i < str.length; i++) {
        // check 1: is it the first character of the overall string, and not a space?
        if(i == 0 && str[i] != " ") {
            newAcronym += str[i]; // if so, add it to our acronym.
        } else if(str[i] != " " && str[i-1] == " ") { // otherwise, if the character BEFORE is a space and the character itself is not
            newAcronym += str[i]; // add it to our acronym
        }
    }
    // converting it to uppercase
    newAcronym = newAcronym.toUpperCase();
    // and finally return the acronym
    return newAcronym;
}

/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed

    var str1 = "creature";
    var expected1 = "erutaerc";

    var str2 = "dog";
    var expected2 = "god";


    * Reverses the given str.
    * - Time: O(?).
    * - Space: O(?).
    * @param {string} str String to be reversed.
    * @returns {string} The given str reversed.
*/
function reverseString(str) {
    // To reverse a string, we need to have a string to store our reversed version
    var reversed = "";

    // Starting at the last character, decrementing our iterator to the beginning
    for(var i = str.length - 1; i >= 0; i--) {
        // simply add each character to our reversed string
        reversed += str[i];
    }
    // and return it
    return reversed;
}