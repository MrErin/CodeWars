/* 
(JavaScript)

https://www.codewars.com/kata/5626b561280a42ecc50000d1

6 kyu
Code Wars Kata Instructions:

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []

Enjoy it!!

*/


//my solution

function sumDigPow(a, b) {
  //this creates an array of all numbers given the start and stop variables (a and b). I believe the underscore in the map argument here calls underscore.js, a library of functions. Not sure though.
  //the ...Array(b-a) is the length parameter. It's saying, "the array's length will be the range of numbers between b and a"
  const arr = Array(...Array(b - a)).map((_, i) => i + a)
  function calc(num) {
    //this splits the elements of the array into strings so we can do operations on the individual digits
    const numArray = String(num).split('').map(Number).map((n, i) => n ** (i + 1))
    //the reduce function adds the numbers together
    return numArray.reduce((acc, n) => acc + n);
  }
  //the filter returns only the Eureka numbers that pass the kata's logical requirements
  return arr.filter(n => (calc(n) === n));
}
console.log(sumDigPow(0, 150));


//Documentation that helped me tremendously with this problem and with maps in general
//https://medium.com/@svitekpavel/why-i-felt-in-love-with-functional-programming-fcaa2f8d877e
//https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464

//top-voted solution on CodeWars:

function sumDigPow(a, b) {
  const ans = [];
  while (a <= b) {
    if (a.toString().split('').reduce((x, y, i) => x + +y * (i + 1), 0) == a) { ans.push(a); }
    a++;
  }
  return ans;
}
