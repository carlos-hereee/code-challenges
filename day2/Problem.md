# PROBLEM

Your goal in this Kata is to implement a difference function, which substracts
one list from another and returns the result

It should remove all values from a list _a_, which are present in list _b_.

```
array_diff([1,2], [1]) == [2]
```

If a value is presented in _b_, all of its occurrences must be removed from the
other:

```
array_diff([1,2,2,2,3], [2]) == [1, 3]
```

Challenge from codewars
