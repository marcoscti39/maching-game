import Cardgame from "../Cardgame"
import "./style.css"
function CardFrontBack(){
    return/*html*/`
    <article class="card-sides">
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