import { kingChecks } from "./constants"

export function whoWon(board) {
    if (board) {
        const kingObject = {
            White: false,
            Black: false
        }
    
        for (const rank of board) {
            for (const square of rank) {
                if (kingObject.Black && kingObject.White) break
                if (square.piece.name === "black king") kingObject.Black = true
                if (square.piece.name === "white king") kingObject.White = true
            }
        }
    
        if (Object.values(kingObject).some(entry => entry === false)) {
            return Object.entries(kingObject).find(info => info.includes(true))[0]
        }
    }

    return false
    
}

function unblockablePiecesCheckCheck({piece, turn, updatedBoard, whiteKingRankIndex, whiteKingFileIndex, checkingPieces, blackKingRankIndex, blackKingFileIndex}) {
    for (const check of kingChecks[piece]) {
        if (turn === "white" && updatedBoard[whiteKingRankIndex - check.y] && updatedBoard[whiteKingRankIndex - check.y][whiteKingFileIndex + check.x] && updatedBoard[whiteKingRankIndex - check.y][whiteKingFileIndex + check.x].piece.name === `black ${piece}`) {
            checkingPieces[updatedBoard[whiteKingRankIndex - check.y][whiteKingFileIndex + check.x].piece.name] = {
                rankIndex: whiteKingRankIndex - check.y,
                fileIndex: whiteKingFileIndex + check.x
            }
        }
        if (turn === "black" && updatedBoard[blackKingRankIndex + check.y] && updatedBoard[blackKingRankIndex + check.y][blackKingFileIndex + check.x] && updatedBoard[blackKingRankIndex + check.y][blackKingFileIndex + check.x].piece.name === `white ${piece}`) {
            checkingPieces[updatedBoard[blackKingRankIndex + check.y][blackKingFileIndex + check.x].piece.name] = {
                rankIndex: blackKingRankIndex + check.y,
                fileIndex: blackKingFileIndex + check.x
            }
        }
    }
}

export function inCheck({updatedBoard, rankToIndexNo, fileToIndexNo, turn}) {
    let blackKingFile = null
    let blackKingRank = null
    let whiteKingFile = null
    let whiteKingRank = null
    for (const rank of updatedBoard) {
        for (const square of rank) {
            if (square.piece.name === "black king") {
                 blackKingFile = square.position.split("")[0]
                 blackKingRank = square.position.split("")[1]
            }
            if (square.piece.name === "white king") {
                 whiteKingFile = square.position.split("")[0]
                 whiteKingRank = square.position.split("")[1]
            }
        }
    }
    console.log("This is the black King", rankToIndexNo[blackKingRank], fileToIndexNo[blackKingFile], "This is the white King", rankToIndexNo[whiteKingRank], fileToIndexNo[whiteKingFile]);

    const whiteKingFileIndex = fileToIndexNo[whiteKingFile]
    const whiteKingRankIndex = rankToIndexNo[whiteKingRank]
    const blackKingFileIndex = fileToIndexNo[blackKingFile]
    const blackKingRankIndex = rankToIndexNo[blackKingRank]

    const checkingPieces = {}

    for (const piece in kingChecks) {
        if (piece === "pawn") {
            unblockablePiecesCheckCheck({ piece, turn, updatedBoard, whiteKingRankIndex, whiteKingFileIndex, checkingPieces, blackKingRankIndex, blackKingFileIndex})
        }
        if (piece === "king") {
            unblockablePiecesCheckCheck({ piece, turn, updatedBoard, whiteKingRankIndex, whiteKingFileIndex, checkingPieces, blackKingRankIndex, blackKingFileIndex})
        }
        if (piece === "knight") {
            unblockablePiecesCheckCheck({ piece, turn, updatedBoard, whiteKingRankIndex, whiteKingFileIndex, checkingPieces, blackKingRankIndex, blackKingFileIndex})
        }
    }
    console.log("the checking pieces", checkingPieces, "if the current turn ends checked", Object.keys(checkingPieces).length > 0);
}