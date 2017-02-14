var hashingFunction = (str, max) => str.split("").map(item => item.charCodeAt()).reduce((a,b) => a + b) % max


var HashTable = function() {
  this.storage = [];
  this.max = 9;
  this.size = 0;
}


HashTable.prototype.insert = function (key, value) {
  var index = hashingFunction(key, this.max);
  var bucket = this.storage[index]
  var overRide = false;
  if (!bucket) {
    bucket = [];
    this.storage[index] = bucket;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tupal = bucket[i];
    if(tupal[0] === key) {
      tupal[1] === value;
      overRide = true;
    }
  }
  if(!overRide) {
    bucket.push([key, value]);
    this.size ++;
  }

  if(this.size > this.max * .75) {
    this.resize(this.max * 2);
  }
}

HashTable.prototype.resize = function(newMax) {
  var oldStorage = this.storage;
  this.max = newMax;
  this.size = 0;
  this.storage = [];

  oldStorage.forEach(bucket => {
    if (!bucket)  return;
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  })
}

HashTable.prototype.remove = function(key) {
  var index = hashingFunction(key, this.max);
  var bucket = this.storage[index]

  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i ++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      bucket.splice(i,1);
      this.size --;
      if (this.size < this.max * .25) {
        this.resize(this.size/2);
      }
      return tuple[1];
    }
  }
}

HashTable.prototype.retrieve = function(key) {
  var index = hashingFunction(key, this.max);
  var bucket = this.storage[index];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }

  return null;
};