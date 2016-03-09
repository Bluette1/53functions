module.exports= function(sentence){

words = sentence.split(" ");
var lastLetters=[];
var count=0;
var character = '';

for(i=0;i<words.length;i++){

  if(lastLetters.indexOf(words[i].charAt(0))<0){

     lastLetters.push(words[i].charAt(words[i].length-1));
     var thisCount=1;
     for(j=i+1;j<words.length;j++){
       if(words[i].charAt(words[i].length-1)===words[j].charAt(words[j].length-1))
       thisCount++;
     }
   if(thisCount > count){
     count = thisCount;
     character = words[i].charAt(words[i].length-1);

   }

  }
}
return character;
}
