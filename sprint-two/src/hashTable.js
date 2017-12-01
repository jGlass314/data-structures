

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if index points to an undefined
  if(this._storage.get(index) === undefined) {
    var obj = {};
    obj[k] = v;
    this._storage.set(index,obj);
  } else {
    var obj = this._storage.get(index);
    obj[k] = v;
    this._storage.set(index,obj);
  }
  // if so, point it to a new object and add {k,v}
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return value
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // remove k from obj in _.storage[index][k]
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
