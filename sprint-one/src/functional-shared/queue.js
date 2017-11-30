var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // state variables
  var obj = {};
  // start will always be the index where we dequeue
  obj.start = 0;
  // end will always be the index where we enqueue
  obj.end = 0;
  obj.storage = {};

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  // enque will take a value and insert to index end
  // then we update end by incrementing it
  enqueue : function(value) {
    this.storage[this.end++] = value;
  },
  // dequeue will be removing a value from index start
  // will increase start
  // will return the removed value
  // NOTE: attempt to dequeue an empty que will return null
  dequeue : function() {
    if(this.size() === 0) {
      return null;
    }
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  },
  // size will return the difference between the end and start indices
  size : function() {
    return this.end - this.start;
  }
};
