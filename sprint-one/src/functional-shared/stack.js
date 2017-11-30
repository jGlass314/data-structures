var Stack = function() {
  var obj = {};
  obj.length = 0;
  obj.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {

  push : function(value) {
    this.storage[this.length++] = value;
  },

  pop : function() {
    if(this.length === 0) {
      return null;
    }
    var value = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    return value;
  },

  size : function() {
    return this.length;
  }


};
