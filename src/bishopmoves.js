function bishopOffsets({bishopMoves, board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard}) {
    for (const offset of bishopMoves) {
        const updatedBoard = JSON.parse(JSON.stringify(board))
        const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
        if (piece.includes("white") ? fileIndex - x !== offset.x && (updatedBoard[y - offset.y][x + offset.x] && updatedBoard[y - offset.y][x + offset.x].piece) : fileIndex - x !== offset.x && (updatedBoard[y + offset.y][x + offset.x] && updatedBoard[y + offset.y][x + offset.x].piece)) return
        if (piece.includes("white") ? squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("white") : squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("black")) return
        if (piece.includes("white") ? x + offset.x === fileIndex && y - offset.y === rankIndex : x + offset.x === fileIndex && y + offset.y === rankIndex) {
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

function bishopMovement({board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard, pieceMoves, moveKey}) {
    if (piece.includes("white") ? fileIndex - x > 0 && rankIndex - y < 0 : fileIndex - x > 0 && rankIndex - y > 0) {
        // forward right
        const bishopMoves = pieceMoves[moveKey].forwardRight.slice(0, fileIndex - x)
        bishopOffsets({bishopMoves, board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard})
    }
    if (piece.includes("white") ? fileIndex - x < 0 && rankIndex - y > 0 : fileIndex - x < 0 && rankIndex - y < 0) {
        // backwards left
        const bishopMoves = pieceMoves[moveKey].backwardsLeft.slice(0, x - fileIndex)
        bishopOffsets({bishopMoves, board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard})
    }
    if (piece.includes("white") ? fileIndex - x < 0 && rankIndex - y < 0 : fileIndex - x < 0 && rankIndex - y > 0) {
        // forward left
        const bishopMoves = pieceMoves[moveKey].forwardLeft.slice(0, x - fileIndex)
        bishopOffsets({bishopMoves, board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard})
    }
    if (piece.includes("white") ? fileIndex - x > 0 && rankIndex - y > 0 : fileIndex - x > 0 && rankIndex - y < 0) {
        // backwards right
        const bishopMoves = pieceMoves[moveKey].backwardsRight.slice(0, fileIndex - x)
        bishopOffsets({bishopMoves, board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard})
    }
}

export default bishopMovement