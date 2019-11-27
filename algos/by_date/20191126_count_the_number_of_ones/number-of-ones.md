# Count the Number of Ones
​
#### Prompt
​
Given a _sorted_ array of bits (0s and 1s), determine the number of ones in the array.
​
#### Examples:
​
```
input1: [0, 0, 0, 1, 1, 1, 1, 1]
output1: 5
​
input2: [1, 1, 1, 1, 1, 1, 1, 1]
output2: 8
​
input3: [0, 0, 0, 0, 0, 0, 0, 0]
output3: 0
​
input4: [0, 0, 0, 0, 0, 1, 1, 1]
output4: 3
​
input5: [1]
output5: 1
​
input6: [0]
output6: 0
​
```
​
​
#### Input:
`input` = `Array of Integers`
​
​
#### Output
`result` = `Integer`
​
​
#### Constraints:
​
**Time**: `O(log n)`
​
**Space**: `O(1)`
​
You will always only expect an array with 1s and 0s.    
No need to worry about an empty array input case.
​
​
#### Hints:
​
* What algorithm can we use on _sorted_ data sets to help us optimize this solution?
* Which value in the array are we looking for, from which determining the number of ones is constant time?

Testing slack
