# Types of Trees in Data Structures

## 1. Binary Tree
- **Description:** Each node has at most two children (left and right).
- **Real-world use case:** Expression parsing, hierarchical data representation.

## 2. Binary Search Tree (BST)
- **Description:** A binary tree where left child < parent < right child.
- **Real-world use case:** Efficient searching and sorting, database indexing.

## 3. AVL Tree
- **Description:** A self-balancing binary search tree.
- **Real-world use case:** Maintaining sorted data with fast lookup, insertion, and deletion.

## 4. Red-Black Tree
- **Description:** A balanced binary search tree with color properties.
- **Real-world use case:** Used in many libraries (e.g., Java TreeMap, C++ STL map/set).

## 5. B-Tree
- **Description:** A self-balancing search tree for large blocks of data.
- **Real-world use case:** Database and file system indexing.

## 6. Heap (Binary Heap)
- **Description:** A complete binary tree used to implement priority queues.
- **Real-world use case:** Task scheduling, Dijkstra’s algorithm.

## 7. Trie (Prefix Tree)
- **Description:** A tree for storing strings where nodes represent common prefixes.
- **Real-world use case:** Autocomplete, spell checking.

## 8. Segment Tree
- **Description:** A tree for storing intervals or segments.
- **Real-world use case:** Range query problems (e.g., sum, minimum).'

## Time Complexity Comparison

| Tree Type           | Search        | Insertion     | Deletion      |
|---------------------|--------------|--------------|--------------|
| Binary Tree         | O(n)         | O(n)         | O(n)         |
| Binary Search Tree  | O(h)\*        | O(h)\*        | O(h)\*        |
| AVL Tree            | O(log n)     | O(log n)     | O(log n)     |
| Red-Black Tree      | O(log n)     | O(log n)     | O(log n)     |
| B-Tree              | O(log n)     | O(log n)     | O(log n)     |
| Heap (Binary Heap)  | O(n)         | O(log n)     | O(log n)     |
| Trie (Prefix Tree)  | O(L)         | O(L)         | O(L)         |
| Segment Tree        | O(log n)     | O(log n)     | O(log n)     |

- *h = height of the tree, which can be up to n in the worst case for an unbalanced BST.
- *L = length of the key (for Trie).