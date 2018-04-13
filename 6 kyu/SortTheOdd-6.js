/* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

6 kyu
Code Wars Kata Instructions:

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example: 
sortArray([5, 3, 2, 8, 1, 4]) == 

Should Return:
[1, 3, 2, 8, 5, 4]

*/


//my solution

var array = [5, 3, 2, 8, 1, 4];

function sortArray(array) {
    var sorted = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            sorted.push(array[i]);
        }//end if
    }//end for
    sorted.sort();
    console.log("The odd numbers are: " + sorted);
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sorted.splice([i], 0, array[i]);
            console.log("Array builder: " + sorted);
        }//end if
    }//end for
    console.log("The rebuilt array: " + sorted);
}

sortArray(array);




//top-voted solution on CodeWars:

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}
