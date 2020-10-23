class BinaryTreeNode {
    #value
    #left
    #right

    constructor(value) {
        this.#value = value;
        this.#left = null;
        this.#right = null;
    }

    set left(leftNode) {
        this.#left = leftNode;
    }

    set right(rightNode) {
        this.#right = rightNode;
    }

    get left() {
        return this.#left;
    }

    get right() {
        return this.#right;
    }

    get value() {
        return this.#value;
    }
}

function binaryTreesAreEqual(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }
    if ((root1 && !root2) || (root2 && !root1) || (root1.value !== root2.value)) {
        return false;
    }
    return binaryTreesAreEqual(root1.left, root2.left) && binaryTreesAreEqual(root1.right, root2.right);
}