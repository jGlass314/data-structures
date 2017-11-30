var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push : function(value) {
    this.storage[this.length++] = value;
  },
  pop : function() {
    if(this.size() === 0) {
      return null;
    }
    var result = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  },
  size : function() {
    return this.length;
  }
};
