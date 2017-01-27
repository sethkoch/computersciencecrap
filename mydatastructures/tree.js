// A tree written in functional shared instantiation style

var Tree = function(value) {
  var newTree = {};

  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target, child) {
  child = child || this;
  if(!child.value){
    return false;
  }
  if(child.value === target) {
    return true;
  }

  if(child.children.length){
    for(var i = 0; i < child.children.length; i ++) {
      var temp = child.contains(target, child.children[i]);
      if(temp === true){
        return true;
      }
    }
  }
  return false;
};


