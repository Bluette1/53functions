module.exports = function(sentence){

 var words= sentence.split(" ");
 var count =0;
 var punctuationMarks=[".", "?", ",", "!", ";", ":", "..."];

 for(i=0;i<words.length;i++){

   var characters = words[i].split("");
 for(j=0;j<characters.length;j++){

   if(punctuationMarks.indexOf(characters[j])>=0){
     characters.splice(j,1);
   }

 }
console.log(characters);
  count += characters.length;


 }
  return count;
}

// console.log(sum_word_len("I love code."));
