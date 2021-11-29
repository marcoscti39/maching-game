import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import Cardgame from "./src/components/Cardgame"
const $htmlCardgame = Cardgame()
const $root = document.querySelector("#root")
console.log($htmlCardgame)
$root.insertAdjacentHTML("beforeend", $htmlCardgame)

