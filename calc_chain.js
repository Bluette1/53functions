module.exports = function(){
this.result =0;

this.value = function(){

  return this.result;
}

this.add = function(n1, n2){

  if (n2!==undefined){
    this.result = n1 + n2;
  }
  else{
    this.result =this.result + n1;
  }
  return this;
}

this.subtract = function(n1, n2){
  if (n2!==undefined){
    this.result = n1 - n2;

  }
  else{
    this.result =this.result - n1;
  }

}
  this.multiply = function(n1, n2){
    if(n2 !==undefined){
      this.result = n1*n2;
    }
    else{
      this.result =this.result * n1;
    }

    return this;
  }

  this.divide = function(n1, n2){
    if(n2!==undefined){
      this.result = n1/n2;
    }
    else{
      this.result =this.result / n1;
    }

    return this;
  }

}
