import "./style.css"
function ArrowDown(currentplayer = 1){
    return /*html*/`
    <img class="arrow-down"
     data-currentplayer = "${currentplayer}"
     src="images/ArrowDown.png"
     alt="indica vez do jogador">
    `
}
export default ArrowDown