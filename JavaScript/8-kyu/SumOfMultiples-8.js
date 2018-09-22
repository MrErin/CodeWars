/* 
(JavaScript)
https://www.codewars.com/kata/sum-of-multiples/discuss

8 kyu
Code Wars Kata Instructions:

Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/


//my solution

function sumMul(n, m) {
    //create varaible to store the sum
    let sum = 0
    //if checks for bad values
    if (n > 0 && m > 0) {
        //loop through numbers beginning with n and stopping at m
        for (var i = n; i < m; i++) {
            //if the current number is a multiple of n (meaning, can be divided by n with no remainder,) then add that number to the sum
            if (i % n === 0) {
                sum += i
            }
            //print the iteration of the loop and current sum, for debugging
            console.log("Iteration: " + i + "; Sum: " + sum);
        }
    } else {
        console.log('INVALID');
    }
}

sumMul(4, 0);




//top-voted solution on CodeWars:

function sumMul(n, m) {
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}

