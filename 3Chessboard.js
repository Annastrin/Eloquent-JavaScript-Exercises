let chessboard = (width, height = width) => {
  let board = '';
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if ((i + j) % 2 == 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    if (j < height - 1) {
      board += '\n';
    }  
  }
  console.log(board);
  return;
}

chessboard(8);
