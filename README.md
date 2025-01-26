# Make-Lexicographically-Smallest-Array-by-Swapping-Elements
Challenge at LeetCode.com. Tags: Design, Sorting, Graph.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
As of January 2025, when I solved this problem, the problem's title on leetcode.com is the same as the title of this repository, namely **Make Lexicographically Smallest Array by Swapping Elements**.  Due to the considerations I mention below, it is possible that in the future the title of this problem will be changed on leetcode.com. Most probably the change will consist in dropping the word "Lexicographically" or something like that. If something like this happens, and I find out, I will correct the title of my repository as well.

Just for the sake of correctness: the issue I mention below is not an impediment to solving the problem (which, obviously, I did!!), since it becomes clear from the examples and the answers to the test cases what the task is. 

So, **the problem title** and **the problem statement** do not match.<br/> 
The problem title says "Lexicographically Smallest" but from the given test cases and examples, such as:

 "... the array [2,10,3] is lexicographically smaller than the array [10,2,3] because they differ at index 0 and 2 < 10 ..."

it becomes clear that the task is to **sort the numbers by integer value and not lexicographically** because 2 < 10 by integer value but 2 > 10 lexicographically. Yes, the arrays truely differ at index 0 but the comparison is by integer value.

When we consider the **lexicographical value**, we take into account the characters' code.  Example:

'a' and 'b' have character codes of 97 and 98, therefore 'a' < 'b' and no matter what comes after 'a', it is still less than 'b', such as 'aaaaaaabzyx' < 'b' 

'1' and '2' have character codes of 49 and 50, therefore '1' < '2'  and no matter what comes after '1', it is still less than '2', such as '1111123349' < '2'

It is true that the input is given not as string integers but as 32-bit integers but if we are meant to sort them lexicographically we have to **treat the input as string integers, if not literally, at least conceptually**.

And to drive it home: please take a look at problem **386. Lexicographical Numbers** at https://leetcode.com/problems/lexicographical-numbers/description

Here the input is given as 32-bit integer values (or the upper boundary, to be exact) but when you solve the problem, you have to treat these 32-bit integers as string integers. And when you return the answer, you again have to return 32-bit integers, which while solving the problem you **processed, if not literally, at least conceptually**, as string integers.

An example from this problem:<br/>
Input: n = 13<br/> 
Expected Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

**Here clearly (and correctly!!) 10 < 2.**
 
