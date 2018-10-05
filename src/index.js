import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from "./footer.css";
import buttonStyles from "./button.css";
import image from "./one-piece.jpg";

const button=makeButton("Ula");
button.style=makeColorStyle("cyan")

document.body.appendChild(button);
document.body.appendChild(footer);

//console.log(
//    nav(),
//    top,
//    bottom,
//    makeColorStyle("cyan")
//);