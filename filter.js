module.exports = function(numbers){


  //find the odd numbers
  var oddNumbers = [];

  function checkIfOdd(number){


  if (number%2===0){
    return false;

  }
  else{
    return true;
  }


  }

  oddNumbers=numbers.filter(checkIfOdd);
  return oddNumbers;

}
