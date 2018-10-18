/*
(SQL) SQLASCIIConverter

https://www.codewars.com/kata/easy-sql-ascii-converter/train/sql

7 kyu
Code Wars Kata Instructions:

Given a demographics table in the following format:

demographics table schema

id
name
birthday
race
you need to return the same table where all text fields (name & race) are changed to the ascii code of their first byte.

e.g. Verlie = 86 Warren = 87 Horace = 72 Tracy = 84

Example: 

Should Return:

*/


-- my solution

SELECT
    id
  , ASCII(LEFT(name, 1)) as name
  , birthday
  , ASCII(LEFT(race, 1)) as race

FROM demographics



-- top-voted solution on CodeWars:

SELECT id, ascii(name) as name, birthday, ascii(race) as race
FROM demographics


