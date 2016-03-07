module.exports = function(n){
    var total = 0;

if(n===0){
  return 0;
}

else{

  for(k = 1;k < n+1;k++){

    total+=k;
  }

  return total-1;
}

};
