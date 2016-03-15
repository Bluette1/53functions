module.exports = function(ch, n){
var stringArray =[];
var draw = require('./draw');
for(i=1;i<=n;i++){
  var spacesCount = n-i;
  var charCount =i;
  var str ='';
  while(spacesCount > 0){
    str += ' ';
    spacesCount--;
  }
  while(charCount > 0){
    str += ch + ' ';
    charCount--;
  }
   stringArray.push(str);
}

for(i=1;i<=n;i++){
  var spacesCount = i;
  var charCount =n-i;
  var str ='';
  while(spacesCount > 0){
    str += ' ';
    spacesCount--;
  }
  while(charCount > 0){
    str += ch + ' ';
    charCount--;
  }
   stringArray.push(str);
}


  console.log(stringArray);
return  draw(stringArray);
}
