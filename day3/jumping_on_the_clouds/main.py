def jumping_on_clouds(c):
    '''
    Find the mininum number of jumps 
    You can either jump 1 step or 2
    Cannot land on a 1
    '''
    # keep track of the steps
    steps = 0
    # keep track of the current cloud
    current = 0
    # traverse c
    while current < len(c)-1:
        # check if the next+1 step is a 1
        if current + 2 == len(c) or c[current+2] == 1:
            # jump 2
            current += 1
        # else the next step is 0
        else:

            current += 2
        # increment step by 1
        steps += 1

    # if you cannot jump anymore
    return steps


# test case
c = [0, 1, 0, 0, 1, 0, 0]
print('mininum number of steps should be 3: ', jumping_on_clouds(c))
