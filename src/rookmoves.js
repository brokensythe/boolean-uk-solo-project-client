function backAndForwardOffsets({rookMoves, rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard}) {
    for (const offset of rookMoves) {
        console.log("calculation", rankIndex - y, "y offset", offset.y);
        const updatedBoard = JSON.parse(JSON.stringify(board))
        const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
        if (rankIndex - y !== offset.y && (updatedBoard[y + offset.y][x + offset.x] && updatedBoard[y + offset.y][x + offset.x].piece)) return
        if (piece.includes("white") ? squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("white") : squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("black")) return
        if (x + offset.x === fileIndex && y + offset.y === rankIndex) {
            const squareToRemovePieceFrom = updatedBoard[y][x]
            moveHistory.push({
                pieceMoved: squareToRemovePieceFrom.piece.name,
                squareMovedTo: squareToMovePieceTo.position,
                pieceTaken: squareToMovePieceTo.piece.name,
                squareMovedFrom: squareToRemovePieceFrom.position
            })
            squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
            squareToRemovePieceFrom.piece = ""
            setBoard(updatedBoard)
            return
        }
    }
}

function leftAndRightOffsets({rookMoves, rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard}) {
    for (const offset of rookMoves) {
        console.log("calculation", rankIndex - y, "y offset", offset.y);
        const updatedBoard = JSON.parse(JSON.stringify(board))
        const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
        if (fileIndex - x !== offset.x && (updatedBoard[y + offset.y][x + offset.x] && updatedBoard[y + offset.y][x + offset.x].piece)) return
        if (piece.includes("white") ? squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("white") : squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("black")) return
        if (x + offset.x === fileIndex && y + offset.y === rankIndex) {
            const squareToRemovePieceFrom = updatedBoard[y][x]
            moveHistory.push({
                pieceMoved: squareToRemovePieceFrom.piece.name,
                squareMovedTo: squareToMovePieceTo.position,
                pieceTaken: squareToMovePieceTo.piece.name,
                squareMovedFrom: squareToRemovePieceFrom.position
            })
            squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
            squareToRemovePieceFrom.piece = ""
            setBoard(updatedBoard)
            return
        }
    }
}

function rookMovement({rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard, pieceMoves, moveKey}) {
    if (rankIndex - y > 0) {
        // straight back white, straight ahead black
        const rookMoves = pieceMoves[moveKey].straightAhead.slice(0, rankIndex - y)
        console.log("Working rook movements?", rookMoves);
        backAndForwardOffsets({ rookMoves, rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard })
    }
    if (rankIndex - y < 0) {
        // straight ahead white, straight back black
        const rookMoves = pieceMoves[moveKey].straightBack.slice(0, y - rankIndex)
        console.log("Working rook movements?", rookMoves);
        backAndForwardOffsets({ rookMoves, rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard })
    }
    if (fileIndex - x < 0) {
        // move left
        const rookMoves = pieceMoves[moveKey].moveLeft.slice(0, x - fileIndex)
        console.log("Working rook movements?", rookMoves);
        leftAndRightOffsets({ rookMoves, rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard })
    }
    if (fileIndex - x > 0) {
        // move right
        const rookMoves = pieceMoves[moveKey].moveRight.slice(0, fileIndex - x)
        console.log("Working rook movements?", rookMoves);
        leftAndRightOffsets({ rookMoves, rankIndex, board, fileIndex, x, y, piece, moveHistory, setBoard })
    }
}

export default rookMovement