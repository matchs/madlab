function _clone(node) {
    return Object.assign(new Node(), node);
}

function BST(_root) {
    this.root = _clone(_root);

    this.insert = function(_node_, _into_) {
        var root = _into_ || this.root;
        var node = _clone(_node_);
        if(!root) {
            root = node;
            return this;
        }

        if(node.value < root.value) {
            var tmp = _clone(this.root);

            this.root = node;
            this.root.leftChild = tmp;

            return this;
        }

        if(node.value > root.value) {
            return root.leftChild && node.value < root.leftChild ? this.insert(node, root.leftChild) : this.insert(node, root.rightChild);
        }

        return this;
    }


    this.traverseInOrder = function() {
        return [];
    }

    this.traversePostOrder = function() {
        return [];
    }
}

function Node(value, parent, leftChild, rightChild) {
    this.value = value;
    this.parent = parent;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}
