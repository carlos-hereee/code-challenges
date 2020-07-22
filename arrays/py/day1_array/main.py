
import math
import os
import random
import re
import sys

# Complete the countingValleys function below.


def countingValleys(n, s):
    # s is a string of Us and Ds
    # keep track of the height
    height = 0
    # keep track of the number of valley
    valleys = 0
    # have a variable that kepp track of the previous step

    # keep a dict of elevation changes associated with { U: 1, D: -1 }

    # loop through the string s
    for step in s:
        # depending on wheter we see a U or a D
        if step == 'U':
            # update the height counter accordingly
            height += 1
        # if the height counters return to 0
            if height == 0:
                valleys += 1
        else:
            height -= 1
            # how do we know we reached a height of 0 as a result of
            # climbing down from a hill vs climbing from a valley?
            # keep track of the most recent step we took, so that we know if
            # we climbed up from a valley
            # increment our valleys counter
    # return the valleys counter
    return valleys

    # it only counts as a valley if we start at sea level and make our way
    # back to sea level
