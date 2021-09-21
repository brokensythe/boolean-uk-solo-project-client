function pawnMovement({ pieceMoves, moveKey, moveHistory, piece, board, y, x, fileIndex, rankIndex, setBoard }) {
    let pawnMoves = [...pieceMoves[moveKey]]
    const lastMovePiece = moveHistory.length > 0 && moveHistory[moveHistory.length - 1].pieceMoved
    const rankMovedTo = moveHistory.length > 0 && Number(moveHistory[moveHistory.length - 1].squareMovedTo.split("")[1])
    const rankMovedFrom = moveHistory.length > 0 && Number(moveHistory[moveHistory.length - 1].squareMovedFrom.split("")[1])
    const file = moveHistory.length > 0 && moveHistory[moveHistory.length - 1].squareMovedFrom.split("")[0]
    const fileToIndexNo = {
        "A" : 0,
        "B" : 1,
        "C" : 2,
        "D" : 3,
        "E" : 4,
        "F" : 5,
        "G" : 6,
        "H" : 7,
    }
    
    // take diagonal right
    if (piece.includes("white") ? board[y - 1][x + 1]  && board[y - 1][x + 1].piece.name : board[y + 1][x + 1] && board[y + 1][x + 1].piece.name) {
        pawnMoves.push({ x: 1, y: 1 })
    }
    // take diagonal left
    if (piece.includes("white") ? board[y - 1][x - 1] && board[y - 1][x - 1].piece.name : board[y + 1][x - 1] && board[y + 1][x - 1].piece.name) {
        pawnMoves.push({ x: -1, y: 1 })
    }
    // move two spaces first move
    if (piece.includes("white") ? !board[y][x].piece.moves && !board[y - 2][x].piece.name : !board[y][x].piece.moves && !board[y + 2][x].piece.name) {
        pawnMoves.push({ x: 0, y: 2 })
    }
    // restrictions
    if (piece.includes("white") ? board[y - 1][x].piece.name : board[y + 1][x].piece.name) {
        pawnMoves = pawnMoves.filter(offset => offset.x)
    }
    if (piece.includes("white") ? y === 3 && lastMovePiece === "black pawn" && ( (board[y][x + 1] && board[y][x + 1].piece.name === "black pawn") || (board[y][x - 1] && board[y][x - 1].piece.name === "black pawn") ) && rankMovedFrom - rankMovedTo === 2 : y === 4 && lastMovePiece === "white pawn" && ( (board[y][x + 1] && board[y][x + 1].piece.name === "white pawn") || (board[y][x -1] && board[y][x -1].piece.name === "white pawn") ) && rankMovedTo - rankMovedFrom === 2) {
        const opponentFile = fileToIndexNo[file]
        if (x > opponentFile) pawnMoves.push({ x: -1, y: 1 })
        if (x < opponentFile) pawnMoves.push({ x: 1, y: 1 })
    
        for (const offset of pawnMoves) {
            if (piece.includes("white") ? x + offset.x === fileIndex && y - offset.y === rankIndex : x + offset.x === fileIndex && y + offset.y === rankIndex) {
                const updatedBoard = JSON.parse(JSON.stringify(board))
                const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
                if (piece.includes("white") ? squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("white") : squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("black")) return
                const squareToRemovePieceFrom = updatedBoard[y][x]
                if (piece.includes("white") ? fileIndex - x === -1 && y - rankIndex === 1 : fileIndex - x === -1 && rankIndex - y === 1) {
                    const enPeasantSquare = updatedBoard[y][x - 1]
                    moveHistory.push({
                        pieceMoved: squareToRemovePieceFrom.piece.name,
                        squareMovedTo: squareToMovePieceTo.position,
                        pieceTaken: enPeasantSquare.piece.name || squareToMovePieceTo.piece.name,
                        squareMovedFrom: squareToRemovePieceFrom.position
                    })
                    squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
                    squareToRemovePieceFrom.piece = ""
                    enPeasantSquare.piece = ""
                    setBoard(updatedBoard)
                    return
                }
                if (piece.includes("white") ? fileIndex - x === 1 && y - rankIndex === 1 : fileIndex - x === 1 && rankIndex - y === 1) {
                    const enPeasantSquare = updatedBoard[y][x + 1]
                    moveHistory.push({
                        pieceMoved: squareToRemovePieceFrom.piece.name,
                        squareMovedTo: squareToMovePieceTo.position,
                        pieceTaken: enPeasantSquare.piece.name || squareToMovePieceTo.piece.name,
                        squareMovedFrom: squareToRemovePieceFrom.position
                    })
                    squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
                    squareToRemovePieceFrom.piece = ""
                    enPeasantSquare.piece = ""
                    setBoard(updatedBoard)
                    return
                }
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
    for (const offset of pawnMoves) {
        if (piece.includes("white") ? x + offset.x === fileIndex && y - offset.y === rankIndex : x + offset.x === fileIndex && y + offset.y === rankIndex) {
            const updatedBoard = JSON.parse(JSON.stringify(board))
            const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
            if (piece.includes("white") ? squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("white") : squareToMovePieceTo.piece && squareToMovePieceTo.piece.name.includes("black")) return
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

export default pawnMovement