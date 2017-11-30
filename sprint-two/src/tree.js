var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree with argument value
  var tree = Tree(value);
  this.children.push(tree);
  //push that tree to currentTree children array

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



/*
 * Complexity: What is the time complexity of the above functions?
 */
