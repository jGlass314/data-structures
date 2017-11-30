var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);

  obj.front = 0;
  obj.back = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back++] = value;
  },
  dequeue: function() {
    if(this.size() === 0) {
      return null;
    }

    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return result;
  },
  size: function() {
    return this.back - this.front;
  }
};
