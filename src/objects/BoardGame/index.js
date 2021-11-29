import "./style.css"
import Cardgame from "../../components/Cardgame"
function BoardGame(amount){
    const $htmlCardgame = Cardgame()
    const $htmlBoardGame = $htmlCardgame.repeat(amount)
    console.log($htmlBoardGame)
    return $htmlBoardGame
}
export default BoardGame