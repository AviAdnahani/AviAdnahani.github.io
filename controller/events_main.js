import {getElementHeight} from './functions_global.js';

function getHeaderHeight() {
    var H = document.getElementById("id_header");
    if (H) {
        return getElementHeight(H);
    }
    console.error(`cannot get the element`);
    return null;
}

function getFooterHeight () {
    var F = document.getElementById("id_footer");
    if (F) {
        return getElementHeight(F);
    }
    console.error(`cannot get the element`);
    return null;
}

export {
    getHeaderHeight,
    getFooterHeight,
}