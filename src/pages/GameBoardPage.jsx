import React, { useState } from "react";
import styled from "styled-components";
import "../styles/GameBoardPage.css"

const INITIAL_BOARD = [
    [{
        piece: {
            name: "black rook",
            moves: 0
        },
        position: "A8"
    },{
        piece: {
            name: "black knight",
            moves: 0
        },
        position: "B8"
    },{
        piece: {
            name: "black bishop",
            moves: 0
        },
        position: "C8"
    },{
        piece: {
            name: "black queen",
            moves: 0
        },
        position: "D8"
    },{
        piece: {
            name: "black king",
            moves: 0
        },
        position: "E8"
    },{
        piece: {
            name: "black bishop",
            moves: 0
        },
        position: "F8"
    },{
        piece: {
            name: "black knight",
            moves: 0
        },
        position: "G8"
    },{
        piece: {
            name: "black rook",
            moves: 0
        },
        position: "H8"
    }],
    [{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "A7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "B7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "C7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "D7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "E7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "F7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "G7"
    },{
        piece: {
            name: "black pawn",
            moves: 0
        },
        position: "H7"
    }],
    [{
        piece: "",
        position: "A6"
    },{
        piece: "",
        position: "B6"
    },{
        piece: "",
        position: "C6"
    },{
        piece: "",
        position: "D6"
    },{
        piece: "",
        position: "E6"
    },{
        piece: "",
        position: "F6"
    },{
        piece: "",
        position: "G6"
    },{
        piece: "",
        position: "H6"
    }],
    [{
        piece: "",
        position: "A5"
    },{
        piece: "",
        position: "B5"
    },{
        piece: "",
        position: "C5"
    },{
        piece: "",
        position: "D5"
    },{
        piece: "",
        position: "E5"
    },{
        piece: "",
        position: "F5"
    },{
        piece: "",
        position: "G5"
    },{
        piece: "",
        position: "H5"
    }],
    [{
        piece: "",
        position: "A4"
    },{
        piece: "",
        position: "B4"
    },{
        piece: "",
        position: "C4"
    },{
        piece: "",
        position: "D4"
    },{
        piece: "",
        position: "E4"
    },{
        piece: "",
        position: "F4"
    },{
        piece: "",
        position: "G4"
    },{
        piece: "",
        position: "H4"
    }],
    [{
        piece: "",
        position: "A3"
    },{
        piece: "",
        position: "B3"
    },{
        piece: "",
        position: "C3"
    },{
        piece: "",
        position: "D3"
    },{
        piece: "",
        position: "E3"
    },{
        piece: "",
        position: "F3"
    },{
        piece: "",
        position: "G3"
    },{
        piece: "",
        position: "H3"
    }],
    [{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "A2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "B2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "C2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "D2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "E2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "F2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "G2" 
    },{
        piece: {
            name: "white pawn",
            moves: 0
        },
        position: "H2" 
    }],
    [{
        piece: {
            name: "white rook",
            moves: 0
        },
        position: "A1"
    },{
        piece: {
            name: "white knight",
            moves: 0
        },
        position: "B1"  
    },{
        piece: {
            name: "white bishop",
            moves: 0
        },
        position: "C1"  
    },{
        piece: {
            name: "white queen",
            moves: 0
        },
        position: "D1"  
    },{
        piece: {
            name: "white king",
            moves: 0
        },
        position: "E1" 
    },{
        piece: {
            name: "white bishop",
            moves: 0
        },
        position: "F1" 
    },{
        piece: {
            name: "white knight",
            moves: 0
        },
        position: "G1" 
    },{
        piece: {
            name: "white rook",
            moves: 0
        },
        position: "H1"
    }]
]

const pieceMoves = {
    "pawn": [
        { x: 0, y: 1}
    ],
    "king": [
        // forward movement
        { x: 0, y: 1},
        // backward movement
        { x: 0, y: -1},
        // move right
        { x: 1, y: 0},
        // move left
        { x: -1, y: 0},
        // forward right
        { x: 1, y: 1},
        // forward left
        { x: -1, y: 1},
        // backward left
        { x: -1, y: -1},
        // backward right
        { x: 1, y: -1}
    ],
    "knight": [
        { x: 1, y: 2},
        { x: 2, y: 1},
        { x: 2, y: -1},
        { x: 1, y: -2},
        { x: -1, y: -2},
        { x: -2, y: -1},
        { x: -2, y: 1},
        { x: -1, y: 2}
    ],
    "bishop": [
        // forward right
        { x: 1, y: 1},
        { x: 2, y: 2},
        { x: 3, y: 3},
        { x: 4, y: 4},
        { x: 5, y: 5},
        { x: 6, y: 6},
        { x: 7, y: 7},
        // backwards left
        { x: -1, y: -1},
        { x: -2, y: -2},
        { x: -3, y: -3},
        { x: -4, y: -4},
        { x: -5, y: -5},
        { x: -6, y: -6},
        { x: -7, y: -7},
        // forward left
        { x: -1, y: 1},
        { x: -2, y: 2},
        { x: -3, y: 3},
        { x: -4, y: 4},
        { x: -5, y: 5},
        { x: -6, y: 6},
        { x: -7, y: 7},
        // backwards right
        { x: 1, y: -1},
        { x: 2, y: -2},
        { x: 3, y: -3},
        { x: 4, y: -4},
        { x: 5, y: -5},
        { x: 6, y: -6},
        { x: 7, y: -7}
    ],
    "rook": [
        // straight ahead
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: 0, y: 3},
        { x: 0, y: 4},
        { x: 0, y: 5},
        { x: 0, y: 6},
        { x: 0, y: 7},
        // straight back
        { x: 0, y: -1},
        { x: 0, y: -2},
        { x: 0, y: -3},
        { x: 0, y: -4},
        { x: 0, y: -5},
        { x: 0, y: -6},
        { x: 0, y: -7},
        // move left
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -3, y: 0},
        { x: -4, y: 0},
        { x: -5, y: 0},
        { x: -6, y: 0},
        { x: -7, y: 0},
        // move right
        { x: 1, y: 0},
        { x: 2, y: 0},
        { x: 3, y: 0},
        { x: 4, y: 0},
        { x: 5, y: 0},
        { x: 6, y: 0},
        { x: 7, y: 0}
    ],
    "queen": [
        // forward right
        { x: 1, y: 1},
        { x: 2, y: 2},
        { x: 3, y: 3},
        { x: 4, y: 4},
        { x: 5, y: 5},
        { x: 6, y: 6},
        { x: 7, y: 7},
        // backwards left
        { x: -1, y: -1},
        { x: -2, y: -2},
        { x: -3, y: -3},
        { x: -4, y: -4},
        { x: -5, y: -5},
        { x: -6, y: -6},
        { x: -7, y: -7},
        // forward left
        { x: -1, y: 1},
        { x: -2, y: 2},
        { x: -3, y: 3},
        { x: -4, y: 4},
        { x: -5, y: 5},
        { x: -6, y: 6},
        { x: -7, y: 7},
        // backwards right
        { x: 1, y: -1},
        { x: 2, y: -2},
        { x: 3, y: -3},
        { x: 4, y: -4},
        { x: 5, y: -5},
        { x: 6, y: -6},
        { x: 7, y: -7},
        // straight ahead
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: 0, y: 3},
        { x: 0, y: 4},
        { x: 0, y: 5},
        { x: 0, y: 6},
        { x: 0, y: 7},
        // straight back
        { x: 0, y: -1},
        { x: 0, y: -2},
        { x: 0, y: -3},
        { x: 0, y: -4},
        { x: 0, y: -5},
        { x: 0, y: -6},
        { x: 0, y: -7},
        // move left
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -3, y: 0},
        { x: -4, y: 0},
        { x: -5, y: 0},
        { x: -6, y: 0},
        { x: -7, y: 0},
        // move right
        { x: 1, y: 0},
        { x: 2, y: 0},
        { x: 3, y: 0},
        { x: 4, y: 0},
        { x: 5, y: 0},
        { x: 6, y: 0},
        { x: 7, y: 0}
    ]
}

const moveHistory = []

const Container = styled.div`
    height: 100vh;
    display: grid;
`

const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(8, minmax(30px, 60px));
    grid-template-rows: repeat(8, minmax(30px, 60px));
`

const Square = styled.div`
    background-color: ${props => (!(props.rank % 2) && !(props.file % 2)) || ((props.rank % 2) && (props.file % 2)) ? "#f0d9b5" : "#b58863"};
    color: black; 
`

// const BlackRook = styled.img`
//     width: 100%;
// `
//  <BlackRook src={"https://www.symbols.com/gi.php?type=1&id=3400&i=1"} alt={square.piece}/>

// const WhiteRook = styled.img`
//     width: 100%
// `
//  <WhiteRook src={"https://www.symbols.com/images/symbol/1/3406_white-rook.png"} alt={square.piece}/>

// const BlackKnight = styled.img`
//     width: 100%
// `
//  <BlackKnight src={"https://www.symbols.com/images/symbol/1/3402_black-knight.png"} alt={square.piece}/>

// const WhiteKnight = styled.img`
//     width: 100%
// `
//  <WhiteKnight src={"https://www.symbols.com/images/symbol/1/3408_white-knight.png"} alt={square.piece}/>

// const BlackBishop = styled.img`
//     width: 100%
// `
//  <BlackBishop src={"https://www.symbols.com/images/symbol/1/3401_black-bishop.png"} alt={square.piece}/>

// const WhiteBishop = styled.img`
//     width: 100%
// `
//  <WhiteBishop src={"https://www.symbols.com/images/symbol/1/3407_white-bishop.png"} alt={square.piece}/>

// const BlackQueen = styled.img`
//     width: 100%
// `
//  <BlackQueen src={"https://www.symbols.com/images/symbol/1/3399_black-queen.png"} alt={square.piece}/>

// const WhiteQueen = styled.img`
//     width: 100%
// `
//  <WhiteQueen src={"https://www.symbols.com/images/symbol/1/3405_white-queen.png"} alt={square.piece}/>

// const BlackKing = styled.img`
//     width: 100%
// `
//  <BlackKing src={"https://www.symbols.com/images/symbol/1/3398_black-king.png"} alt={square.piece}/>

// const WhiteKing = styled.img`
//     width: 100%
// `
//  <WhiteKing src={"https://www.symbols.com/images/symbol/1/3404_white-king.png"} alt={square.piece}/>

// const BlackPawn = styled.img`
//     width: 100%
// `
//  <BlackPawn src={"https://www.symbols.com/images/symbol/1/3403_black-pawn.png"} alt={square.piece}/>

// const WhitePawn = styled.img`
//     width: 100%
// `
//  <WhitePawn src={"https://www.symbols.com/images/symbol/1/3409_white-pawn.png"} alt={square.piece}/>

const Piece = styled.img`
    width: 100%
`

function GameBoardPage() {

    const [board, setBoard] = useState(INITIAL_BOARD)

    function handleDrop(event, fileIndex, rankIndex) {
        const data = event.dataTransfer.getData("Co-Ordinates")
        const x = Number(data.split(",")[0])
        const y = Number(data.split(",")[1])
        const piece = data.split(",")[2]
        const moveKey = Object.keys(pieceMoves).find(key=>piece.includes(key))
        if (piece.includes("pawn")) {
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
            if (piece.includes("white") ? board[y - 1][x + 1].piece.name : board[y + 1][x + 1].piece.name) {
                pawnMoves.push({ x: 1, y: 1 })
            }
            // take diagonal left
            if (piece.includes("white") ? board[y - 1][x - 1].piece.name : board[y + 1][x - 1].piece.name) {
                pawnMoves.push({ x: -1, y: 1 })
            }
            // move two spaces first move
            if (piece.includes("white") ? !board[y][x].piece.moves && !board[y - 2][x].piece.name : !board[y][x].piece.moves && !board[y + 2][x].piece.name) {
                pawnMoves.push({ x: 0, y: 2 })
            }
            // restrictions
            if (piece.includes("white") ? board[y - 1][x].piece.name : board[y + 1][x].piece.name) {
                console.log(board[y - 1][x].piece.name);
                pawnMoves = pawnMoves.filter(offset => offset.x)
            }
            if (piece.includes("white") ? y === 3 && lastMovePiece === "black pawn" && ( board[y][x + 1].piece.name === "black pawn" || board[y][x - 1].piece.name === "black pawn" ) && rankMovedFrom - rankMovedTo === 2 : y === 4 && lastMovePiece === "white pawn" && ( board[y][x + 1].piece.name === "white pawn" || board[y][x -1].piece.name === "white pawn" ) && rankMovedTo - rankMovedFrom === 2) {
                const opponentFile = fileToIndexNo[file]
                if (x > opponentFile) pawnMoves.push({ x: -1, y: 1 })
                if (x < opponentFile) pawnMoves.push({ x: 1, y: 1 })

                for (const offset of pawnMoves) {
                    if (piece.includes("white") ? x + offset.x === fileIndex && y - offset.y === rankIndex : x + offset.x === fileIndex && y + offset.y === rankIndex) {
                        const updatedBoard = JSON.parse(JSON.stringify(board))
                        const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
                        const squareToRemovePieceFrom = updatedBoard[y][x]
                        console.log("square details", squareToMovePieceTo.piece.name, squareToMovePieceTo.piece.moves, squareToMovePieceTo.position);
                        squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
                        if (piece.includes("white") ? fileIndex - x === -1 && y - rankIndex === 1 : fileIndex - x === -1 && rankIndex - y === 1) {
                            const enPeasantSquare = updatedBoard[y][x - 1]
                            moveHistory.push({
                                pieceMoved: squareToRemovePieceFrom.piece.name,
                                squareMovedTo: squareToMovePieceTo.position,
                                pieceTaken: enPeasantSquare.piece.name,
                                squareMovedFrom: squareToRemovePieceFrom.position
                            })
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
                                pieceTaken: enPeasantSquare.piece.name,
                                squareMovedFrom: squareToRemovePieceFrom.position
                            })
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
                        setBoard(updatedBoard)
                        return
                    }
                }
            }
            for (const offset of pawnMoves) {
                if (piece.includes("white") ? x + offset.x === fileIndex && y - offset.y === rankIndex : x + offset.x === fileIndex && y + offset.y === rankIndex) {
                    const updatedBoard = JSON.parse(JSON.stringify(board))
                    const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
                    const squareToRemovePieceFrom = updatedBoard[y][x]
                    console.log("square details", squareToMovePieceTo.piece.name, squareToMovePieceTo.piece.moves, squareToMovePieceTo.position);
                    moveHistory.push({
                        pieceMoved: squareToRemovePieceFrom.piece.name,
                        squareMovedTo: squareToMovePieceTo.position,
                        pieceTaken: squareToMovePieceTo.piece.name,
                        squareMovedFrom: squareToRemovePieceFrom.position
                    })
                    squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
                    squareToRemovePieceFrom.piece = ""
                    setBoard(updatedBoard)
                    for (const item of moveHistory) {
                        console.log(item);
                    }
                    return
                }
            }
        }
        else for (const offset of pieceMoves[moveKey]) {
            if (piece.includes("white") ? x + offset.x === fileIndex && y - offset.y === rankIndex : x + offset.x === fileIndex && y + offset.y === rankIndex) {
                const updatedBoard = JSON.parse(JSON.stringify(board))
                const squareToMovePieceTo = updatedBoard[rankIndex][fileIndex]
                const squareToRemovePieceFrom = updatedBoard[y][x]
                console.log("square details", squareToMovePieceTo.piece.name, squareToMovePieceTo.piece.moves, squareToMovePieceTo.position);
                moveHistory.push({
                    pieceMoved: squareToRemovePieceFrom.piece.name,
                    squareMovedTo: squareToMovePieceTo.position,
                    pieceTaken: squareToMovePieceTo.piece.name,
                    squareMovedFrom: squareToRemovePieceFrom.position
                })
                squareToMovePieceTo.piece = {...squareToRemovePieceFrom.piece, moves: squareToRemovePieceFrom.piece.moves + 1}
                squareToRemovePieceFrom.piece = ""
                setBoard(updatedBoard)
                for (const item of moveHistory) {
                    console.log(item);
                }
                break
            }
        }
    }

    function handleDragStart(event, fileIndex, rankIndex, piece) {
        console.log("fileIndex", fileIndex, "rankIndex", rankIndex );
        event.dataTransfer.setData("Co-Ordinates", `${fileIndex},${rankIndex},${piece}`)
    }

    return (
        <Container>
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
        </Container>
    )
}

export default GameBoardPage