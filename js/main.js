  console.log("js is working")
  
  /*----- constants -----*/


  /*----- state variables -----*/
let board, turn, winner

  /*----- cached elements  -----*/
const playAgainButton = document.querySelector('button')

  /*----- event listeners -----*/


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
    
  }