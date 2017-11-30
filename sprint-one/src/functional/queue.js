var Queue = function() {
  var someInstance = {};
  someInstance.front = 0;
  someInstance.back = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.back] = value;
    someInstance.back++;
  };

  someInstance.dequeue = function() {
    if(someInstance.size() === 0) {
      return null;
    }
    var val = storage[someInstance.front];
    delete storage[someInstance.front];
    someInstance.front++
    return val;
  };

  someInstance.size = function() {
    return someInstance.back - someInstance.front;
  };

  return someInstance;
};
