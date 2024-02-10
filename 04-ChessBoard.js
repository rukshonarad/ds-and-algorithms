const findChessBoarSpace = (numOfGrains) => {
    let chessBoarSpace = 1;
    let placedGrains = 1;
    while (placedGrains < numOfGrains) {
        placedGrains *= 2;
        chessBoarSpace += 1;
    }
    return chessBoarSpace;
};
console.log(findChessBoarSpace(16));
console.log(findChessBoarSpace(20));
