Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

Note:
The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
A subtree of root is a tree consisting of root and all of its descendants.

Params -> tree, array format 

Return value -> int, rep number of nodes that match the avg of that node's subtree
  1. return value - return_nodes
  2. subtree_value - total val of all subtree nodes
  3. subtree_nodes - number of nodes in subtree
  4. current_node - current node being traversed.

Examples
1. 
Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.

  Bottom up approach
  current_node = 0, subtree_value = 0, subtree_nodes = 1
    total_val = 0, nodes = 1; => 0/1 = 0
      is there a 0 in the subtree, yes, increment return_nodes

  current_node = 8, subtree_value = 9, subtree_nodes = 3
    total_val = 9, nodes = 3; => 9/3 = 3
      is there a 3 in subtree?  No, do not increment return_nodes



Psuedo code
  0. def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
      return_nodes = 0
      num_of_subtree_nodes = calc_total_num_of_nodes(root)
      val_of_subtree = calc_value_of_subtree(root)
      avg = math.floor(val_of_subtree / num_of_subtree_nodes)
      
      if search_tree_for_value(avg):
        return_nodes += 1

      # recursive bit
      if current_node.left:
          return_nodes += averageOfSubtree(current_node.left)
        
      if current_node.right:
          return_nodes += averageOfSubtree(current_node.right)

      return return_nodes



  1. get total num of nodes
    def calc_total_num_of_nodes(root):
        subtree_nodes = 1
        if current_node.left:
            subtree_nodes += calc_total_num_of_nodes(current_node.left)
        
        if current_node.right:
            subtree_nodes += calc_total_num_of_nodes(current_node.right)

        # if current_node.left == null and current_node.right == null:
        #     return subtree_nodes

        # traversal complete.
        return subtree_nodes


  2. get total value of nodes,
    def calc_value_of_subtree(root):
        subtree_val = root.val
        if current_node.left:
            subtree_val += calc_value_of_subtree(current_node.left)
        
        if current_node.right:
            subtree_val += calc_value_of_subtree(current_node.right)

        # if current_node.left == null and current_node.right == null:
        #     return subtree_val

        # traversal complete.
        return subtree_val


  3. once we have the subtree num of nodes, and the subtree total value
    avg = value_of_subtree / total_num_of_nodes
    
  4. search tree for a node that's val is avg.
    def search_tree_for_value(num):
        found = False

        if current_node.val == num:
            return True
        
        if current_node.left:
            found_left = search_tree_for_value(current_node.left)
        
        if current_node.right:
            found_right = search_tree_for_value(current_node.right)

        # if current_node.left == null and current_node.right == null:
        #    return Flase

        # traversal complete.
        return subtree_val