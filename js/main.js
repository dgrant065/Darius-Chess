  console.log("js is working")
  
  /*----- constants -----*/
const PLAYERS = {
  '0': '',
  '1': 'White',
  '-1': 'Black',
}

  /*----- state variables -----*/
let board, turn, winner

  /*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const boardEls = [...document.querySelectorAll('#board > div')]

  /*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);

  /*----- functions -----*/
  init();

  function init() {
    board = [
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0 ,0, 0],
    ];
    turn = 1;
    winner = null;
    render();
  }

function render() {
  renderBoard();
  renderMessage();

}

function renderBoard() {
  board.forEach(function(colArr, colIdx) {
    colArr.forEach(function(cell, rowIdx) {
      const cellId = `c${colIdx}r${rowIdx}`;
      const cellEl = document.getElementById(cellId);
      cellEl.innerText = PLAYERS[cell];
    });
  });
}

function renderMessage() {
  
}




