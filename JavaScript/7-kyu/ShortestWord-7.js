/* 
(JavaScript)
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

7 kyu
Code Wars Kata Instructions:

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

example: bitcoin take over the world maybe who knows perhaps
should return: 3

*/


//my solution
function findShort(s) {
    //split separates a string into elements of an array. the space between the quotes is the delimiter; if no delimiter is passed, the split will seaparate each character
    let splitS =  s.split(' ')
    //sort function returning sort by length rather than alphabetization
    splitS.sort(function(a,b){return a.length - b.length})
    console.log(splitS[0].length)
}

const string = "bitcoin take over the world maybe who knows perhaps"
findShort(string)




//top-voted solution on CodeWars:

function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

