/* https://www.codewars.com/kata/563cf89eb4747c5fb100001b

7 kyu
Code Wars Kata Instructions:

The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples: 

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]


*/


//my solution

var numbers = [5, 12, 7, 1, 19, 8, 9, 13, 4, 1];
function removeSmallest(numbers) {
    //as a starting place, set the "smallest" variable at the first number
    var smallest = numbers[0];

    //loop through every number in the array
    for (var i = 0; i < numbers.length; i++) {
        
        //if the current number is smaller than whatever is in the "smallest" variable, make the current number the new "smallest" number
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    console.log("Smallest is " + smallest);
    console.log("Position of smallest is " + numbers.indexOf(smallest));

    //remove the smallest number by its index in the array
    numbers.splice(numbers.indexOf(smallest), 1);
    console.log("The array now contains the following numbers: " + [numbers])
}

removeSmallest(numbers);



//top-voted solution on CodeWars:

function removeSmallest(numbers) {
    if (!numbers) return [];
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}

