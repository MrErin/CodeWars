/* https://www.codewars.com/kata/578553c3a1b8d5c40300037c

7 kyu
Code Wars Kata Instructions:

Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
Note: you shouldn't mutate the input

*/


//my solution

function binaryArrayToNumber (biNums) {
    //need to reverse the numbers so they can be read from right to left in the loop
    let nums = biNums.reverse()
    let binary = 0
    console.log("Start Nums: [" + nums + "]");
    for (let i = 0; i < nums.length; i++) {
        //each time through the loop, multiply the given element by two to the power of the iteration (see OneNote documentation on how to translate binary to base 10)
        binary += (nums[i] * Math.pow(2,i))
        console.log("Iteration: " + i + " Binary Sum: " + binary + " Nums: [" + nums + "]");
    }
    console.log(binary);
};

const nums = [1, 1, 0, 1]
//expect 11
binaryArrayToNumber(nums)


/* My solution works, but it breaks the rules of not mutating the array. Apparently the real solution is a function of JavaScript, where it parses binary automatically, shown below. Frankly, I feel this is cheating but whatever...
*/


//top-voted solution on CodeWars:
const binaryArrayToNumber = nums => parseInt(nums.join(''), 2);


