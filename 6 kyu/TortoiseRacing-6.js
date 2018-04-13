/* https://www.codewars.com/kata/55e2adece53b4cdcb900006c

6 kyu
Code Wars Kata Instructions:

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin.

Examples
race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37)   => [3, 21, 49]

*/


//my solution

//distance = rate * time

const race = (v1, v2, g) => {
	//per requirements
	if(v1 >= v2) return null
    
	//calculate difference in speed between the faster and slower tortoise
	let diff = v2 - v1
    
	//distance / speed = time in hours. Round down
	let hour = Math.floor(g / diff)
    
	//I found a solution online that used modulous operator to calculate minutes but I'm not clear on why. in any case, the remaining math is to multiply that by minutes in the hour and divide the entire thing by the difference in rate.
    let min = Math.floor((g % diff) * 60 / diff)
    
    //similar problem to above. I'm not sure why the modulous is needed, but it does work.
	let sec = Math.floor((((g % diff) * 60) % diff) * 60 / diff)
	return [hour, min, sec]

}

console.log(race(720, 850, 70))




//top-voted solution on CodeWars:

function race(v1, v2, g) {
    let time = g / (v2 - v1);
    return v2 > v1 ? [Math.floor(time), Math.floor(time * 60 % 60), Math.floor(time * 3600 % 60)] : null;
}
