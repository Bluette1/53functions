module.exports = function(n){
  var k= 1;
  var s = new Array(n);

    while(k <= n){
      //s += k + ", ";
      s[k-1]=k;
      k++;
    }

    return s;
  };
