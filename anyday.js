
module.exports=function (year, day) {

    var d = new Date(year,0,0,0,0,0,0),
        count =0,
        anydays = [];
        day =day.toLowerCase();
        switch (day) {
          case "sunday":day =0
            break;
          case "monday":day =1
            break;
          case "tuesday":day =2
            break;
          case "wednesday":day =3
            break;
          case "thursday":day =4
            break;
          case "friday":day =5
                      break;
          case "saturday":day =6
                        break;
          default:

        }

 var d1 = new Date(d.getFullYear(), d.getMonth(), d.getDate()-d.getDay() + day);
 console.log(d1);
    if(d1.getFullYear()!==Number(year)){
        d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()+7);
    }

    var year = d1.getFullYear();

console.log(d1);

    while (d1.getFullYear() === year ) {
      count++;
      anydays.push(d1);
      d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()+7);

}
console.log(anydays);

return count;


}
//console.log(mondays(1990));
