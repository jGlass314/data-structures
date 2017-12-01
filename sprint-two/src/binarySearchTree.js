var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

BinarySearchTree.prototype.insert = function(value) {
  if(this.value === value) {
    return;
  }
  if(value > this.value) {
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
