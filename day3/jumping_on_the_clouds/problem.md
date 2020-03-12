# PROBLEM

Emma is playing a new mobile game that starts with consecutively numbered
clouds. Some of the clouds are thunderheads and others are cumulus. She can jump
on any cumulus cloud having a number that is equal to the number of the current
cloud plus _1_ or _2_. She must avoid the thunderheads. Determine the minimum
number of jumps it will take Emma to jump from her starting postion to the last
cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered _0_ if they are safe or
_1_ if they must be avoided. For example, _c = [0,1,0,0,1,0]_ indexed from
_0...6_ . The number on each cloud is its index in the list so she must avoid
the clouds at indexes _1_ and _5_. She could follow the following two paths: or
. The first path takes _3_ jumps while the second takes _4_.

## Function Description

Complete the jumpingOnClouds function in the editor below. It should return the
minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

-   c: an array of binary integers

---

## Input Format

The first line contains an integer _n_ , the total number of clouds. The second
line contains _n_ space-separated binary integers describing clouds _c[i]_ where
_0 =< i =<n_.

## Output Format

Print the minimum number of jumps needed to win the game.

## Sample Input 0

```
7
0 0 1 0 0 1 0
```

## Sample Output 0

```
4
```

## Explanation 0:

Emma must avoid _c[2]_ and _c[5]_. She can win the game with a minimum of _4_
jumps:

## Sample Input 1

```

6
0 0 0 0 1 0
```

## Sample Output 1

```
3
```

## Explanation 1:

The only thundercloud to avoid is _c[4]_. Emma can win the game in _3_ jumps:
