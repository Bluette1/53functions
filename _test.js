var calc_chain= require('./calc_chain');
var calc = new calc_chain();
console.log(calc.add(1,2).multiply(9).value());
