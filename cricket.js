module.exports = function(r){
  var rate = r * 60/15;
  var temperature = (rate + 40)/4;
  return Math.round(temperature*2)/2;

}
