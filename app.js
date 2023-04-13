const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let xTurn = true;
  let oTurn = false;

  const resetBoard = (board = ["", "", "", "", "", "", "", "", ""]);

  const changeTurn = () => {
    xTurn = xTurn == true ? false : true;
    oTurn = oTurn == true ? false : true;
    console.log("xturn" + xTurn);
  };

  const move = (a) => {
    if (board[a] === "") {
      board[a] = xTurn === true ? "X" : "O";
      changeTurn();
      console.log(board);
    }
  };

  return { board, move };
})();

squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    index = e.target.id;
    gameBoard.move(index);
    displayBoard();
  });
});

function resetBoard() {
  squares.forEach((square) => {
    square.textContent = "";
  });
}

function displayBoard() {
  resetBoard();
  let counter = 0,
    element,
    symbol;

  squares.forEach((square) => {
    if (gameBoard.board[counter] === "") {
      counter++;
    } else {
      symbol = gameBoard.board[counter];
      element = document.createElement("div");
      element.classList.add("symbol");
      element.textContent = symbol;
      square.appendChild(element);
      counter++;
    }
  });
}
