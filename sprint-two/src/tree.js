var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree with argument value
  var tree = Tree(value);
  // connect children to parent
  tree.parent = this;
  //push that tree to currentTree children array
  this.children.push(tree);

};

treeMethods.contains = function(target) {
  //if the value of the current tree is equal to target just return true
  if(this.value === target) {
    return true;
  }
  // else call reduce on children returning true if any child has the target
  var result = this.children.reduce(function(memo, tree) {
    return memo || tree.contains(target);
  }, false);
  return result;
};

treeMethods.removeFromParent = function() {
  //access parentTree by parent attribute
    //find this child and remove it from the children array.
  //parent attribute to null
  var parentTree = this.parent;
  if(parentTree === null) {
    return;
  }
  var indexOfSelf = parentTree.children.indexOf(this);
  parentTree.children.splice(indexOfSelf, 1);
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  this.children.forEach(function(tree) {
    tree.traverse(cb);
  });
  if(this.value !== undefined) {
    cb(this.value);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
