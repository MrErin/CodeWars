/*
(JavaScript)
https://www.codewars.com/kata/57814d79a56c88e3e0000786

6 kyu
Code Wars Kata Instructions:

Simple Encryption: Alternating Split
Code Wars Instructions:
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

*/


//my solution


function myEncrypt(text, n) {
    //if iterations is less than 0, return the message
    if (n <= 0) {
        console.log("No encryption requested. Message: " + text);
    }
    //if checks if the message is empty. If so, return the message
    if (text != null && text != '') {
        var message = text;
        //iteration (n) counter
        for (var j = 1; j <= n; j++) {
            //initialize the encryption string as empty
            var encryption = '';
            //loop through the string, two characters at a time (this is why i increments 2 instead of 1). also note that i starts at position 1, not 0, because 1 would be the first character that needs to be pulled in the encryption string.
            for (var i = 1; i < message.length; i += 2) {
                //adds every other character gathered by the for loop to the encryption string
                encryption += message.charAt([i]);
            }
            //add the remaining characters to the end of the string. note this for loop begins at index 0, not at one. it will gather the opposite characters than the for loop above did.
            for (var i = 0; i < message.length; i += 2) {
                //add all of the characters gathered in this loop to the end of the string
                encryption += message.charAt([i]);
            }
            //set the input message to the value of the encryption
            message = encryption;
            //set the encryptResult variable to the value of the encryption, used in the decryption function (not required for the kata, just for convenience)
            encryptResult = encryption;
            //log what's happening during each "n" loop 
            console.log("Encryption iteration: " + j + "; message: " + encryption);
        }
        //else condition is if the message is empty
    } else {
        console.log("The message is empty.");
    }
}

function myDecrypt(encryptedText, n) {
    //if iterations is less than 0, return the message
    if (n <= 0) {
        console.log("No decryption requested. Message: " + encryptedText);
    }
    //if checks if the message is empty
    if (encryptedText != null && encryptedText != '') {
        var message = encryptedText;
        //iteration (n) counter
        for (var j = 1; j <= n; j++) {
            //charCount finds the middle of the encryption string
            var charCount = Math.floor(message.length / 2);
            //group 1 is the first half of the string. using the logic of the myEncrypt function, the first half of the string is jumbled characters.
            var group1 = message.slice(0, charCount);
            //group 2 is the second half of the string. each character of group one will need to be slotted in between the characters of group 2
            var group2 = message.slice(charCount);
            var decryption = '';
            //after dividing characters into two groups, build the new string by alternating the next character in each group
            for (var i = 0; i < group2.length; i += 1) {
                //start with the letter from group 2
                decryption += group2.slice([i], [i + 1]);
                //then add a letter from group 1. rinse, repeat until the end of group2
                decryption += group1.slice([i], [i + 1]);
            }
            //log what happened during this "n" iteration
            console.log("Decryption iteration: " + j + "; message: " + decryption);
            //reset the message variable to the current stage of decrypted text
            message = decryption
        }
    } else {
        console.log("The message is empty.");
    }
}
var encryptResult;

myEncrypt("Nashville Software School", 3);
myDecrypt(encryptResult, 3);




//top-voted solution on CodeWars:

//this looks like it uses Regular Expressions and interpolation. Need further research to break down what's happening

function encrypt(text, n) {
    for (let i = 0; i < n; i++) {
        text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
    }
    console.log(text)
}

function decrypt(text, n) {
    let l = text && text.length / 2 | 0
    for (let i = 0; i < n; i++) {
        text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
    }
    console.log(text);

}

encrypt("Nashville Software School", 3)
decrypt("laolwoithvfchoSsS a eNerl", 3)
