import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/Playerscore"
import VersusPlayer from "../../components/Versus-Player"
import "./style.css"
function ScoreBoard(){
    return /*html*/ `
    <header class="score-board">
    ${PlayerName('Player1')}
    ${PlayerScore()}
    ${VersusPlayer()}
    ${PlayerScore(3)}
    ${PlayerName('Player2')}
    
    </header>`
}
export default ScoreBoard