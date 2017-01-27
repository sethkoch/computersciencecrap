function evenOccurrence (arr) {
  var counter = {};
  var evenOccur = [];
  var answer;
  var onlyOnce = false;
  var answerArray = [];
  for(var i = 0; i < arr.length; i++){
    if(counter.hasOwnProperty(arr[i])){
      counter[arr[i]] ++;
    }
    else{
      counter[arr[i]] = 1;
    }
  }
  for(var key in counter){
    if(counter[key] % 2 === 0){
      evenOccur.push(key);
    }
  }


  arr.forEach(function(num){
    if(evenOccur.indexOf(String(num)) !== -1 && onlyOnce === false){
      answer = num;
      onlyOnce = true;
    }
  })
  return answer;
}