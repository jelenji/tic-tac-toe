const gameBoard = (() => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const resetBoard = (board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const move = (a, b, symbol) => {
    board[a][b] = symbol;
  };

})();
