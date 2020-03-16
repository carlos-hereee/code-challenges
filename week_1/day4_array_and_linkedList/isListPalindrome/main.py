# input is a linked list


def find_linked_list_length(l):
    current = l
    length = 0
    while current:
        length += 1
        current = current.next

    return length


def isListPalindrom(l):
    '''
    Palindrom: A string that doesnt change when reversed 
    it reads the same forward and backwards

    figure out if the elements in the linked list from a valid palindrome

    how would we check if a palindrome is valid in the first place?



    now that we have a plan for checking if a palindrome is valid how do we adapt that strategy to work on a linked list
    '''
    # what data structre to use to hold the nodes to make sure they match

    # if we were using a stack, as were traversing, push every node to the stack
    # mark the ones we get to as visited and compare the ones we pop from the stacck if all the those match, then

    # figure out the length of the of the linked list by traversing it
    # move a pointer to the half-way point
    # add prev pointer to the first half

    # init another pointer, at the middle element
    # have the pointers traverse in both directions,
    # check elements on each iteration

    # or walk from both ends towards the middle
    length = find_linked_list_length(l)

    a = l
    a.prev = None

    # advance a to the mid point of the list
    for _ in range(length // 2):
        # set up previous pointers
        prev = a
        a = a.next
        a.prev = prev

    # init b to the same node as a
    b = a

    # traverse both a and b until a resaches the end of the list
    while a:
        if a.value != b.value:
            return False
        a = a.next
        b = b.prev
    return True
