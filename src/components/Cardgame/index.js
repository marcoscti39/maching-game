import "./style.css"
function Cardgame(icon ="alura-pixel", alt ="logo da alura") {
    return /*html*/`
    
    <article class="card-game">
    <img src="images/${icon}.png" alt="${alt}">
    </article>
`
}
export default Cardgame