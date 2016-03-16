module.exports = function(n){
var result = [];
for(i=1;i<=2;i++){
  if((2 % i ===0) && (i < n) && (result.indexOf(i) < 0)){
    result.push(i);
  }
}

for(i=1;i<=7;i++){
  if((7 % i ===0) && (i < n)&&(result.indexOf(i) < 0)){
    result.push(i);
  }
}

return result;
}
