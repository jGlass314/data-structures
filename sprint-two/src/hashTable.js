

var HashTable = function(limit) {
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._storageSize = 0;
  this._upperBoundRatio = 0.75;
  this._lowerBoundRatio = 0.25;
  this._changeSizeFactor = 2;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var idxArr;
  // check if index points to an undefined
  // if so, point it to a new object
  // else, point it to the object at _.storage[index]
  if(this._storage.get(index) === undefined) {
    idxArr = [];
    var arr = [];
    arr.push(k);
    arr.push(v);
    idxArr.push(arr);
    this._storage.set(index,idxArr);
    this._storageSize++;
  } else {
    idxArr = this._storage.get(index);
    // set obj
    var found = false;
    idxArr.forEach(function(item) {
      if(item[0] === k) {
        item[1] = v;
        found = true;
        return;
      }
    });
    // if we didn't find the key
    if(!found) {
      var arr = [];
      arr.push(k);
      arr.push(v);
      idxArr.push(arr);
      this._storageSize++;
    }
  }
  //numberOfKeys:LimitedArray's length ratio should not go over 0.75
  if(this._storageSize/this._limit > this._upperBoundRatio) {
    this.changeTreeSize(this._changeSizeFactor);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var idxArr = this._storage.get(index);
  if(idxArr === undefined) {
    return undefined;
  }
  var value;
  idxArr.forEach(function(item, index) {
    if(item[0] === k) {
      value = item[1];
      return;
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var idxArr = this._storage.get(index);
  if(idxArr === undefined) {
    return;
  }
  var idxArrIdx = -1;
  idxArr.forEach(function(item, idx) {
    if(item[0] === k) {
      idxArrIdx = idx;
      return;
    }
  });
  if(idxArrIdx !== -1) {
    idxArr.splice(idxArrIdx, 1);
    this._storageSize--;
  }
  //numberOfKeys:LimitedArray's length ratio should not under 0.25
  if(this._storageSize/this._limit < this._lowerBoundRatio) {
    this.changeTreeSize(1/this._changeSizeFactor);
  }
};

HashTable.prototype.changeTreeSize = function(factor) {
  var tree = this;
  this._limit = Math.round(this._limit * factor);
  var oldStorage = this._storage;
  this._storage = new LimitedArray(this._limit);
  //we need to reset our key:value counter because we are inserting values again
  this._storageSize = 0;
  oldStorage.each(function (innerIdxArray, innerIdx, collection) {
    if(innerIdxArray !== undefined) {
      innerIdxArray.forEach(function(item) {
        tree.insert(item[0],item[1]);
      });
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
