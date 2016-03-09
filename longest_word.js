module.exports =function(sentence){

var longestWord="";
var words = sentence.split(" ");

var punctuationMarks = [".", "?", ",", "!", ";", ":", "...", "\"","/", "\\"];


for(i=0;i<words.length;i++){

  var characters = words[i].split("");
  for(j=0;j<characters.length;j++){

    if(punctuationMarks.indexOf(characters[j])>=0){
      characters.splice(j,1);

    }
if(longestWord.length < characters.length){
  longestWord = characters.join('');
}
}

}

return longestWord;

};

//console.log(longest_word("Xylophone is a long word."));
