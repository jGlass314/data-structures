describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });
/*
  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });

  it('should return correct minDepth after several pushes', function() {
    binarySearchTree.insert(15);
    binarySearchTree.insert(3);
    binarySearchTree.insert(18);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(19);
    binarySearchTree.insert(13);
    expect(binarySearchTree.findMinDepth()).to.equal(3);
  });
  */
  it('should have the correct hights for the left and right subtrees', function() {
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(11);
    
    expect(binarySearchTree.leftNodeCount).to.equal(3);
    expect(binarySearchTree.rightNodeCount).to.equal(2);
    expect(binarySearchTree.left.leftNodeCount).to.equal(2);
    expect(binarySearchTree.left.rightNodeCount).to.equal(0);
    expect(binarySearchTree.right.leftNodeCount).to.equal(1);
  });
});
