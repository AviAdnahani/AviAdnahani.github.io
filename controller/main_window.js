import {ID_BODY} from '../modules/000_consts.js';

function setBodyStyle() {
    var body = document.getElementById(ID_BODY);
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.fontFamily = "Comfortaa, cursive";
}

function loadMain(){
    console.log("what the fuck?");
}

export { setBodyStyle, loadMain};