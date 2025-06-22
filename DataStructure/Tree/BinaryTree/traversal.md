### Preorder Traversal
  **Definition:**  
  Preorder traversal is a method of traversing a binary tree where the nodes are visited in the order of root, left subtree, and then right subtree. This traversal is often used to create a copy of the tree or to get a prefix expression of the tree. 
  **Example Tree:**
  ```
        1
       / \
      2   3
     / \   \
    4   5   6
  ```
  **Preorder Traversal Sequence:**
  1 → 2 → 4 → 5 → 3 → 6
  **Explanation:**
  - Start at the root (1).
  - Visit the left subtree (2), then its left child (4) and right child (5).
  - Move to the right subtree (3) and visit its right child (6).

  ### Inorder Traversal
  **Definition:**  
  Inorder traversal is a method of traversing a binary tree where the nodes are visited in the order of left subtree, root, and then right subtree. This traversal is commonly used to retrieve the nodes of a binary search tree in sorted order.
  **Example Tree:**
  ```
        1
       / \
      2   3
     / \   \
    4   5   6
  ``` 
  **Inorder Traversal Sequence:**
  4 → 2 → 5 → 1 → 3 → 6
  **Explanation:**
  - Start at the leftmost node (4).
  - Visit the parent (2), then its right child (5). 
  - Move up to the root (1), then visit the right subtree (3) and its right child (6).

  ### Postorder Traversal
  **Definition:**  
  Postorder traversal is a method of traversing a binary tree where the nodes are visited in the order of left subtree, right subtree, and then root. This traversal is commonly used to delete the tree or to get a postfix expression of the tree.

  **Example Tree:**
  ```
        1
       / \
      2   3
     / \   \
    4   5   6
  ```

  **Postorder Traversal Sequence:**  
  4 → 5 → 2 → 6 → 3 → 1 


  **Explanation:**  
  - Start at the root (1).
  - Visit all nodes at the next level (2, 3).
  - Continue to the next level (4, 5, 6), visiting from left to right.  
  - Finally, visit the root (1).
  ### Level Order Traversal
  **Definition:**  
  Level order traversal is a method of traversing a binary tree where the nodes are visited level by level, starting from the root and moving downwards. This traversal is often used to print the nodes of the tree in a breadth-first manner.
  **Example Tree:**
  ```   
        1
       / \
      2   3
     / \   \
    4   5   6
  ```
  **Level Order Traversal Sequence:**
  1 → 2 → 3 → 4 → 5 → 6
  **Explanation:**
  - Start at the root (1).
  - Visit all nodes at the next level (2, 3).
  - Continue to the next level (4, 5, 6), visiting from left to right.
  - This traversal is typically implemented using a queue to keep track of the nodes at each level.
## Summary
- **Preorder Traversal:** Root → Left → Right
- **Inorder Traversal:** Left → Root → Right
- **Postorder Traversal:** Left → Right → Root
- **Level Order Traversal:** Level by level from top to bottom
## Conclusion
Binary tree traversal methods are essential for various operations such as searching, inserting, and deleting nodes.
Understanding these traversal techniques is crucial for efficiently working with binary trees in data structures and algorithms. Each traversal method has its own use cases and applications, making them valuable tools for programmers and computer scientists.
These traversal methods can be implemented using recursion or iteration, depending on the specific requirements and constraints of the problem at hand. Mastery of these techniques is fundamental for anyone working with binary trees in computer science and software development.



## Breadth First Search (BFS)
* Level Order Traversal

**Definition:**  
Breadth First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level. This algorithm is used for finding the shortest path on unweighted graphs, among other applications.

**Example Tree:**
```
      1
     / \
    2   3
   / \   \
  4   5   6
```

**BFS Sequence:**
1 → 2 → 3 → 4 → 5 → 6

**Explanation:**
- Start at the root (1).
- Visit all nodes at the next level (2, 3).
- Continue to the next level (4, 5, 6), visiting from left to right.
- This traversal is typically implemented using a queue to keep track of the nodes at each level.

**BFS Algorithm (Pseudocode):**
```markdown
// BFS using a queue
function bfs(root: TreeNode | null): void {
    if (!root) return;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const node = queue.shift()!;
        console.log(node.value); // Visit node
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
```


## Depth First Search (DFS)
* Preorder, Inorder, Postorder Traversal

**Definition:**  
Depth First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node in a graph) and explores as far as possible along each branch before backtracking. DFS is useful for tasks like topological sorting, detecting cycles, and pathfinding in certain scenarios.

**Example Tree:**
```
      1
     / \
    2   3
   / \   \
  4   5   6
```

**DFS (Preorder) Sequence:**
1 → 2 → 4 → 5 → 3 → 6

**Explanation:**
- Start at the root (1).
- Visit the node, then recursively visit the left subtree (2, 4, 5).
- After finishing the left subtree, visit the right subtree (3, 6).
- This traversal is typically implemented using recursion or a stack.

**DFS Algorithm (Pseudocode):**
```typescript
// DFS using recursion (preorder)
function dfs(root: TreeNode | null): void {
    if (!root) return;
    console.log(root.value); // Visit node
    dfs(root.left);
    dfs(root.right);
}
```

**Why is a stack used in DFS?**  
A stack is used in DFS to keep track of the nodes to be visited next. In recursive implementations, the call stack manages this automatically. In iterative implementations, an explicit stack is used to simulate the recursive process. The stack ensures that the traversal explores as far as possible along each branch before backtracking, following the Last-In-First-Out (LIFO) principle.
```




