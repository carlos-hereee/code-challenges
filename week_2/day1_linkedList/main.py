
import math
import os
import random
import re
import sys


class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node

        self.tail = node

# Complete the insertNodeAtPosition function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#


def insertNodeAtPosition(head, data, position):
    '''
    Insert data to the linked list where:
    Head = linked list
    Data = data to insert
    Postion = the target index 

    Traverse the linked list until we get to the target and insert the data to the linked list
    '''
    linked = SinglyLinkedList()
    # keep track of the index
    index = 0
    current = head
    # traverse the linked list
    while current:
        # check if the index is the target
        linked.insert_node(current.data)
        if index == position-1:
            # insert to the target to linked list
            # current.insert_data(data)
            linked.insert_node(data)
        index += 1
        current = current.next

    return linked.head
    # return head
