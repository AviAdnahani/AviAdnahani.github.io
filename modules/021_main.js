import {
    ID_MAIN_BODY, 
    ID_PROJECT_TABLE,
    COLOR_GREEN_WHITE,
    TR, TH, TD,
    MAIN, ID_MAIN, ID_BODY
} from './000_consts.js';


var H = document.getElementById("id_header");
var F = document.getElementById("id_footer");

function returnHeightH () {
    return window.getComputedStyle(H).getPropertyValue("height");
}

function returnHeightF () {
    return window.getComputedStyle(F).getPropertyValue("height");
}

const MAIN_MATA = {
    element: MAIN,
    perent_id: ID_BODY,
    attributs: {id: ID_MAIN},
    events: {
        resize: {
            style: { // is this workes? or to send a function?
                marginTop: returnHeightH,
                marginBottom: returnHeightF,
            }
        }
    }
}

export {
    MAIN_MATA,
    returnHeightH,
    returnHeightF
}