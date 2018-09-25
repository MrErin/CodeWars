/*
(JavaScript) SimpleFunReverseLetter

https://www.codewars.com/kata/simple-fun-number-176-reverse-letter

7 kyu
Code Wars Kata Instructions:

Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/


//my solution
function reverseLetter(str) {
    return str.split("").reverse().join("").replace(/[^a-z]/gi, '')
    
   }