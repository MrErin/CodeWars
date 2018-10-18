/*
(SQL) SQLBasicsMod

https://www.codewars.com/kata/sql-basics-mod/train/sql

8 kyu
Code Wars Kata Instructions:

Given the following table 'decimals':

decimals table schema

id
number1
number2
Return a table with one column (mod) which is the output of number1 modulus number2.

Example: 

Should Return:

*/


-- my solution



SELECT (decimals.number1 % decimals.number2) as mod

FROM decimals


-- top-voted solution on CodeWars:

select
    mod(number1, number2) as mod
from decimals


