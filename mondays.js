
module.exports=function (year) {
    var d = new Date(year,0,0,0,0,0,0),
        count =0,
        mondays = [];

 var d1 = new Date(d.getFullYear(), d.getMonth(), d.getDate()-d.getDay() + 1);
 console.log(d1);
    if(d1.getFullYear()!==Number(year)){
        d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()+7);
    }

    var year = d1.getFullYear();

console.log(d1);

    while (d1.getFullYear() === year ) {
      count++;
      mondays.push(d1);
      d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()+7);

}
console.log(mondays);

return count;

}
//console.log(mondays(1990));
