import { whoWon } from "../helpers"

function GameInfo({board, turn}) {
    if (!board) return null
    if (!whoWon(board)) return <h2>{turn} to play</h2>
    return <h2>{whoWon(board)} wins!</h2>
}

export default GameInfo