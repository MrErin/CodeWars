/* 
(JavaScript)
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

7 kyu
Code Wars Kata Instructions:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"]


*/


//my solution

var data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
function openOrSenior(data) {
    //create empty member list
    var members = [];

    for (var i = 0; i < data.length; i++) {
        //if condition reflects the kata requirements: a Senior member is 55 or older and has a handicap greater than 7. Everyone else is an "Open" member
        if (data[i][0] >= 55 && data[i][1] > 7) {
            members.push("Senior");
        } else {
            members.push("Open");
        }
    }
    console.log(members);
}

openOrSenior(data);




//top-voted solution on CodeWars:



// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

