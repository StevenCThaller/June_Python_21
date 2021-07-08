/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
*/

// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    // EZ: If it's 1 character, it's a palindrome
    if(str.length == 1) {
        return true;
    }
    // If we want to know if it's the same string forwards and backwards, then the base logic is as follows:
    // The first character should be the same as the last character
    // The second character should be the same as the second to last character
    // The third character should be the same as the third to last character
    // etc. etc.

    // I'll write out two options

    // Option 1: While loop with left index and right index
    var left = 0;
    var right = str.length - 1;
    // We'll check each character, and increment the left and decrement the right each time 
    // assuming the characters are the same, but we should stop when left and right meet.
    while (left < right) {
        // Check to see if the characters are NOT the same. 
        if(str[left] != str[right]) {
            // If they're not, it's not a palindrome, so return false
            return false;
        }
        // If we are still running, then the characters must be the same, so let's increment left and
        // decrement right
        left++;
        right--;
    }

    // If we reached the end of the while loop, then the string MUST be a palindrome
    return true;

    // Option 2: For loop using i to calculate i from the end
    for(var i = 0; i < str.length; i++) {
        // Now, we don't have left and right, we just have i. But we can
        // calculate the latter character's index in relation to i and the string length
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }

    // if we get here, it is a palindrome
    return true;
}


/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/

// const { isPalindrome } = require("./isPalindrome");

// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

// const str2 = "uh, not much";
// const expected2 = "u";

// const str3 = "Yikes! my favorite racecar erupted!";
// const expected3 = "e racecar e";

// const str4 = "";
// const expected4 = false;

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    if(str.length == 0) {
        return false;
    } else if(str.length == 1){
        return str;
    }
    // This one's just honestly kind of a pain. There's no easy way to do it.
    // Option 1: Brute Force As Heck
    // Check every single substring to see if it's a palindrome. Gross.
    // We'll need to keep track of the longest palindromic substring we can find
    var longestPal = "";
    // loop through each character
    for(var i = 0; i < str.length; i++) {
        // we'll find all substrings starting from this character
        var subStr = "";
        // then loop through the subsequent characters
        for(var j = i; j < str.length; j++) {
            // adding each one to our subStr
            subStr += str[j];
            // and checking if it's a palindrome (by using the previous function) and if its length is greater than our longestPal length
            if(isPalindrome(subStr) && subStr.length > longestPal.length) {
                // if so, set longestPal to be the subStr
                longestPal = subStr;
            }
        }
    }
    // When all is said and done, we'll have our longest palindromic substring
    return longestPal;

    // Note: This is O(n^3) in time complexity. Meaning if the string is 3 characters long, there will be 27 calculations.
    // 4 characters long, 64 calculations
    // 5 characters long, 125 calculations.
    // You get the gist of this. The longer the string, the exponentially longer it takes. In basic terms, O(n^3) is... bad
}

function longestPalindromicLessGross(str){
    if(str.length == 0) {
        return false;
    } else if (str.length == 1) {
        return str;
    }

    var p1 = 0;
    var p2 = 0;
    var subStr = "";
    var maxLen = 0;
    for(var i = 0; i < str.length; i++) {
        // Odd Length substrings around this character
        p1 = i - 1;
        p2 = i + 1;
        while(p1 >= 0 && p2 < str.length && str[p1] == str[p2]){
            p1--;
            p2++;
        }

        p1++;
        p2--;
        if(maxLen < p2 - p1 + 1) {
            maxLen = p2 - p1 + 1;
            subStr = "";
            for(var j = p1; j < p2 + 1; j++) {
                subStr += str[j];
            }
        }

        // Even length substrings "around" this character"
        p1 = i - 1;
        p2 = i;
        while(p1 >= 0 && p2 < str.length && str[p1] == str[p2]){
            p1--;
            p2++;
        }
    
        p1++;
        p2--;
        if(maxLen < p2 - p1 + 1) {
            maxLen = p2 - p1 + 1;
            subStr = "";
            for(var j = p1; j < p2 + 1; j++) {
                subStr += str[j];
            }
        }
    }
    return subStr;
}
