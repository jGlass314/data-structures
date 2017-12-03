var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    // create new node with value
    var node = Node(value);
    // check to see if list is emtpy
    // if list.head === null, update to new node
    if(list.head === null) {
      list.head = node;
      list.tail = node;
      list.length++;
      return;
    }
    // update list.tail.next to be equal to new node
    list.tail.next = node;
    // update list.tail to equal new node
    list.tail = node;
    list.length++;

  };

  list.removeHead = function() {
    // if list.head === null, return list.head
    if(list.head === null) {
      return list.head;
    }
    // store list.head.value
    var result = list.head.value;
    // update list.head = list.head.next
    list.head = list.head.next;
    list.length--;
    // return value;
    return result;
  };

  list.contains = function(target) {
    // if list.head === null, return false
    if(list.head === null) {
      return false;
    }
    // store list.head in temp node
    var node = list.head;
    // while node.value !== target && node.next !== null, node = node.next
    while(node.value !== target && node.next !== null) {
      node = node.next;
    }
    // if node.value === target return true
    if(node.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
