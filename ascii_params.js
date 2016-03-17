module.exports = function(word){

var total =0;

for(i=0; i < word.length; i++){

  total += word.charCodeAt(i);

}
return total;

}
