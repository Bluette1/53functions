module.exports = function(){

var alphabetUpper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var total =0;
for(i=0; i < alphabetUpper.length; i++){

  total += alphabetUpper.charCodeAt(i);

}
return total;

}
