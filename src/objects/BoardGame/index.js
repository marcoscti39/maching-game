import "./style.css"
import Cardgame from "../../components/Cardgame"
function BoardGame(amount){
    const $htmlCardgame = Cardgame()
    const $htmlBoardGame = $htmlCardgame.repeat(amount)
    console.log($htmlBoardGame)
    return /*html*/`<section class="board-game">${$htmlBoardGame}</section>`
}
export default BoardGame