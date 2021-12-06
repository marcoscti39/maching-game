import Cardgame from "../Cardgame"
import "./style.css"
function CardFrontBack(){
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
    ${Cardgame("javascript", "logo java script")}
    </div>
    </article>
    `

}
export default CardFrontBack