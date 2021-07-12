/*
    Generate Coin Change

    Given a number of U.S. cents, return an object with the optimal 
    configuration of coins.

    EXAMPLE:

    var input = 173;
    var output = {
        quarters: 6,
        dimes: 2,
        nickels: 0,
        pennies: 3
    }

    A couple of different approaches:

    Option 1: Keep decrementing by the highest coin value possible, adding to that 
    key value pair each time, making your way down the hierarchy of coins

    Option 2: Our old friend modulo (i.e. the % operator)

    Modulo example:
    42 % 25 would give us 17, because 25 x 1 is 25, and there's 17 left to get us to 42

    Because (6 x 25) + (2 x 10) + (0 x 5) + (3 x 1) 
    is 150 + 20 + 0 + 3 = 173.
*/

function generateCoinChangeObject(cents){
    // We want our object to exist. But we also can't assume anything about
    // how many of each coin there are. So I'll just initialize each coin
    // to have a value of zero.
    var coinObject = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }

    // Now, to find out how many quarters we could get, we need to divide the number of cents
    // we have by 25, rounding down. Because we can't have a half quarter, for example.
    coinObject.quarters = Math.floor(cents/25);
    // Now, we need to reduce cents by however many quartersworth we just added to our object.
    // We could do something like cents -= coinObject.quarters * 25, OR, just find the remainder
    cents %= 25;

    // And rinse and repeat for the dimes and nickels
    coinObject.dimes = Math.floor(cents/10);
    cents %= 10;

    coinObject.nickels = Math.floor(cents/5);
    cents %= 5;

    // By this point, cents should have a value somewhere between 0 and 4, so just add it to our pennies count
    coinObject.pennies = cents;

    // And return the object.
    return coinObject;
}

console.log(generateCoinChangeObject(8734));