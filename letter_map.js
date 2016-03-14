module.exports = function(sentence){

words = sentence.split(" ");
var firstLetters=[];

var punctuationMarks=[".", "?", ",", "!", ";", ":", "...", "\"","/", "\\"];

for(m=0;m<words.length;m++){
  var characters = words[m].split('');


  for(n=0;n<characters.length;n++){

    if(punctuationMarks.indexOf(characters[n])>=0){
      characters.splice(n,1);
      n--;

    }
    words[m]=characters.join('');
}


}

for(i=0;i<words.length;i++){

  if(firstLetters.indexOf(words[i].charAt(0))<0){

     firstLetters.push(words[i].charAt(0));


  }
}

console.log(firstLetters);

 var firstLettersmap = {};
 for(j=0;j<firstLetters.length;j++){
firstLettersmap[firstLetters[j]]=[];

}
console.log(firstLettersmap);
for (k = 0; k < firstLetters.length; k++) {
  var bool=false;
  for(l=0;l < words.length;l++){
    console.log(firstLetters[k]);
    console.log(words[l].charAt(0));
    if(firstLetters[k]===words[l].charAt(0)){

      firstLettersmap[firstLetters[k]].push(words[l]);
      bool =true;
    }
    console.log(bool);
  }
}
return firstLettersmap;
}
