# input is a linked list


def find_linked_list_length(l):
    current = l
    counter = 0

    while current:
        counter += 1
        current = current.next

    return counter

# O(2*n) runtime
# O(1) space


def isListPalindrome(l):
    # figure out the length of the list
    length = find_linked_list_length(l)
    # ahead and behind pointers
    al = l
    bl = None

    # advance the ahead pointer to the midpoint of the list
    for _ in range(length // 2):
        # while we're advancing the fast pointer, reverse the first
        # half of the list so that the first half of the list points
                # backwards
        prev = al
        al = al.next
        prev.next = bl
        bl = prev

    # check to see if we have a list with an odd number of nodes
    if length % 2 == 1:
                # if so, take the middle element as the later of the two
                # middle elements
        al = al.next

    # traverse ahead and behind pointers in unison, checking
        # each pointer's value
    while al and bl:
        if al.value != bl.value:
            return False

        al = al.next
        bl = bl.next

    return True
