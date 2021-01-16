// https://ratsgo.github.io/data%20structure&algorithm/2017/10/22/bst/
class Node {
  constructor(data) {
    this.left = undefined;
    this.right = undefined;
    this.data = data;
  }
}

class BST {
  constrcutor() {
    this.root = undefined;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let point = this.root;
    while (true) {
      if (point.data > data) {
        if (point.left) {
          point = point.left;
          continue;
        }
        point.left = newNode;
        break;
      }
      if (point.data < data) {
        if (point.right) {
          point = point.right;
          continue;
        }
        point.right = newNode;
        break;
      }
    }
  }

  isLeafNode(node) {
    if (!node.right && !node.left) {
      return true;
    }
    return false;
  }

  remove(data) {
    if (this.isLeafNode(this.root)) {
      this.root = undefined;
      return;
    }
    let point = this.root;
    let parentNode = undefined;
    let direction = "";

    while (true) {
      if (point.data === data) {
        this.removeNode(point, parentNode, direction);
        break;
      } else if (point.data > data) {
        parentNode = point;
        direction = "left";
        point = point.left;
      } else if (point.data < data) {
        parentNode = point;
        direction = "right";
        point = point.right;
      }
    }
  }

  removeNode(node, parentNode, direction) {
    if (this.isLeafNode(node)) {
      parentNode[direction] = undefined;
    } else if (node.left && !node.right) {
      parentNode[direction] = node.left;
    } else if (node.right && !node.left) {
      parentNode[direction] = node.right;
    } else {
      let point = node.right;
      while (point.left) {
        if (!point.left.left) {
          node.data = point.left.data;
          point.left = undefined;
        }
      }
      node.data = node.right.data;
      node.right = undefined;
    }
  }

  inorder() {
    console.log("==========");
    this.inorderLoop(this.root);
  }

  inorderLoop(node) {
    if (!node) return;

    if (node.left) {
      this.inorderLoop(node.left);
    }
    console.log(node.data);
    if (node.right) {
      this.inorderLoop(node.right);
    }
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(8);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.inorder();
bst.remove(6);
bst.remove(5);
bst.inorder();
