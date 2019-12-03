
  export let masterDeck = ['fascist1','fascist2','fascist3','fascist4','fascist5','fascist6','fascist7','fascist8','fascist9','fascist10','fascist11','liberal1','liberal2','liberal3','liberal4','liberal5','liberal6']


  export class Players {
    constructor(userName) {
      this.userName = userName;
      this.status = "Alive";
      this.party = "Liberal";
      this.secret = "";
    }
    nominateChancellor() {
      if (this.status === "Previous Power") {
        return "This Player has already held power in the previous round.  They will be elligible in the next round.  Please Select another player.";
      } else {
      this.status = "Nominated";
      }
    }
    voteHandle(gameObject){
      if (gameObject.totalYesVote > (gameObject.players/2)) {
        this.status = "Chancellor";
        gameObject.electionTracker = 0;
      }else {
        this.status = 'Alive';
        gameObject.electionTracker ++;
        console.log(gameObject.deck);
        if (gameObject.electionTracker === 3) {
          gameObject.drawnCardsArray = gameObject.deck.splice(0,1)
          console.log(gameObject.drawnCardsArray);
          gameObject.cardPlayedOnBoard();
          gameObject.electionTracker = 0;

        }
      }

    }
    shootPlayer(gameObject) {
      this.status = "Dead";
      for (let i = 0; i < gameObject.playerOrder.length; i++) {
        if (gameObject.playerOrder[i].userName === this.userName) {
          gameObject.playerOrder.splice(i, 1);
          gameObject.players --;
          // Possible Frontend hitler status shot or chancellor with 3 cards in Fasc
        }
      }
    }
  }

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
      this.currentChancellor = "";
      this.currentPresident = "";
      this.drawnCardsArray = [];


    }
    shuffleDeck() {
      let isDeckShuffled = false;
      let playableCards = masterDeck.slice();
      this.deck = [];
      while (isDeckShuffled === false) {
        let number = Math.floor(Math.random() * playableCards.length);
        let card = playableCards.splice(number, 1);
        this.deck.push(card.toString());
        if (this.deck.length === masterDeck.length) {
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
        if (number2 = (this.players - 1)) {
          number2 = 0;
        }else {
          number2 = number2 +1;
        }
      }
      this.playerOrder[number2].party = "Fascist";
    }
    drawThreeCards(){
      this.drawnCardsArray = this.deck.splice(0,3)
      return this.drawnCardsArray
    }
    lookTop3() {
      this.drawnCardsArray.push(this.deck[0])
      this.drawnCardsArray.push(this.deck[1])
      this.drawnCardsArray.push(this.deck[2])
      return this.drawnCardsArray
    }
    cardPlayedOnBoard() {
      for (let i = 0; i < masterDeck.length; i++) {
        if (masterDeck[i] === this.drawnCardsArray[0]) {
          masterDeck.splice(i, 1);
          if (this.drawnCardsArray[0].includes('f')) {
            this.fascistPolicies ++
          }else if (this.drawnCardsArray[0].includes('l')) {
            this.liberalPolicies ++
          }
        }
      }
    }
    firstPresident() {
      let number = Math.floor(Math.random() * this.playerOrder.length);
      this.playerOrder[number].status = "President";
    }
  }




  //hold the vote (check for 3 times hitler)

  //pass fail vote result handler

  //president legistative cards from user inputs to updating main board




//// GAMEFLOW


  /// UPKEEP

  // template player to the left

  // template inelligiblechancelors Frees up old inelligible and sets new inelligible

  //failed election tracker and function to enact

  // reshuffle protocol (less than three cards)

  //check board status for wins

  // clear drawn cards partyArray

   // Vote needs reset
