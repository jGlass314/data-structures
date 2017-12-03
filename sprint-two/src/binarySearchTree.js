var BinarySearchTree = function(value) {
  if(value === undefined) {
    throw "Init of BST with no value is invalid behavior";
  }
  var bst = Object.create(BinarySearchTree.prototype);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  bst.rightNodeCount = 0;
  bst.leftNodeCount = 0;
  return bst;
};

BinarySearchTree.prototype.insert = function(value) {
  if(value === undefined) {
    throw "Insert of node with no value in BST is invalid behavior";
  }
  if(this.value === value) {
    return;
  }
  if(value > this.value) {
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
    this.rightNodeCount++;
    console.log('post right-insert of',value,': value:',this.value,'rightNodeCount:',this.rightNodeCount);
  } else {
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
    this.leftNodeCount++;
    console.log('post left-insert of',value,': value:',this.value,'leftNodeCount:',this.leftNodeCount);
  }

  var minTreeSize = Math.min(this.leftNodeCount, this.rightNodeCount);
  var maxTreeSize = Math.max(this.leftNodeCount, this.rightNodeCount);
  if((minTreeSize * 2) + 1 < maxTreeSize) {
    this.rebalance();
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if(this.value === value) {
    return true;
  }
  if(value > this.value) {
    if(this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else if(value < this.value) {
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if(this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var queue = LinkedList();
  queue.addToTail(this);

  while(queue.length > 0) {
    var node = queue.removeHead();

    if(node.left !== null) {
      queue.addToTail(node.left);
    }
    if(node.right !== null) {
      queue.addToTail(node.right);
    }
    cb(node.value);
    
  }
};

BinarySearchTree.prototype.findMinDepth = function() {
  if(this.left === null && this.right === null) {
    return 1;
  }
  if(this.left === null) {
    return this.right.findMinDepth() + 1;
  }
  if(this.right === null) {
    return this.left.findMinDepth() + 1;
  }
  return Math.min(this.left.findMinDepth(), this.right.findMinDepth()) + 1;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
