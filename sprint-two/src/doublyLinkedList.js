var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if(list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
      return;
    }

    list.head.prev = Node(value);
    list.head.prev.next = list.head;
    list.head = list.head.prev;
  };
  list.addToTail = function(value) {
    // create new node with value
    var node = Node(value);
    // check to see if list is emtpy
    // if list.head === null, update to new node
    if(list.head === null) {
      list.head = node;
      list.tail = node;
      return;
    }
    list.tail.next = node;
    node.prev = list.tail;
    list.tail = node;
  };
  list.removeTail = function() {
    if(list.tail === null) {
      return list.tail;
    }
    var result = list.tail.value;
    if(list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.tail.prev.next = null;
      list.tail = list.tail.prev;
    }
    return result;

  };
  list.removeHead = function() {
    // if list.head === null, return list.head
    if(list.head === null) {
      return list.head;
    }
    var result = list.head.value;

    if(list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
      list.head.prev = null;
    }
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
