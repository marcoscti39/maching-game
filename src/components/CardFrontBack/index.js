import Cardgame from "../Cardgame"
function CardFrontBack(){
    return/*html*/`
    <article class="card-sides">
    ${Cardgame()}
    ${Cardgame()}
    </article>
    `
}
export default CardFrontBack