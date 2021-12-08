import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"
import cards from  "./data.js"
function BoardGame(amount){
    const htmlCardslist = cards.map(card => CardFrontBack(card.icon, card.altIcon))
    const $htmlcards = htmlCardslist.join('')


    return /*html*/`<section class="board-game">${$htmlcards}</section>`
}
export default BoardGame