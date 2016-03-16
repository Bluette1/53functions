module.exports = function(n){
var result = [];
for(i=1;i<=2;i++){
  if((2 % i ===0) && (i < n)){
    result.push(i);
  }
}
return result;
}
