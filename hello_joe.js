module.exports = function(userName){
  //takes a username as a parameter and returns "Hello, USERNAME!".
  //If the username is Joe or Bob only say "Hello!"
  if(userName==="Bob" || userName==="Joe"){
    return "Hello!";
  }

  else{
    return "Hello, " + userName.toUpperCase() + "!";
  }
};
