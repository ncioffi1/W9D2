// Add your import statements for View and Game here
const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")
document.addEventListener("DOMContentLoaded", () => {
  let game =new Game()
  let el = document.querySelector(".ttt")
  let header = document.querySelector(".gameHappening")
  let view = new View(game, el , header)
  view.setupBoard()
  
});