import React, { useState } from "react";
import styled from "styled-components";
import "../styles/GameBoardPage.css"

const INITIAL_BOARD = [
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""]
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
    background-color: ${props => (!(props.rank % 2) && !(props.file % 2)) || ((props.rank % 2) && (props.file % 2)) ? "black" : "white"};
    color: aquamarine; 
`

function GameBoardPage() {

    const [board, setBoard] = useState(INITIAL_BOARD)

    return (
        <Container>
            <Board>
                {
                    board.map((rank, rankIndex) => rank.map((square, fileIndex) => {
                        return <Square rank={rankIndex} file={fileIndex}>square</Square>
                    }))
                }
            </Board>
        </Container>
    )
}

export default GameBoardPage