import React, { useEffect } from "react";
import styled from "styled-components";
import bishopMovement from "../bishopmoves";
import { pieceMoves } from "../constants";
import { BOARDS, GAMES } from "../fetchURLS";
import pawnMovement from "../pawnmoves";
import rookMovement from "../rookmoves";
import { fileToIndexNo, rankToIndexNo } from "../constants"
import { inCheck } from "../helpers"


const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 60px);
    grid-template-rows: repeat(8, 60px);
`

const Square = styled.div`
    background-color: ${props => (!(props.rank % 2) && !(props.file % 2)) || ((props.rank % 2) && (props.file % 2)) ? "#eeaaba" : "#6a1529"};
`

const Piece = styled.img`
    width: 100%
`

function GameBoard({ gameId, board, setBoard, moveHistory, turn, patternArray }) {

    useEffect(() => {
        fetch(GAMES + `/${gameId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                moves: moveHistory
            })
        })
        if (moveHistory.length) {
            fetch(BOARDS, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    board_info: board,
                    game_id: Number(gameId)
                })
            })
        }
    }, [board, gameId])

    function handleDrop(event, fileIndex, rankIndex) {
        const data = event.dataTransfer.getData("Co-Ordinates")
        const x = Number(data.split(",")[0])
        const y = Number(data.split(",")[1])
        const piece = data.split(",")[2]
        const moveKey = Object.keys(pieceMoves).find(key=>piece.includes(key))

        if (!piece.includes(turn)) return

        if (piece.includes("pawn")) {
            pawnMovement({ pieceMoves, moveKey, moveHistory, piece, board, y, x, fileIndex, rankIndex, setBoard, turn, patternArray })
            return
        }
        if (piece.includes("bishop")) {
            bishopMovement({ board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard, pieceMoves, moveKey, turn, patternArray })
            return
        }
        if (piece.includes("rook")) {
            rookMovement({ board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard, pieceMoves, moveKey, turn, patternArray  })
            return
        }
        if (piece.includes("queen")) {
            bishopMovement({ board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard, pieceMoves, moveKey, turn, patternArray })
            rookMovement({ board, rankIndex, fileIndex, x, y, piece, moveHistory, setBoard, pieceMoves, moveKey, turn, patternArray  })
            return
        }
        else for (const offset of pieceMoves[moveKey]) {
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
                if (inCheck({updatedBoard, rankToIndexNo, fileToIndexNo, turn, patternArray}).checked) return
                setBoard(updatedBoard)
                return
            }
        }
    }

    function handleDragStart(event, fileIndex, rankIndex, piece) {
        event.dataTransfer.setData("Co-Ordinates", `${fileIndex},${rankIndex},${piece}`)
    }

    return (
            <Board>
                {
                    board.map((rank, rankIndex) => rank.map((square, fileIndex) => {
                        if (square.piece.name === "black rook") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/gi.php?type=1&id=3400&i=1"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "black knight") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3402_black-knight.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "black bishop") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3401_black-bishop.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "black queen") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3399_black-queen.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "black king") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3398_black-king.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "black pawn") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3403_black-pawn.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "white pawn") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3409_white-pawn.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "white rook") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3406_white-rook.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "white knight") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3408_white-knight.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "white bishop") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3407_white-bishop.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "white queen") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3405_white-queen.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        if (square.piece.name === "white king") {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3404_white-king.png"} alt={square.piece.name} draggable={true} onDragStart={e=>{
                                    handleDragStart(e, fileIndex, rankIndex, square.piece.name)
                                }} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}/>
                            </Square>
                        }
                        else {
                            return <Square rank={rankIndex} file={fileIndex} key={square.position} onDrop={(e)=>{
                                e.preventDefault()
                                handleDrop(e, fileIndex, rankIndex)
                            }} onDragOver={e=>e.preventDefault()}>

                            </Square>
                        }
                    }))
                }
            </Board>
    )
}

export default GameBoard