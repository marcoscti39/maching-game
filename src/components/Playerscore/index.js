import "./style.css"
function PlayerScore(points = 0){
    return /*html*/`
    <ol class="border-points" data-points = "${points}">
        <li class="point">um</li>
        <li class="point">dois</li>
        <li class="point">três</li>      
    </ol>
    `
}export default PlayerScore