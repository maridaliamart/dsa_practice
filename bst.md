Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

example 2:
Input: root = [1,null,2]
Output: 2

I want to find the maximum depth of all branches of a binary search tree. I think I can do this by making a function that takes a node and establishes current depth. Depth is the number of edges from the root node, so root node has a depth of 0. the children of root node has a depth of 1, their children has a depth of 2, and so on. the function can simply check if the node is null. and this can be repeated recursively. we can compare the depths of both subtrees (left and right). 