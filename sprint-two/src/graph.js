

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //remove it from neighbors of all nodes.neighbors using removeEdge
  var neighbors = this.storage[node];
  for(var i = 0; i < neighbors.length; i++) {
    this.removeEdge(node, neighbors[i]);
  }
  delete this.storage[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
  return this.storage[fromNodeValue].includes(toNodeValue);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
  if(!this.hasEdge(fromNodeValue, toNodeValue)) {
    this.storage[fromNodeValue].push(toNodeValue);
    this.storage[toNodeValue].push(fromNodeValue);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
  //access fromNodeValue's neighbors and splice the toNodeValue
  var indexFromNodeOne = this.storage[fromNodeValue].indexOf(toNodeValue);
  this.storage[fromNodeValue].splice(indexFromNodeOne, 1);

  var indexFromNodeTwo = this.storage[toNodeValue].indexOf(fromNodeValue);
  this.storage[toNodeValue].splice(indexFromNodeTwo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, function(item, key, collection) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
