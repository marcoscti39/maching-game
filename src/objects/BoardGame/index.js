import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"
import cards from  "./data.js"

function BoardGame(){
    
    window.justFlipTwoCards = {}
    window.justFlipTwoCards.handleClick = () =>{
        const hideCards = () =>{
            $twoCardsCheck.forEach((card) => card.classList.remove("-active")) }
        const playerSwap = () =>{
            const showPlayerTurn = $ArrowDown.getAttribute('data-currentplayer')
            $ArrowDown.setAttribute('data-currentplayer', showPlayerTurn == 2? 1 : 2)
        }

        const $ArrowDown = document.querySelector('.arrow-down')
        const $twoCardsCheck = document.querySelectorAll(".card-sides.-active")
        if ($twoCardsCheck.length == 2){
            setTimeout(() => {
                playerSwap()
                hideCards()         
          }, 800);
        }
            
    

    } 
    const htmlCardslist = cards.map(card => CardFrontBack(card.icon, card.altIcon))
    const $htmlcards = htmlCardslist.join('')


    return /*html*/`<section class="board-game" onClick="justFlipTwoCards.handleClick()">${$htmlcards}</section>`
}
export default BoardGame