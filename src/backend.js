// export class Object {
  // }
  export let deckArray = ['fascist1','fascist2','fascist3','fascist4','fascist5','fascist6','fascist7','fascist8','fascist9','fascist10','fascist11','liberal1','liberal2','liberal3','liberal4','liberal5','liberal6']
  //number of players
  //Player one sign in - looped based off of input player numbers
  //so player 1 = chad

  export class Players {
    constructor(userName) {
      this.userName = userName;
      this.status = "Alive";
      this.party = "Liberal";
      this.secret = "";
    }

    //party assignment and secret assignment

    //Random first president candidate

  }



  // failed election variable

  // term limit array to store and restor to turn array

  // turn array itself

  export class Game {
    constructor(players){
      this.players = players;
      this.playerOrder = []; //each element is player object
      this.eligibleChancelors = [];
      this.deck = [];
      this.totalYesVote = 0;
      this.liberalPolicies = 0;
      this.fascistPolicies = 0;
      this.electionTracker = 0;
      this.legistlateCards = [];
      this.currentChancellor = "";
      this.currentPresident = "";
      //Maybe have discarded cards array

    }
    shuffleDeck(deckToShuffle) {
      let isDeckShuffled = false;
      while (isDeckShuffled === false) {
        let number = Math.floor(Math.random() * deckToShuffle.length);
        let card = deckToShuffle.splice(number, 1);
        this.deck.push(card.toString());
        if (this.deck.length === 17) {
          isDeckShuffled = true;
        }
      }
    }
    assignParty() {
      let partyArray = this.playerOrder;
      let number = Math.floor(Math.random() * partyArray.length);
      this.playerOrder[number].party = "Fascist";
      this.playerOrder[number].secret = "Hitler";
      partyArray.splice[number, 1];
      let number2 = Math.floor(Math.random() * partyArray.length);
      if (number === number2) {
        number2 = number2 +1;
      }
      this.playerOrder[number2].party = "Fascist";
    }


  }
  //random 1st president

  // president assigns chancelor

  //hold the vote (check for 3 times hitler)

  //pass fail vote result handler

  //president legistative cards from user inputs to updating main board

  //show 3 top cards

  // shoot and remove player and check if hitler

  // template cardshuffler USABlE for other shuffle scenarios

  // template inelligiblechancelors

  // template player to the left

  //failed election tracker and function to enact

  // reshuffle protocol

  //check board status for wins
