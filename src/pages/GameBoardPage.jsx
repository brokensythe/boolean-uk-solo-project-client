import React, { useState } from "react";
import styled from "styled-components";
import "../styles/GameBoardPage.css"

const INITIAL_BOARD = [
    [{
        piece: "black rook",
        position: "A8"
    },{
        piece: "black knight",
        position: "B8"
    },{
        piece: "black bishop",
        position: "C8"
    },{
        piece: "black queen",
        position: "D8"
    },{
        piece: "black king",
        position: "E8"
    },{
        piece: "black bishop",
        position: "F8"
    },{
        piece: "black knight",
        position: "G8"
    },{
        piece: "black rook",
        position: "H8"
    }],
    [{
        piece: "black pawn",
        position: "A7"
    },{
        piece: "black pawn",
        position: "B7"
    },{
        piece: "black pawn",
        position: "C7"
    },{
        piece: "black pawn",
        position: "D7"
    },{
        piece: "black pawn",
        position: "E7"
    },{
        piece: "black pawn",
        position: "F7"
    },{
        piece: "black pawn",
        position: "G7"
    },{
        piece: "black pawn",
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
        piece: "white pawn",
        position: "A2" 
    },{
        piece: "white pawn",
        position: "B2" 
    },{
        piece: "white pawn",
        position: "C2" 
    },{
        piece: "white pawn",
        position: "D2" 
    },{
        piece: "white pawn",
        position: "E2" 
    },{
        piece: "white pawn",
        position: "F2" 
    },{
        piece: "white pawn",
        position: "G2" 
    },{
        piece: "white pawn",
        position: "H2" 
    }],
    [{
        piece: "white rook",
        position: "A1"
    },{
        piece: "white knight",
        position: "B1"  
    },{
        piece: "white bishop",
        position: "C1"  
    },{
        piece: "white queen",
        position: "D1"  
    },{
        piece: "white king",
        position: "E1" 
    },{
        piece: "white bishop",
        position: "F1" 
    },{
        piece: "white knight",
        position: "G1" 
    },{
        piece: "white rook",
        position: "H1"
    }]
]

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

    function movePiece({ board, rankIndex, fileIndex }) {
        const updatedBoard = JSON.parse(JSON.stringify(board))

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
    }

    return (
        <Container>
            <Board>
                {
                    board.map((rank, rankIndex) => rank.map((square, fileIndex) => {
                        if (square.piece === "black rook") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/gi.php?type=1&id=3400&i=1"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "black knight") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3402_black-knight.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "black bishop") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3401_black-bishop.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "black queen") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3399_black-queen.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "black king") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3398_black-king.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "black pawn") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3403_black-pawn.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "white pawn") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3409_white-pawn.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "white rook") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3406_white-rook.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "white knight") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3408_white-knight.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "white bishop") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3407_white-bishop.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "white queen") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3405_white-queen.png"} alt={square.piece}/>
                            </Square>
                        }
                        if (square.piece === "white king") {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>
                                <Piece src={"https://www.symbols.com/images/symbol/1/3404_white-king.png"} alt={square.piece}/>
                            </Square>
                        }
                        else {
                            return <Square rank={rankIndex} file={fileIndex} piece={square.piece}>

                            </Square>
                        }
                    }))
                }
            </Board>
        </Container>
    )
}

export default GameBoardPage