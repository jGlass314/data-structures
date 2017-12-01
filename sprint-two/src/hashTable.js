

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj;
  // check if index points to an undefined
  // if so, point it to a new object
  // else, point it to the object at _.storage[index]
  if(this._storage.get(index) === undefined) {
    obj = {};
  } else {
    obj = this._storage.get(index);
  }
  // set obj
  obj[k] = v;
  // store at _.storage[index]
  this._storage.set(index,obj);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
