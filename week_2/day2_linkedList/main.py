"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.

A Node is defined as:

    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):
    '''

    '''
    # using fast and slow pointers
#     init fast and slow pointer
    fast = head
    slow = head
    # fast pointer iterates twice as fast as the slow pointer
    # iterate both pointers thourgh our linked list as long as fast pointer
    # hasnt reached the end of the list
    # check wheter fast is a valid node and the node that it will be skipping
    while fast and fast.next:  # checks if fast has reached the end of the list
        # is also a void node
        # update the pointers first to avoid start match
        slow = slow.next
        fast = fast.next.next

    # if the pointers end up pointing at the same node, then we have a cycle
        if fast == slow:
            return True

    # if the fast pointer reaches the end of the list, then no cycle

    return False
