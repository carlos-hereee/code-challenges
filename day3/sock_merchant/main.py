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
    # create a set
    couple = set()
    # traverse ar
    for sock in ar:
        # if a sock in ar is not in the set
        if sock not in couple:
            # add it to the set
            couple.add(sock)
        # else sock is already in the set
        else:
            # remove that sock in the set and add a pair
            couple.remove(sock)
            pairs += 1

    return pairs


# create a test case
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

print('number of pairs should be 2: ', sock_merchant(n, ar))
