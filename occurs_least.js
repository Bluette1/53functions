module.exports = function(sentence){

words = sentence.split(" ");
var whole="";
for(i =0;i<words.length;i++){
  whole+=words[i];

}

//console.log(whole);
//var characters = words.toLowerCase().split('');
var least_common_letter = '';
var count = 0;

var punctuationMarks=[".", "?", ",", "!", ";", ":", "...", "\"","/", "\\"];

var characters = whole.toLowerCase().split('');
//console.log(characters);

for(var m=0; m<characters.length ;m++){

//console.log(characters[m]);
if(punctuationMarks.indexOf(characters[i])>=0){
  characters.splice(i,1);
  i=i-1;

}

}
console.log(characters);

var store =[];
 for(i = 0; i < characters.length; i++){

   var counter = 0;
   if(store.indexOf(characters[i]) < 0){
     store.push(characters[i]);
     counter++;
     //console.log(counter);

     for(j=i+1;j<characters.length;j++){
       if(characters[i]===characters[j]){
         counter++;
       }

     }
     if(count === counter){
       least_common_letter += " "+characters[i];
     }

     if((count > counter) ||(count ===0)){
       count =counter;
       //console.log(counter);
       least_common_letter = characters[i];
     }
     //console.log(counter);
   }


 }


 //console.log(count);
 console.log(least_common_letter);
return least_common_letter;
};
