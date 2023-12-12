// const game = require("../ttt_node/game.js")
class View {
  constructor(game, el, header) {
    this.game = game 
    this.el = el
    this.header = header
   this.handleClick = this.handleClick.bind(this)
   this.handleGameOver = this.handleGameOver.bind(this)
  }
  
  setupBoard() {
    let ul = document.createElement('ul')
  
    for(let i = 0; i< 3; i++){
      for(let j = 0; j < 3; j++){

        let li = document.createElement('li')
        li.dataset.pos = [i,j]
        
        li.addEventListener("mouseover", this.handleHover)
        li.addEventListener("mouseout", this.handleHover)
        // li.dataset.y = j
        ul.appendChild(li)
      }
    }
    this.el.appendChild(ul)
    ul.addEventListener("click", this.handleClick)
  }

 handleHover(e){
    e.stopPropagation()
    let ele = e.target 
    ele.classList.toggle('done')
  }
  
  handleClick(e) {
    if(!this.game.isOver()){
  
    if(!e.target.classList.contains('clicked')){

      e.stopPropagation()
      let ele = e.target 
      ele.classList.toggle('clicked')
    }
    e.target.textContent = this.game.currentPlayer
    if(this.game.currentPlayer === 'x'){
      e.target.classList.toggle('x')
    }else{
      e.target.classList.toggle('o')
    }
    this.game.playMove(e.target.dataset.pos.split(",").map(el=> parseInt(el)))
    this.handleGameOver()
  } 
  }

  
  handleGameOver() {
    if(this.game.isOver()){
      // this.game.winner
      if(this.game.winner() === 'x' || this.game.winner() === 'o'){
        this.header.textContent = this.game.winner() + " is winner!"
      }else{
        this.header.textContent = 'Draw!'
      }
    }
  }
}

module.exports = View