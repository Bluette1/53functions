module.exports= function(string){
  var result ="";

  for(i=0;i<string.length;i++){
    if(string.charAt(i)===string.charAt(i).toLowerCase()){
      result += string.charAt(i);
    }
  }
  console.log(result);
  return result;
}
