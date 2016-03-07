module.exports = function(theString){
  var n =theString.length;
  var s ="";


  while(n >=0){
    s += theString.charAt(n);
    n--;
  }
  return s;
}
