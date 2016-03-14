module.exports =function(ch, n){
  var draw =require('./draw');
  var stringArray  = [];
  for(i=0;i<n;i++){
  var str ='';
  for(j=0;j<n;j++){
    str += ch+' ';
  }
  stringArray.push(str);

  }
return draw(stringArray);
}
