  var Stack = function() {
  var someInstance = {};
  someInstance.length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.length] = value;
    someInstance.length++;
  };

  someInstance.pop = function() {
    if(someInstance.length === 0) {
     return null;
   }
    var last = storage[someInstance.length-1];
    delete storage[someInstance.length-1];
    someInstance.length--;
    return last;
  };

  someInstance.size = function() {
    return someInstance.length;
  };

  return someInstance;
};
