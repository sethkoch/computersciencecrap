var mixEvents = function (obj) {
  var events = {};

  obj.trigger = function (event) {

  if (events[event]) {
    var args = Array.prototype.slice.call(arguments, 1);
    events[event].forEach(function (callback) {
      callback.apply(obj, args);
    });
  }
};

  obj.on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  return obj;
};