module.exports = function(number){
var n = number;
var helloArray = [];
while(n > 0){
  helloArray.push('hello world');
  n--;
}
return helloArray;
}
