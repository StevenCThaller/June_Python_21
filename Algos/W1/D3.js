/* 
    Given in an alumni interview in 2021.
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 


    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
    
    const str1 = "aaaabbcddd";
    const expected1 = "a4b2cd3";
    
    const str2 = "";
    const expected2 = "";
    
    const str3 = "a";
    const expected3 = "a";
    
    const str4 = "bbcc";
    const expected4 = "bbcc";
    
    const str5 = "aaaabbcdddaaa";
    const expected5 = "a4b2cd3a3";

    const str6 = "aabbbaaaaccdddd";
    const expected6 = "a2b3a4c2d4";

    const str7 = "hellowoooorld"
    const expected7 = "hel2owo4rld";


*/

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs only if the
 * character occurs more than one time.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
*/
function encodeStr(str) {
    // First, we need the string we'll encode our message into
    var encoded = "";

    // Obviously, we need to loop through the characters of the string given to us
    for(var i = 0; i < str.length; i++) {
        // Ok, so how do we do this? Well, we'll need to keep track of the character, then how many times it appears.
        // Then, add the character followed by the number of times it appears to our encoded string, then move the iterating
        // variable forward that many times.

        // what character?
        var char = str[i];
        // how many times consecutively?
        var count = 1;
        // keeping track of the index of each consecutive character
        var j = i + 1;
        // well, we want to keep adding to count for each consecutive character that matches our char
        while(str[j] == char){
            // if the character at j is our character, increment our counter, and our j index
            count++;
            j++;
        }

        // Now, we want to add it to our encoded string as, for example, if char is "a" and count is 4, a4.
        // But, if count is 1, just add the character.
        if(count == 1) {
            encoded += char;
        } else {
            encoded += char + count;
            // Now, we need to increment i by enough characters so it skips over the consecutive
            // instances of char. If, for example, we had "aaaabb", when i is 0, we need to move it
            // up to 4. count is 4. so i += count should do the trick.
            // HOWEVER!! At the end of this iteration of the for loop, i will increment by 1 anyways.
            // So i += count-1;
            i = j - 1;
        }
    }

    // BUT REMEMBER THE CAVEAT FROM THE PROMPT!!

    // If the encoded string is not shorter than the original string, return the original string
    if(encoded.length >= str.length) {
        return str;
    } else {
        return encoded;
    }
}
/* 
    String Decode  

    const str1 = "a3b2cd3";
    const expected1 = "aaabbcddd";

    const str2 = "a3b2c12d10";
    const expected2 = "aaabbccccccccccccdddddddddd";

    HINT: isNaN(someValue)
    Example: isNaN("yes") => true
    isNaN("8") => false
*/
/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    // Step 1: We need our decoded variable
    var decoded = "";

    // Step 2: Iterate through the characters in the string
    for(var i = 0; i < str.length; i++) {
        // Step 3 (optional): Store the character in a variable for easier checks
        var char = str[i];
        // Step 4: Create a count string. The numbers in following the character will be strings, and there may be multiple digits,
        // so store it in a string
        var countStr = "";
        // Step 5: We need a new index variable to check the following characters
        var j = i + 1;
        // Step 6: Check the number following the character (if there even is a subsequent number)
        // We'll do this by continuing to add the numerical characters to our countStr as long as it's a number
        while(!isNaN(str[j])) {
            countStr += str[j];
            j++;
        }
        // Step 7: Make an actual count variable
        var count;

        // Step 8: If countStr is an empty string, set count to the number 1, otherwise convert the string to its number
        if(countStr == "") {
            count = 1;
        } else {
            // parseInt will convert a stringed number to the actual number
            count = parseInt(countStr);
        }

        // Step 9: add char to decoded count number of times
        for(j = 0; j < count; j++) {
            decoded += char;
        }
        // Step 10: Increment i to skip over the number. 
        i += countStr.length;
    }

    // Step 11: Return the decoded message
    return decoded;
}