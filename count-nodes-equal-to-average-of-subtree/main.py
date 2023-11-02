import math

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None, name=''):
        self.val = val
        self.left = left
        self.right = right
        self.name = name

def calc_total_num_of_nodes(root):
    subtree_nodes = 1
    if root.left:
        subtree_nodes += calc_total_num_of_nodes(root.left)

    if root.right:
        subtree_nodes += calc_total_num_of_nodes(root.right)

    # traversal complete.
    return subtree_nodes

def calc_value_of_subtree(root):
    subtree_val = root.val
    if root.left:
        subtree_val += calc_value_of_subtree(root.left)

    if root.right:
        subtree_val += calc_value_of_subtree(root.right)

    # traversal complete.
    return subtree_val

def search_tree_for_value(root, num):
    if root.val == num:
        return True

    if root.left:
        if search_tree_for_value(root.left, num):
            return True

    if root.right:
        if search_tree_for_value(root.right, num):
            return True

    # traversal complete.
    return False



class Solution:
    def averageOfSubtree(self, root) -> int:
        return_nodes = 0
        num_of_subtree_nodes = calc_total_num_of_nodes(root)
        val_of_subtree = calc_value_of_subtree(root)
        avg = math.floor(val_of_subtree / num_of_subtree_nodes)

        print(f'[ averageOfSubtree ] {root.name} num_of_subtree_nodes => {num_of_subtree_nodes}')
        print(f'[ averageOfSubtree ] {root.name} val_of_subtree => {val_of_subtree}')
        print(f'[ averageOfSubtree ] {root.name} avg => {avg}')


        if search_tree_for_value(root, avg):
            return_nodes += 1

        if root.left:
            return_nodes += self.averageOfSubtree(root.left)

        if root.right:
            return_nodes += self.averageOfSubtree(root.right)

        return return_nodes

# node6 = TreeNode(6, None, None)
# node5 = TreeNode(5, None, node6)
# node4 = TreeNode(1, None, None)
# node3 = TreeNode(0, None, None)
# node2 = TreeNode(8, node3, node4)

# tree_root = TreeNode(4, node2, node5)




# [0,4,2,3,null,4]

#             0 (a)
#         4 (b)       2 (d)
#     3 (c)              4 (e)

# For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
#   


# [4,8,5,0,1,null,6]

#             4
#         8       5
#       0   1    6



node_e = TreeNode(4, None, None, name='E')
node_d = TreeNode(2, None, node_e, name='D')
node_c = TreeNode(3, None, None, name='C')
node_b = TreeNode(4, node_c, None, name='B')
node_a = TreeNode(0, node_b, node_d, name='A')



sol = Solution()
r = sol.averageOfSubtree(node_a)

print(f'r => {r}')





# num_of_nodes = calc_total_num_of_nodes(node_a)
# print(f'num_of_nodes => {num_of_nodes}')

# val_of_tree = calc_value_of_subtree(node_a)
# print(f'val_of_tree => {val_of_tree}')



# was_found = search_tree_for_value(node_a, 4)
# print(f'found => {was_found}')
