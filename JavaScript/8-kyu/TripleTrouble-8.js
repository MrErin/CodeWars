/* 
(JavaScript)
https://www.codewars.com/kata/5704aea738428f4d30000914

8 kyu
Code Wars Kata Instructions:

#Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/


//my solution

function tripleTrouble(one, two, three) {
    var built = '';
    for (var i = 0; i < one.length; i++) {
        console.log(built);
        //slice adds one character at a time
        built += one.slice([i], i + 1);
        built += two.slice([i], i + 1);
        built += three.slice([i], i + 1);
        console.log("Iteration " + i + "; String: " + built);
    }
    console.log(built);
}

tripleTrouble("aa", "bb", "cc");




//top-voted solution on CodeWars:

function tripleTrouble(one, two, three) {
    var result = "";
    for (let i = 0; i < one.length; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}
