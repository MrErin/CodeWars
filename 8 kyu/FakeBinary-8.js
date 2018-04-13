/* https://www.codewars.com/kata/57eae65a4321032ce000002d

8 kyu
Code Wars Kata Instructions:

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Example: 45385593107843568
Should Return: 01011110001100111

*/


//my solution


//first attempt at regular expressions. the numbers in the [] brackets are the characters that will be replaced. the /g flag ensures that it replaces every instance of those numbers, not just the first instance
function fakeBin(x) {
    return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
}


//top-voted solution on CodeWars:

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
