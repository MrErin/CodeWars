/* 
(JavaScript)
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

6 kyu
Code Wars Kata Instructions:

There is an array with some numbers.All numbers are equal except for one.Try to find it!

findUniq([1, 1, 1, 2, 1, 1]) === 2
findUniq([0, 0, 0.55, 0, 0]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/


//my solution

function findUniq(arr) {
    //sorts the array. now the unique number is at one end or the other
    arr.sort();
    //log the sorted array, for debugging
    console.log(arr);
    //create a variable for the second number in the array. compare this one to the first and last one to determine which of the end numbers is the "winner"
    let secondNum = arr[1];
    //need to set the variable to length-1 because otherwise the value will be the number *after* the last number, which will return undefined
    let lastNum = arr[arr.length - 1];
    //set the winner to the first number in the array to start. 
    let winner = arr[0];
    //log out the values of the variables for debugging
    console.log("Start: Second Number: " + secondNum + " Last Number: " + lastNum + " Winner: " + winner);
    //if the winner (at this point, the first number in the array) equals the second number, then we know the last number is the unique number because a unique number will not equal any other number in the array.
    if (winner === secondNum) {
        //if condition is true, the winner is the last number
        winner = lastNum;
        //if the condition is true, log that the winner was found in the IF section
        console.log("IF: Second Number: " + secondNum + " Last Number: " + lastNum + " Winner: " + winner);
    } else {
        //if the first condition is false, then the winner must be the first number in the array. log it out
        console.log("ELSE: Second Number: " + secondNum + " Last Number: " + lastNum + " Winner: " + winner);
    }
}

let arr = [3, 3, 55, 3, 3];
findUniq(arr);



//top-voted solution on CodeWars:

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}
