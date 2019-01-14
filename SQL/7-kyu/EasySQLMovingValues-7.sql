/*
(SQL) EasySQLMovingValues

https://www.codewars.com/kata/594a389387a7c6a77a000005/train/sql

7 kyu
Code Wars Kata Instructions:

You have access to a table of monsters as follows:

monsters table schema

id
name
legs
arms
characteristics
Your task is to make a new table where each column should contain the length of the string in the column to its right (last column should contain length of string in the first column). Remember some column values are not currently strings. Column order and titles should remain unchanged:

output table schema

id
name
legs
arms
characteristics

Example: 

Should Return:

*/


-- my solution


SELECT
    length((name)
::text) as id
  , length
((legs)::text) as name
  , length
((arms)::text) as legs
  , length
((characteristics)::text) as arms
  , length
((id)::text) as characteristics

FROM monsters


-- top-voted solution on CodeWars:

SELECT
    length(name) AS id,
    length(legs::text) AS name,
    length(arms::text) AS legs,
    length(characteristics) AS arms,
    length(id::text) AS characteristics
FROM
    monsters
