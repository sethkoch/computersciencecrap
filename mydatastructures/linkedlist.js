// A linked List writting in functional style

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  }

  list.removeHead = function() {
    var currentHead = list.head

    if (currentHead) {
      list.head = list.head.next;
      return currentHead.value;
    }
    else {
      return null;
    }


  };

  list.contains = function(target) {
    if(!list.head) return false;
    var node = list.head;
    while (node){
      if (node.value === target){
        return true;
      }
      node = list.head.next;
    }
    return false;
  };
};
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};