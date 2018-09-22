/* 
(JavaScript)

https://www.codewars.com/kata/546f922b54af40e1e90001da

6 kyu
Code Wars Kata Instructions:

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

*/


//my solution

const sentence = 'The sunset sets at twelve o\' clock.'

const alphabetPosition = (string) => {
	let alphaPos = ''
	for (let i = 0; i < string.length; i++) {       
		let nums = string.toUpperCase().charCodeAt(i)
		if (nums > 64 && nums < 91) alphaPos += (nums - 64) + ' '
	}
	return alphaPos.slice(0, alphaPos.length - 1) 
}

console.log(alphabetPosition(sentence))



//top-voted solution on CodeWars:


