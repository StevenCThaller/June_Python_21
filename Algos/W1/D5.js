/*
    Given a sorted array of page numbers where a term appears,
    produce an index string.

    Consecutive pages should form ranges separated by a hyphen.

    EXAMPLE:

    var input = [1, 5, 6, 7, 8, 9, 10, 14, 22, 23, 24, 25, 27];

    var output = "1, 5-10, 14, 22-25, 27";
*/

function bookIndex(pages){
    // If the array is empty, let's just go ahead and quit out
    if(pages.length == 0) {
        return false;
    } 
    // Obviously, we need an output string
    var indexString = "";

    // Basic Steps:
    // 1. Keep track of the current page
    // 2. Add the current page to the index string
    // 3. Keep checking the next page to see if it's consecutive.
    // 4. Increment i each time
    // 5. If, after checking the next pages, if the page at i is not the same
    //    add the hyphen, the page, and the comma.
    // 6. Otherwise, just add the comma
    // 7. Rinse and repeat


    for(var i = 0; i < pages.length; i++) {
        // Step 1
        var lastPageAdded = pages[i];
        // Step 2
        indexString += lastPageAdded;

        // Step 3
        while(pages[i+1] == pages[i] + 1){
            // Step 4
            i++;
        }

        // Step 5
        if(pages[i] != lastPageAdded) {
            indexString += "-" + pages[i] + ", ";
        } else { // Step 6
            indexString += ", "
        }
    }

    // And voila!
    return indexString;
}


var input = [1, 5, 6, 7, 8, 9, 10, 14, 22, 23, 24, 25, 27];

var output = "1, 5-10, 14, 22-25, 27";

console.log(bookIndex(input));