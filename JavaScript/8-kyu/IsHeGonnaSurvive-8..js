/*
(JavaScript) IsHeGonnaSurvive

https://www.codewars.com/kata/is-he-gonna-survive

8 kyu
Code Wars Kata Instructions:

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)


Example: 

hero(10,5)

Should Return:
True

*/


//my solution
function hero(bullets, dragons){
    if ((bullets/dragons) >= 2){
        return true
    } else {
        return false
    }
}

//top-voted solution on CodeWars:

function hero(bullets, dragons){
    return bullets >= dragons * 2
  }