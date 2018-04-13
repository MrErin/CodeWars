/* https://www.codewars.com/kata/558fc85d8fd1938afb000014

7 kyu
Code Wars Kata Instructions:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

Example: 
[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/


//my solution

function sumTwoSmallestNumbers(numbers) {
    //sort function for numbers rather than strings. "return a-b" means sort ascending; b-a would sort descending
    numbers.sort(function (a, b) { return a - b })
    console.log(numbers)
    console.log(numbers[0] + numbers[1])
};

let arr = [19, 5, 42, 2, 77]
sumTwoSmallestNumbers(arr)




//top-voted solution on CodeWars:

function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort(function (a, b) { return a - b; });
    return numbers[0] + numbers[1];
};
