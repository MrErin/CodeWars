/* 
(JavaScript)
https://www.codewars.com/kata/55709dc15ebd283cc9000007

6 kyu
Code Wars Kata Instructions:

Jurassic Word is full of wonderful prehistoric creatures...eating a lot. In this kata your task is to take in a lunchtime scene of a dinosaur and their food, and decipher exactly what ate what.

Now, there isn't much mystery in what a dino might be eating. It can be one of:

String dead_dino = "_C     C}>";   // When this case is included in your return string, use "a dead dino" instead of "dead_dino"
String flowers   = "iii     iii";
String leaves    = "|||     |||";
String something  = "...     ...";  // for any other food you could encounter (dots being the food, in a regexp notation, all the characters in the middle being the bitemarks)
These empty spaces in the middle of each food are reserved for the bitemarks made by a dinosaur, which will always be 5 characters long.

Unfortunately, you don't get to see the action. You have to look at the bite marks made on the leftovers, and make your judgement that way.

There are four kinds of dinosaurs in the park that you know of:

t_rex = "VvvvV"; 
When this case is included in your return string, 
use "T-Rex" instead of "T_Rex"

brachiosaurus = "uuuuu";
velociraptor = "vvvvv";
triceratops = "uuVuu";

Although a dinosaur will be eating one of the three available foods, some dinosaurs will only eat certain items. For example, both the brachiosaurus and the triceratops are vegetarians and would love to eat flowers, but only the brachiosaurus would be able to reach the leaves. On the other hand, the T-Rex and the velociraptor would only want to eat dead dinos. Thus, if you see their bitemarks on a food that you know they wouldn't be eating, you must be mistaken and something else is feeding...(DUN DUN DUN). This is also true for bitemarks you have never seen before!

Here are a few examples of how your program should work:

lunchTime("_CVvvvVC}>")   // => "A T-Rex is eating a dead dino."
lunchTime("_CvvvvvC}>")   // => "A velociraptor is eating a dead dino."
lunchTime("iiiuuVuuiii")  // => "A triceratops is eating flowers."
lunchTime("|||uuVuu|||")  // => "Something is eating leaves."
lunchTime("_CVvVvVC}>")   // => "Something is eating a dead dino."
NOTE: All of these strings for bitemarks and food are given to you.

*/

//top-voted solution on CodeWars:
const food = {
  dino   : { desc: 'a dead dino', marks: ['_C', 'C}>'] },
  flowers: { desc: 'flowers', marks: ['iii', 'iii'] },
  leaves : { desc: 'leaves', marks: ['|||', '|||'] }
};

const biteMarks =  {
  'VvvvV': {name: 'A T-Rex', diet: [food.dino]},
  'vvvvv': {name: 'A velociraptor', diet: [food.dino]},
  'uuuuu': {name: 'A brachiosaurus', diet: [food.flowers, food.leaves]},
  'uuVuu': {name: 'A triceratops', diet: [food.flowers]},
  'unknown': {name: 'Something', diet: []}
};

class JurassicWord {
  
  lunchTime(scene) {
    let meal = Object.keys(food)
      .map(key => food[key])
      .find(f => scene.startsWith(f.marks[0]) && scene.endsWith(f.marks[1])) || 'something';
    
    let marks = scene.substr((meal === 'something') ? 3 : meal.marks[0].length, 5);
    const eater = biteMarks[marks] && (meal==='something' || biteMarks[marks].diet.includes(meal))
      ? biteMarks[marks]
      : biteMarks.unknown;
    
    return `${eater.name} is eating ${meal.desc || meal}.`;
  }
}

