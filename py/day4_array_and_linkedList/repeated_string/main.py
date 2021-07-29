import math


def repeated_string(s, n):
    '''
    s = is a string to repeat 
    n = the number of a characters to consider

    n will be the length of the new string
    then we will need to return the number of `a`s 


    find the ratio of a to all the other letters

    '''
    # keep track of the a's
    a_counter = 0
    # traverse the string 's' for a's
    for letter in s:
        # check if the letter is a
        if letter == 'a':
            # add 1
            a_counter += 1

    # a:total and  x: n
    # find the ratio  is ratio = (a_counter*n)/len(s)
    a_ratio = (a_counter*n)/(len(s))
    return int(math.ceil(a_ratio))


s = 'aba'
n = 2000

print(repeated_string(s, n))
