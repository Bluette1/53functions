module.exports =function(stringArray){

var  string ="";
for(i=0;i<stringArray.length;i++){
  string += stringArray[i] + "\n";
}
console.log(string);
return string;
}
