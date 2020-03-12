import math
import random


def sock_merchant(n, ar):
    '''
    Find the number of pairs of socks with:
    n = number of total socks. 
    ar = an array were every number represents a different color

    '''
    # keep track of number of pairs
    pairs = 0
    # keep track of the index that is being compared
    current = 0
    # while length and the current index do not match
    while len(ar) > current:
        # traverse the ar
        for index, sock in enumerate(ar):
            # index error check
            if index > len(ar) - 1:
                return pairs
            # if a duplicate number is
            if ar[current] == ar[index+1]:
                # remove both numbers from the array
                ar.pop(current)
                ar.pop(index)
                # add 1 to the pairs counter
                pairs += 1
            # else there is wanst not a a duplicate
            else:
                index += 1
        # after ar traversal is done move to next current
        current += 1
    # return the number of pairs
    return pairs


# create a test case
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

print(sock_merchant(n, ar))
