import { Game, deckArray, Players } from './../src/backend.js'

describe ('Game', () => {
  test('should populate the deck array based on random elements from total deck', () => {
    let players = 5
    let game = new Game(players);
    game.shuffleDeck(deckArray);
    expect(game.deck.length).toEqual(17)
  });
  test('should assign two players a fascist and one of them as hitler', () => {
    let player1 = new Players('Tom');
    let player2 = new Players('Bill');
    let player3 = new Players('Sheila');
    let player4 = new Players('Tara');
    let player5 = new Players('George');
    let game = new Game(5);
    game.playerOrder = [player1, player2, player3, player4, player5];
    game.assignParty();
    expect(game.playerOrder[0].party==="Fascist" || game.playerOrder[1].party==="Fascist" || game.playerOrder[2].party==="Fascist" || game.playerOrder[3].party==="Fascist" || game.playerOrder[4].party==="Fascist");
    expect(game.playerOrder[0].secret==="Hitler" || game.playerOrder[1].secret==="Hitler" || game.playerOrder[2].secret==="Hitler" || game.playerOrder[3].secret==="Hitler" || game.playerOrder[4].secret==="Hitler");
  })
});
