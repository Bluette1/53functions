module.exports= function(sentence){

words = sentence.split(" ");
var firstLetters=[];
var count=0;
var character = '';

for(i=0;i<words.length;i++){

  if(firstLetters.indexOf(words[i].charAt(0))<0){

     firstLetters.push(words[i].charAt(0));
     var thisCount=1;
     for(j=i+1;j<words.length;j++){
       if(words[i].charAt(0)===words[j].charAt(0))
       thisCount++;
     }
   if(thisCount > count){
     count = thisCount;
     character = words[i].charAt(0);

   }

  }
}
return character;
}
