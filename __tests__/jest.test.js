import { Game, masterDeck, Players } from './../src/backend.js'

describe ('Game', () => {
  test('should populate the deck array based on random elements from total deck', () => {
    let players = 5
    let game = new Game(players);
    game.shuffleDeck();
    expect(game.deck.length).toEqual(17)
  });
  test('should assign two players a fascist and one of them as hitler', () => {
    let player1 = new Players('Tom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game3 = new Game(5);
    game3.playerOrder = [player1, player2, player3, player4, player5];
    game3.assignParty();
    expect(game3.playerOrder[0].party==="Fascist" || game3.playerOrder[1].party==="Fascist" || game3.playerOrder[2].party==="Fascist" || game3.playerOrder[3].party==="Fascist" || game3.playerOrder[4].party==="Fascist");
    expect(game3.playerOrder[0].secret==="Hitler" || game3.playerOrder[1].secret==="Hitler" || game3.playerOrder[2].secret==="Hitler" || game3.playerOrder[3].secret==="Hitler" || game3.playerOrder[4].secret==="Hitler");
  })
  test('should return an array of three cards', () => {
    let players = 5
    let game2 = new Game(players);
    game2.shuffleDeck();
    game2.drawThreeCards();
    expect(game2.drawnCardsArray.length).toEqual(3)
  })
  test('should return an array of three cards and not touch the deck', () => {
    let players = 5
    let game4 = new Game(players);
    game4.shuffleDeck();
    game4.lookTop3();
    expect(game4.drawnCardsArray.length).toEqual(3)
    expect(game4.deck.length).toEqual(17)
  })
  test('should remove a card from the master deck and add it to lib or fas policies', () => {
    let players = 5
    let game5 = new Game(players);
    game5.shuffleDeck();
    game5.drawnCardsArray = ['fascist3'];
    game5.cardPlayedOnBoard();
    game5.shuffleDeck();
    expect(masterDeck.length).toEqual(16);
    expect(game5.fascistPolicies).toEqual(1)
  })
  test('should assign one player as president', () => {
    let player1 = new Players('Thom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game6 = new Game(5);
    game6.playerOrder = [player1, player2, player3, player4, player5];
    game6.firstPresident();
    expect(game6.playerOrder[0].status==="President" || game6.playerOrder[1].status==="President" || game6.playerOrder[2].status==="President" || game6.playerOrder[3].status==="President" || game6.playerOrder[4].status==="President");
    expect(game6.playerOrder.length).toEqual(5)
  })
  test('should nominate one player as chancellor', () => {
    let player1 = new Players('Thom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game7 = new Game(5);
    game7.playerOrder = [player1, player2, player3, player4, player5];
    player1.status = "Previous Power";
    player1.nominateChancellor();
    expect(game7.playerOrder[0].status).toEqual("Previous Power");
  })
  test('should assign one player as dead', () => {
    let player1 = new Players('Thom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game8 = new Game(5);
    game8.playerOrder = [player1, player2, player3, player4, player5];
    player1.shootPlayer(game8) ;
    expect(game8.playerOrder[0].length === 4);
    expect(player1.status).toEqual("Dead");
    expect(game8.players).toEqual(4)
  })
  test('should vote in a chancellor', () => {
    let player1 = new Players('Thom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game9 = new Game(5);
    game9.playerOrder = [player1, player2, player3, player4, player5];
    game9.shuffleDeck();
    game9.totalYesVote = 3;
    game9.electionTracker = 2;
    player1.voteHandle(game9) ;
    expect(player1.status).toEqual("Chancellor");
    expect(game9.electionTracker).toEqual(0);
  })
  test('should clean up the end of the round', () => {
    let player1 = new Players('Thom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game10 = new Game(5);
    game10.playerOrder = [player1, player2, player3, player4, player5];
    game10.totalYesVote = 3;
    game10.drawnCardsArray = ['fascist1'];
    game10.shuffleDeck();
    game10.deck = [1, 2, 3];
    game10.firstPresident();
    player3.status = 'Previous Power';
    player2.status = 'Chancellor'
    game10.endOfRound(game10);
    expect(game10.playerOrder[0].status).toEqual("President");
    expect(game10.playerOrder[4].status).toEqual("Previous Power");
    expect(game10.totalYesVote).toEqual(0);
    expect(game10.drawnCardsArray).toEqual([]);
    expect(game10.deck.length).toEqual(16);
  })

});
