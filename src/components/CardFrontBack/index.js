import Cardgame from "../Cardgame"
import "./style.css"
function CardFrontBack(icon, altIcon){
    window.cardFrontBack = {}
    window.cardFrontBack.HandleClick = (event) => {
        const $origin =  event.target
        const $cardFrontBack = $origin.closest('.card-sides')
        $cardFrontBack.classList.toggle('-active')
    }
    return/*html*/`
    <article class="card-sides" onClick="cardFrontBack.HandleClick(event)">
    <div class="card -front">
    ${Cardgame()}
    </div>
    <div class="card -back">
    ${Cardgame(icon, altIcon)}
    </div>
    </article>
    `

}
export default CardFrontBack