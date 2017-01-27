function arrayception(array,curDepth,maxDepth){
  curDepth = curDepth || 0;
  maxDepth = maxDepth || 0;

  array.forEach(function(element){
    if (Array.isArray(element)){
      maxDepth  =  arrayception(element, curDepth+1, maxDepth);
    } else {
      curDepth++;
      maxDepth = Math.max(curDepth, maxDepth);
      curDepth--;
    }
  });


  return maxDepth;
}