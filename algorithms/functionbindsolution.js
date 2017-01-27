var bind = function(func, context){
  var extraArgs = [].slice.call(arguments,2)
  return function(){
    var args = [].slice.call(arguments);
    args = extraArgs.concat(args);
    return func.apply(context, args );
  }
};

Function.prototype.bind = function(context) {
  var extraArgs = [].slice.call(arguments,1)
  var that = this;
  return function(){
    var args = [].slice.call(arguments);
    args = extraArgs.concat(args);
    return that.apply(context, args );
  }
};