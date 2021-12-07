import "./style.css"
function ArrowDown(currentPlayer = 1){
    return /*html*/`
    <img class="arrow-down"
     data-currentPlayer = "${currentPlayer}"
     src="images/ArrowDown.png"
     alt="indica vez do jogador">
    `
}
export default ArrowDown