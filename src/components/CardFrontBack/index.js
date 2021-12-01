import Cardgame from "../Cardgame"
function CardFrontBack(){
    return/*html*/`
    <article class="card-sides">
    ${Cardgame()}
    ${Cardgame("javascript", "logo java script")}
    </article>
    `
}
export default CardFrontBack