import { useHistory } from "react-router";
import { GAMES } from "../fetchURLS"


function GameStartButton() {
    const history = useHistory()

    function handleClick(e) {
        fetch(GAMES, {
            method: "POST"
        })
        .then(res=>res.json())
        .then(data => {
            history.push(`/game/${data.data.id}`)
        })
    }

    return (
        <button onClick={handleClick}>Start Game</button>
    )
}

export default GameStartButton