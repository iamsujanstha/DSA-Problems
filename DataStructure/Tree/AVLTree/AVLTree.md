# AVL Tree

An **AVL Tree** is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.

## Properties

- Balance Factor = Height(left subtree) - Height(right subtree)
- For every node, balance factor ∈ {-1, 0, 1}

## Example

Let's insert the following values in order: `30, 20, 40, 10`

### Step-by-step Insertion

1. **Insert 30**
  ```
  30
  ```

2. **Insert 20**
  ```
    30
   /
  20
  ```

3. **Insert 40**
  ```
    30
   /  \
  20  40
  ```

4. **Insert 10**
  ```
     30
    /  \
    20  40
   /
  10
  ```

Now, the balance factor of node 30 is 2 (left-heavy), so we need to rotate.

## Rotations

### Left Rotation (LL Rotation)

Occurs when a node is inserted into the left subtree of the left child.

**Before Rotation:**
```
   30
  /
  20
 /
10
```

**After Right Rotation:**
```
  20
 /  \
10  30
```

### Right Rotation (RR Rotation)

Occurs when a node is inserted into the right subtree of the right child.

### Left-Right (LR) and Right-Left (RL) Rotations

- **LR Rotation:** Left child, then right child (double rotation)
- **RL Rotation:** Right child, then left child (double rotation)

## Summary Table

| Rotation | When to Use         | Example Structure Before | Example Structure After |
|----------|---------------------|-------------------------|------------------------|
| LL       | Left-Left case      | 30→20→10                | 20→10,30               |
| RR       | Right-Right case    | 10→20→30                | 20→10,30               |
| LR       | Left-Right case     | 30→20→25                | 25→20,30               |
| RL       | Right-Left case     | 10→30→20                | 20→10,30               |

---

**AVL Trees** ensure O(log n) time complexity for search, insert, and delete operations by maintaining balance using rotations.

## Time Complexity
| Operation | Time Complexity |
|-----------|-----------------|
| Search    | O(log n)        |
| Insert    | O(log n)        |
| Delete    | O(log n)        |     
## Real-world Use Cases
- **Databases:** For maintaining sorted data with fast access.
- **Memory Management:** Used in memory allocation algorithms.  
- **Network Routing:** For efficient routing table management.
- **File Systems:** For maintaining directory structures.
## Advantages
- **Fast Lookups:** O(log n) time complexity for search, insert, and delete
- **Self-Balancing:** Automatically maintains balance, ensuring efficient operations.
- **Sorted Data:** Keeps data sorted, allowing for efficient range queries.
## Disadvantages
- **Complex Implementation:** More complex than simple binary search trees.
- **Overhead:** Requires additional space for balance factors and rotations.
## Summary
AVL Trees are a powerful data structure that combines the properties of binary search trees with self-balancing capabilities. They are particularly useful in scenarios where frequent insertions and deletions occur, while maintaining fast access times. Their ability to keep the tree balanced ensures that operations remain efficient, making them a popular choice in various applications such as databases, memory management, and network routing. 

## When Are Rotations Needed?

Rotations are required in an AVL Tree when an insertion or deletion causes the balance factor of any node to become less than -1 or greater than 1. The type of rotation depends on the structure of the imbalance.

### 1. Left-Left (LL) Case

**Scenario:** Inserting into the left subtree of the left child.

**Example:**
Insert 10 into this tree:
```
  30
  /
 20
```
After insertion:
```
  30
  /
 20
/
10
```
**Solution:** Perform a right rotation on 30.

---

### 2. Right-Right (RR) Case

**Scenario:** Inserting into the right subtree of the right child.

**Example:**
Insert 30 into this tree:
```
10
  \
  20
```
After insertion:
```
10
  \
  20
   \
   30
```
**Solution:** Perform a left rotation on 10.

---

### 3. Left-Right (LR) Case

**Scenario:** Inserting into the right subtree of the left child.

**Example:**
Insert 25 into this tree:
```
  30
  /
 20
```
After insertion:
```
  30
  /
 20
  \
  25
```
**Solution:** Perform a left rotation on 20, then a right rotation on 30.

---

### 4. Right-Left (RL) Case

**Scenario:** Inserting into the left subtree of the right child.

**Example:**
Insert 20 into this tree:
```
10
  \
  30
```
After insertion:
```
10
  \
  30
 /
20
```
**Solution:** Perform a right rotation on 30, then a left rotation on 10.

---

**Summary:**  
- Use **LL** rotation for left-left imbalance.
- Use **RR** rotation for right-right imbalance.
- Use **LR** rotation for left-right imbalance.
- Use **RL** rotation for right-left imbalance.