 /*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting



window.findSolution = function(row, n, board, validator, callback) {
  if (row === n) {
    callback();
    return;
  }
  for (let i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[validator]()) {
      findSolution(row + 1, n, board, validator, callback);
    }
    board.togglePiece(row, i);
  }
}

 window.findNRooksSolution = function(n) {
  let board = new Board({n:n});
  let solution;
  findSolution(0, n, board, 'hasAnyRooksConflicts', function() {
    solution = board.rows().map(row => row.slice());
  });
  return solution;
 };

 window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({n:n});
  findSolution(0, n, board, 'hasAnyRooksConflicts', function() {
    return solutionCount += 1;
  });
  return solutionCount;
 };

window.findNQueensSolution = function(n) {
  let board = new Board({n:n});
  let solution = board.rows();
  findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    solution = board.rows().map(row => row.slice());
  });
  return solution;

};

window.countNQueensSolutions = function(n) {
  let solution = 0;
  let board = new Board({n:n});
  findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    return solution += 1;
  });
  return solution;
};

