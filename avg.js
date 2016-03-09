module.exports =function(sentence){
  var word_length = function(){

    var words= sentence.split(" ");
    var count =0;
    var punctuationMarks = [".", "?", ",", "!", ";", ":", "...", "\"","/", "\\"];;

    for(i=0;i<words.length;i++){

      var characters = words[i].split("");
    for(j=0;j<characters.length;j++){

      if(punctuationMarks.indexOf(characters[j])>=0){
        characters.splice(j,1);
      }

    }

     count += characters.length;


    }
     return count/words.length;

    };

    this.round_down =function(){
     return Math.floor(word_length());
    }

    this.round_up =function(){
      return Math.ceil(word_length());
    }
}
