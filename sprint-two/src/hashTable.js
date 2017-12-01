

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if index points to an undefined
  // if so, point it to a new linkedList and add and object {k,v} to the tail
  // if not, add it to the tail of the existing LL
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // store linkedList at index in a temp variable and retrieve list.head
  // iterate through LL looking for k
  // return value
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // store LL at index in temp variable and retrieve list.head
  // iterate through LL looking for node before k
    // if list.head has key k, call removeHead
    // else, remove next node in LL
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
