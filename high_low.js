module.exports = function(theArray){
var myArray =[];

myArray.push(Math.max.apply(null, theArray));
myArray.push(Math.min.apply(null, theArray));

return myArray;
}
