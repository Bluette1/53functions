module.exports = function(string){
  var sum =0;
  for(i=0;i < string.length;i++){
    if(string.charAt(i)===string.charAt(i).toLowerCase()){
      sum += string.charCodeAt(i);
    }


  }
  return sum;
}
