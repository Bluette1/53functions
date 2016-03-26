var RockPaperScissors = function(n){

  this.winner='';
  this.status ='doing';
  var count1=0;
  var count2 =0;



  this.score = function(){

    return {"Player1": count1, "Player2": count2, "winner": this.winner};
  };


  this.play = function(){
    var track= [];
    while(n > 0){
      var theWinner ='';
      var players =[];
      for(i = 0; i < 2; i++ ){

      var choice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

      //choice.push(theChoice);

      switch (choice) {
        case 0: choice = '*';
                break;
        case 1: choice = 'x';
                break;
        case 2: choice = '#';
                break;
        default:

      }
     players.push(choice);
   }

   if (players[0]===players[1]) {
     theWinner = "tie";
   }

    if(players[0]==='*'){
      if (players[1]==='x'){
       theWinner ="Player1";
        count1++;
      }
      if(players[1]==='#') {
        theWinner ="Player2";
        count2++;

      }
    }
    if(players[0]==='x'){
      if (players[1]==='*'){
       theWinner ="Player2";
        count2++;
      }
      if (players[1]==='#') {
       theWinner ="Player1";
        count1++;

      }
    }

    if(players[0]==='#'){
      if (players[1]==='x'){
      theWinner ="Player2";
        count2++;
      }
      if (players[1]==='*') {
       theWinner ="Player1";
        count1++;

      }
    }

     n--;

     track.push({"result" : players[0]+ ' - '+players[1], "winner" : theWinner, "status" : this.status });
    }
   console.log(track);


    if(n===0){
      this.status = "done";
    }
    if(count1===count2){
      this.winner= "tie";
    }
    if(count1 > count2){
      this.winner = "Player1";
    }

    else if (count2 > count1){
      this.winner = "Player2";
    }



    return { "winner" : this.winner, "status" : this.status};

  };


};

  var game1 = new RockPaperScissors(3);
  console.log(game1.play());
  console.log(game1.score());
