module.exports = function(sentence){

  var shortestWord="";
  var words = sentence.split(" ");

  var punctuationMarks=[".", "?", ",", "!", ";", ":", "...", "\"","/", "\\"];


  for(i=0;i<words.length;i++){

    var characters = words[i].split("");
    for(j=0;j<characters.length;j++){

      if(punctuationMarks.indexOf(characters[j])>=0){
        characters.splice(j,1);

      }
      if((shortestWord=== "") || (shortestWord.length > characters.length)){
        shortestWord = characters.join('');
      }
  }

  }

  return shortestWord;

}
