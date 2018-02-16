class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    this.root = this._recursiveInsert(this.root, key);
  }

  _recursiveInsert(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this._recursiveInsert(node.left, key);
    } else if (key > node.key) {
      node.right = this._recursiveInsert(node.right, key);
    }

    return node;
  }

  sorted() {
    const sorted = [];
    this._recursiveOrdered(node => sorted.push(node), this.root);
    return sorted;
  }

  _recursiveOrdered(callback, node) {
    if (node !== null) {
      this._recursiveOrdered(callback, node.left);
      callback(node.key);
      this._recursiveOrdered(callback, node.right);
    }
  }

  search(key) {
    return this._recursiveSearch(this.root, key);
  }

  _recursiveSearch(node, key) {
    if (node === null || node.key === key) {
      return node;
    }

    if (node.key > key) {
      return this._recursiveSearch(node.left, key);
    }

    return this._recursiveSearch(node.right, key);
  }

  getWidth(level) {
    return this._recursiveGetWidth(this.root, level);
  }

  _recursiveGetWidth(node, level) {
    if (node === null) {
      return 0;
    }

    if (level === 1) {
      return 1;
    } else {
      return this._recursiveGetWidth(node.left, level - 1) + this._recursiveGetWidth(node.right, level - 1);
    }
  }

  getHeight() {
    return this._recursiveGetHeight(this.root);
  }

  _recursiveGetHeight(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = this._recursiveGetHeight(node.left);
    const rightHeight = this._recursiveGetHeight(node.right);

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }

  getMaxWidth() {
    const numberOfLevels = this.getHeight();
    const levelWidths = Array(numberOfLevels).fill(0);
    const currentLevel = 0;
    this._recursiveGetLevelWidths(this.root, levelWidths, currentLevel);
    return Math.max(...levelWidths);
  }

  _recursiveGetLevelWidths(node, levelWidths, currentLevel) {
    if (node !== null) {
      levelWidths[currentLevel]++;
      this._recursiveGetLevelWidths(node.left, levelWidths, currentLevel + 1);
      this._recursiveGetLevelWidths(node.right, levelWidths, currentLevel + 1);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(90);
bst.insert(30);
bst.insert(10);
bst.insert(84);
bst.insert(33);
bst.insert(74);

console.log(bst.getHeight());
console.log(bst.sorted());
console.log(bst.search(10));
console.log(bst.getWidth(3));
console.log(bst.getMaxWidth());