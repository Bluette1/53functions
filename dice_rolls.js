var dice_rolls = function(n){
  result =[];
  while(n > 0){
    //Math.floor(Math.random() * (max - min + 1)) + min;
    var outcome = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    result.push(outcome);
    n--;
  }
  return result;
}

console.log(dice_rolls(2));
