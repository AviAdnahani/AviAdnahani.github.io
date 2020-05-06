import {
    ID_MAIN_BODY, 
    ID_PROJECT_TABLE,
    COLOR_GREEN_WHITE,
    TR, TH, TD,
    MAIN, ID_MAIN, ID_BODY
} from '../model/000_consts.js';

import {
    getHeaderHeight,
    getFooterHeight,
} from '../controller/events_main.js';


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
    innerHtml: 'testing1<br/>testing2<br/>testing3<br/>testing4<br/>testing5<br/>testing6<br/>',
    events: {
        resize: {
            style: { 
                marginTop: getHeaderHeight,
                marginBottom: getFooterHeight,
            }
        },
    },
    style: { 
        marginTop: getHeaderHeight(),
        marginBottom: getFooterHeight(),
    },
}

export {
    MAIN_MATA,
    returnHeightH,
    returnHeightF
}