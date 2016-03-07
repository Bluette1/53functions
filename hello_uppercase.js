module.exports = function(userName)  {
  if (userName !== undefined) {
      return "Hello, " + userName.toUpperCase() + "!";
  }
  else {
      return "HELLO!";

  }

};
