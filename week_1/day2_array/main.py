

def array_diff(a, b):
    # for every b that is in a
    for i in b:
        # and while a and b match
        while i in a:
            # if they match
            if i in a:
                # remove that iteration
                a.remove(i)
    return a


print('array', array_diff([1, 2, 2, 2, 3], [2]))
