/* 
(JavaScript)
https://www.codewars.com/kata/5572f7c346eb58ae9c000047

7 kyu
Code Wars Kata Instructions:

NEXT KATA >

###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
####Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
###Pattern:

1
22
333
....
.....
nnnnnn
###Examples:

pattern(5):

1
22
333
4444
55555

Should return: 1\n22\n333\n4444\n55555

* Hint: Use \n in string to jump to next line

*/


//my solution

function pattern(n) {
    let symbol = 1
    let output = ''
    //this loop will create the new lines of each pattern. it counts up to "n", adds the line break at the end to the output, and incrememnts the symbol variable
   for (let i = 0; i < n; i++) {
       //every time we create a new line, add \n to the output string
       output += '\n'

       //this loop creates each individual line, building output and using the "symbol" number as the counter stop
        for (let s = 0; s < symbol; s++) {
            output += symbol
        }
        symbol++
    }
    //neet to remove the initial "\n" from the string
    output = output.substring(1)
    console.log(output)
}

pattern(10)


//top-voted solution on CodeWars:

function pattern(n) {
    var res = [], i;
    for (i = 1; i <= n; i++) {
        res.push(Array(i + 1).join(i));
    }
    return res.join('\n');
}
