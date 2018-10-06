import nav from "./nav";
//import { footer } from "./footer";
import makeButton from "./button";
import makeImage from "./image";
import { makeColorStyle } from "./button-styles";

import css from "./footer.css";
import buttonStyles from "./button.css";
import imageUrl from "./one-piece.jpg";
//import Foo from "./foo.ts";

const loadFooter=()=> import("./footer");

const image=makeImage(imageUrl);
const button=makeButton("Ula");
button.style=makeColorStyle("cyan")

button.addEventListener("click",e=>{
   loadFooter().then(m =>{
       document.body.appendChild(m.footer);
   })
});

document.body.appendChild(image);
document.body.appendChild(button);
//document.body.appendChild(footer);

//console.log(
//    nav(),
//    top,
//    bottom,
//    makeColorStyle("cyan")
//);