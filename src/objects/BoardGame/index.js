import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"
function BoardGame(amount){
    const $htmlCardFrontBack = CardFrontBack()
    const $htmlBoardGame = $htmlCardFrontBack.repeat(amount)

    console.log($htmlBoardGame)
    return /*html*/`<section class="board-game">${$htmlBoardGame}</section>`
}
export default BoardGame