import {getElementHeight} from '../functions/functions_global.js';
import { ID } from '../../model/consts.js';

function getHeaderHeight() {
    var id = ID.HEADER;
    var H = document.getElementById(id);
    if (H) {
        return getElementHeight(H);
    }
    console.error(`cannot get the element ${id}`);
    return null;
}

function getFooterHeight () {
    var id = ID.FOOTER;
    var F = document.getElementById(id);
    if (F) {
        return getElementHeight(F);
    }
    console.error(`cannot get the element ${id}`);
    return null;
}

function getMainTop () {
    var id = ID.MAIN;
    var M = document.getElementById(id);
    if (M) {
        return window.getComputedStyle(M).getPropertyValue("top");;
    }
    console.error(`cannot get the element ${id}`);
    return null;
}

export {
    getHeaderHeight,
    getFooterHeight,
    getMainTop
}