/*
(typescript) RomanNumeralsEncoder

https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/typescript

6 kyu
Code Wars Kata Instructions:

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example: 
solution(1000); // should return 'M'

*/

//! There cannot be more than 3 identical symbols in a row

//my solution

const solution = (inputNum: number): string => {
  let value: number = 0;
  const romanNumerals: {}[] = [
    { M: 1000 },
    { CM: 900 },
    { D: 500 },
    { CD: 400 },
    { C: 100 },
    { XC: 90 },
    { L: 50 },
    { XL: 40 },
    { X: 10 },
    { IX: 9 },
    { V: 5 },
    { IV: 4 },
    { I: 1 },
  ];
  let result: string = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    for (const key in romanNumerals[i]) {
      while (value + romanNumerals[i][key] <= inputNum) {
        value += romanNumerals[i][key];
        result += key;
      }
    }
  }
  return result;
};

solution(2008);

//top-voted solution on CodeWars:
export function solution(number: number): string {
  const ROMAN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';
  for (let k in ROMAN) {
    result += k.repeat(Math.floor(number / ROMAN[k]));
    number = number % ROMAN[k];
  }

  return result;
}