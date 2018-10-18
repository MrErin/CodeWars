/*
(SQL) SQLMathsWithStringManipulations

https://www.codewars.com/kata/sql-basics-maths-with-string-manipulations/train/sql

7 kyu
Code Wars Kata Instructions:

Given a demographics table in the following format:

demographics table schema

id
name
birthday
race
return a single column named 'calculation' where the value is the bit length of name, added to the number of characters in race.

Example: 

Should Return:

*/


-- my solution

SELECT

    bit_length(name) + char_length(race) as calculation

FROM demographics



-- top-voted solution on CodeWars:

select bit_length(name)+length(race) calculation
from demographics
