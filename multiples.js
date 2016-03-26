//Counts in multiples of m n times
module.exports = function(m){

  var list = [];
  this.list = function(n){

    var count =1;
    while(count <= n){

      list.push(m*count);

    count++;
    }
    return list;
  }

  this.count = function(){
    var next = m*(list.length+1);
    list.push(next);
    return next ;
  }


}
